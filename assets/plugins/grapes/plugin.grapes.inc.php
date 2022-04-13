<?php 
  
require_once(MODX_BASE_PATH."assets/plugins/grapes/grapes.class.php");  
$grapes = new Grapes($options);

$e = &$modx->event;

switch ($e->name) {
    case "OnRichTextEditorRegister":
        $e->output('Grapes');
        break;
    
    case "OnRichTextEditorInit":
        if ($editor === 'Grapes') {
            $script = $grapes->getEditorScript();
            $e->output($script);
        };
        break;

    case "OnPageNotFound":
      if (strpos($_GET['q'], 'grapesEditor') === 0) {
        echo $grapes->ajax();
        die();
      }
    break;

    case 'OnWebPagePrerender':
        preg_match_all('/<img.*?src="([^"]*)".*?grapes-image="([^"]*)".*?>/', $documentOutput, $images);
        if($images) {
            foreach($images[0] as $i=>$img_tag) {
                $original_image = $images[1][$i];

                $img_tag_replace = str_replace($images[1][$i], $modx->runSnippet('phpthumb', ['input'=>$images[1][$i], 'options'=>$images[2][$i]]), $img_tag);
                if(preg_match("#grapes-fancybox#", $img_tag_replace)) {
                    $img_tag_replace = str_replace('grapes-fancybox', 'role="button" data-src="'.$original_image.'" data-fancybox="grapes"', $img_tag_replace);
                }

                $img_tag_replace = preg_replace('/grapes-image=".*?"/', '', $img_tag_replace);
                $documentOutput = str_replace($img_tag, $img_tag_replace, $documentOutput);
            }
        }

        $e->output($documentOutput);
    break;

    default :
        return; // important! stop here!
        break;
}

?>