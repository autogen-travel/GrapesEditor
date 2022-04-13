<?php 

  class Grapes {
    public function __construct() {
      $this->evo = evolutionCMS();
      $this->pluginParams = isset($this->evo->event->params) ? $this->evo->event->params : array();
    }

    public function getEditorScript () {
        $ph = array();
        $output = '<style>.grapes-main{height:'.$this->pluginParams['frameHeight'].'!important;} .gjs-frame{max-width: '.$this->pluginParams['width'].';}</style>';

        $styles = explode(',', $this->pluginParams['styles']);
        $scripts = explode(',', $this->pluginParams['scripts']);

        // Init via elements
        if (isset($this->pluginParams['elements'])) {

            $this->pluginParams['elements'] = !is_array($this->pluginParams['elements']) ? explode(',', $this->pluginParams['elements']) : $this->pluginParams['elements'];

            // Now loop through tvs
            foreach ($this->pluginParams['elements'] as $selector) {
                $output .= '<style>textarea[name="'.$selector.'"]{display:none;}</style>';
                // Init only once at all - Load Editors-Library, CSS etc
                if (!defined('INIT_ONCE')) {
                  define('INIT_ONCE', 1);
                  $output .= file_get_contents(MODX_BASE_PATH . 'assets/plugins/grapes/tpl/scripts.tpl') . "\n";
                  $output .= '<script>var grapesStyles = '.json_encode($styles).';</script>'. "\n";
                  $output .= '<script>var grapesScripts = '.json_encode($scripts).';</script>'. "\n";
                  $output .= '<script>var grapesBaseConfig = ' . file_get_contents(MODX_BASE_PATH . 'assets/plugins/grapes/config.json') . ';</script>'. "\n";
                  $output .= '<script>var grapesConfig = ' . json_encode($this->getConfig()) . ';</script>'. "\n";
                }

                $tpl = $this->evo->parseText(file_get_contents(MODX_BASE_PATH . 'assets/plugins/grapes/tpl/main.tpl'), ['grapesID'=>$selector], '[+', '+]');
                $output .= "<script type=\"text/javascript\">startGrapes('".$selector."', `{$tpl}`)</script>";
            }

        } else {
            if (!defined('INIT_ONCE')) {
              define('INIT_ONCE', 1);
              $output .= file_get_contents(MODX_BASE_PATH . 'assets/plugins/grapes/tpl/scripts.tpl') . "\n";
              $output .= '<script>var grapesStyles = "' . json_encode($styles) . '";</script>'. "\n";
              $output .= '<script>var grapesScripts = "' . json_encode($scripts) . '";</script>'. "\n";
              $output .= "<script>var grapesBaseConfig = " . file_get_contents(MODX_BASE_PATH . 'assets/plugins/grapes/config.json') . ";</script>";
              $output .= '<script>var grapesConfig = ' . json_encode($this->getConfig()) . ';</script>'. "\n";
            }
        }
        return $output;
    }

    public function getConfig() {
        $config = [];
        /* Картинки */
        $files = glob(MODX_BASE_PATH . "assets/images/grapesEditor/*.{jpg,png,gif,svg}", GLOB_BRACE);
        $files = array_map(function(&$file) {
          return ['type'=>'image', 'thumb'=>'/'.$this->evo->runSnippet('phpthumb', ['input'=>str_replace(MODX_BASE_PATH, '/', $file), 'options'=>'w=120,h=70,zc=1']), 'src'=>str_replace(MODX_BASE_PATH, '/', $file)];
        }, $files);
        $config['assets'] = $files;

        /* Блоки */
        $blocks = glob(MODX_BASE_PATH . "assets/plugins/grapes/blocks/*.{json}", GLOB_BRACE);
        $block_content = [];
        foreach($blocks as $block) {
          $code = file_get_contents($block);
          $code = json_decode($code, true);
          //$block_id = str_replace(['blocks/', '.json'], '', $block);
          $block_content[] = $code;
        }
        $config['blocks'] = $block_content;

        return $config;
    }

    public function ajax() {
      if(isset($_FILES['files'])) {
        $output = [ 'data'=>[] ];
        foreach($_FILES['files']['tmp_name'] as $i => $tempfile) {
          if(!is_dir(MODX_BASE_PATH . 'assets/images/grapesEditor')) {
            mkdir(MODX_BASE_PATH . 'assets/images/grapesEditor');
          }
          $newfilename = $this->evo->stripAlias($_FILES['files']['name'][$i]);
          copy($tempfile, MODX_BASE_PATH . 'assets/images/grapesEditor/'.$newfilename);
          $output['data'][] = ['thumb'=>'/'.$this->evo->runSnippet('phpthumb', ['input'=>'/assets/images/grapesEditor/'.$newfilename, 'options'=>'w=120,h=70,zc=1']), 'src'=>'/assets/images/grapesEditor/'.$newfilename];
        }
        return json_encode($output);
      }

      $postData = file_get_contents('php://input');
      $postData = json_decode($postData, true);

      if(isset($postData['action']) && $postData['action'] == 'remove') {
        $file_to_remove = $postData['id'];
        if(preg_match("#/assets/images/grapesEditor/#", $file_to_remove)) {
          $filename = str_replace('/assets/images/grapesEditor/', '', $file_to_remove);
          unlink(MODX_BASE_PATH . 'assets/images/grapesEditor/'.$filename);
          return json_encode(['filename'=>$filename]);
        }
        return [];
      }

      if(isset($postData['action']) && $postData['action'] == 'customBlock') {

        $id = $postData['blockid'] ? $postData['blockid'] : bin2hex(random_bytes(4));
        $label = $postData['label'];
        $content = $postData['html'];

        $block_content = ['id'=>$id, 'label'=>$label, 'content'=>$content, 'category' => 'Мои блоки'];
        file_put_contents(MODX_BASE_PATH . 'assets/plugins/grapes/blocks/'.$id.'.json', json_encode($block_content));

        return json_encode(['id'=>$id, 'block'=>$block_content, 'css'=>$css]);
      }

      if(isset($postData['action']) && $postData['action'] == 'deleteCustomBlock') {
        $id = $postData['blockid'] ? $postData['blockid'] : bin2hex(random_bytes(4));
        unlink(MODX_BASE_PATH . 'assets/plugins/grapes/blocks/'.$id.'.json');
        return json_encode(['id'=>$id]);
      }
    }
  }


?>