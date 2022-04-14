<?php 

class Grapes {
  public function __construct() {
    $this->evo = evolutionCMS();
    $this->pluginParams = isset($this->evo->event->params) ? $this->evo->event->params : array();
    $this->imagesFolder = MODX_BASE_PATH . 'assets/images/grapesEditor/';
  }


  public function getEditorScript () {

    if (isset($this->pluginParams['elements'])) {
      $output = '<style>.grapes-main{height:'.$this->pluginParams['frameHeight'].'!important;} .gjs-frame{max-width: '.$this->pluginParams['width'].';}</style>';

      if (!defined('GRAPES_INIT')) {
        define('GRAPES_INIT', 1);
        $output .= file_get_contents(MODX_BASE_PATH . 'assets/plugins/grapes/tpl/scripts.tpl') . "\n";
        $output .= '<script>var grapesConfig = ' . json_encode($this->getConfig()) . ';</script>'. "\n";
      }

      $this->pluginParams['elements'] = !is_array($this->pluginParams['elements']) ? explode(',', $this->pluginParams['elements']) : $this->pluginParams['elements'];

      foreach ($this->pluginParams['elements'] as $selector) {
        $output .= '<style>textarea[name="'.$selector.'"]{display:none;}</style>';
        $output .= "<script type=\"text/javascript\">startGrapes('".$selector."')</script>";
      }

    }
    return $output;
  }


  public function getConfig() {
    $config = [];
    /* Стили */
    $styles = explode(',', $this->pluginParams['styles']);
    $config['styles'] = $styles ? $styles : [];

    /* Блоки */
    $blocks = glob(MODX_BASE_PATH . "assets/plugins/grapes/blocks/*.{json}", GLOB_BRACE);
    $block_content = [];
    foreach($blocks as $block) {
      $code = file_get_contents($block);
      $code = json_decode($code, true);
      $block_content[] = $code;
    }
    $config['blocks'] = $block_content;

    return $config;
  }


  private function uploadImage($file, $folder) {
    $allowMimeTypes = [
      'image/jpeg' => 'jpg',
      'image/png' => 'png',
      'image/gif' => 'gif',
      'image/svg+xml' => 'svg',
      'image/svg' => 'svg'
    ];

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file);    

    if(!isset($allowMimeTypes[$mime])) {
      return false;
    }

    $ext = $allowMimeTypes[$mime];
    $filename = bin2hex(random_bytes(8)).'.'.$ext;

    if(move_uploaded_file($file, $folder.$filename)) {
      return str_replace(MODX_BASE_PATH, '', $folder.$filename);
    }

    return false;
  }


  public function ajax() {
    /* Загрузка изображений */
    if(isset($_FILES['files'])) {
      $output = [ 'data'=>[] ];
      foreach ($_FILES["files"]["error"] as $key => $error) {
        if ($error == UPLOAD_ERR_OK) {
          $tmp_name = $_FILES["files"]["tmp_name"][$key];
          $name = $_FILES["files"]["name"][$key];
          if($savedFile = $this->uploadImage($tmp_name, $this->imagesFolder)) {
            $output['data'][] = [
              'thumb'=>'/'.$this->evo->runSnippet('phpthumb', ['input'=>$savedFile, 'options'=>'w=120,h=70,zc=1']), 
              'src'=>'/'.$savedFile
            ];
          } else {
            $output = [ 'error' ];
          }
        }
      }
      return json_encode($output);
    }

    $postData = file_get_contents('php://input');
    $postData = json_decode($postData, true);

    if(!isset($postData['action'])) return false;

    switch($postData['action']) {
      case 'getImages': 
        /* Получения списка изображений */
        $files = glob(MODX_BASE_PATH . "assets/images/grapesEditor/*.{jpg,png,gif,svg}", GLOB_BRACE);
        $files = array_map(function(&$file) {
          $thumb = '/'.$this->evo->runSnippet('phpthumb', ['input'=>str_replace(MODX_BASE_PATH, '/', $file), 'options'=>'w=120,h=70,zc=1']);
          return ['type'=>'image', 'thumb'=>str_replace('//', '/', $thumb), 'src'=>str_replace(MODX_BASE_PATH, '/', $file)];
        }, $files);
        return json_encode($files);
      break;

      case 'remove':
        /* Удаление изображения */
        $file_to_remove = isset($postData['id']) ? $postData['id'] : false;
        if(preg_match("#/assets/images/grapesEditor/#", $file_to_remove)) {
          $basename = basename($file_to_remove);
          unlink(MODX_BASE_PATH . 'assets/images/grapesEditor/'.$basename);
          return json_encode(['filename'=>$file_to_remove]);
        }
        return [];
      break;

      case 'customBlock':
        /* Сохранение блока */
        $id = $postData['blockid'] ? $postData['blockid'] : bin2hex(random_bytes(4));
        $label = $postData['label'];
        $content = $postData['html'];
        $block_content = ['id'=>$id, 'label'=>$label, 'content'=>$content, 'category' => 'Мои блоки'];
        file_put_contents(MODX_BASE_PATH . 'assets/plugins/grapes/blocks/'.$id.'.json', json_encode($block_content));
        return json_encode(['id'=>$id, 'block'=>$block_content, 'css'=>$css]);
      break;

      case 'deleteCustomBlock':
        /* Удаление блока */
        unlink(MODX_BASE_PATH . 'assets/plugins/grapes/blocks/'.$postData['blockid'].'.json');
        return json_encode(['id'=>$postData['blockid']]);
      break;

      default:
        return false;
      break;
    }
  }
}

?>