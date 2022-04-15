<?php 

if (!defined('MODX_BASE_PATH')) {
    die('What are you doing? Get out of here!');
}


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
        if (empty($_SESSION['mgrInternalKey'])) {
            die('What are you doing? Get out of here!');
        }
        echo $grapes->ajax();
        die();
    }
    break;

    case 'OnWebPagePrerender':
    preg_match_all('/<img.*?src="([^"]*)".*?grapes-image="([^"]*)".*?>/', $documentOutput, $images);
    if($images) {
        foreach($images[0] as $i=>$img_tag) {
            $original_image = $images[1][$i];

            $img_tag_replace = str_replace($images[1][$i], $modx->runSnippet('phpthumb', ['input'=>$images[1][$i], 'options'=>$images[2][$i].',zc=1']), $img_tag);
            if(preg_match("#grapes-fancybox#", $img_tag_replace)) {
                $img_tag_replace = str_replace('grapes-fancybox', 'role="button" data-src="'.$original_image.'" data-fancybox="grapes"', $img_tag_replace);
            }

            $img_tag_replace = preg_replace('/grapes-image=".*?"/', '', $img_tag_replace);
            $documentOutput = str_replace($img_tag, $img_tag_replace, $documentOutput);
        }
    }
    /* styles */
    preg_match_all('/<style.*?type="grapes">([^>]*)<\/style>/', $documentOutput, $styles);
    if($styles) {
        $styles_str = '';
        foreach($styles[0] as $i=>$style_block) {
            $styles_str .= str_replace(['* { box-sizing: border-box; }', 'body {margin: 0;}', '*{box-sizing:border-box;}'], '', $styles[1][$i]);
            $documentOutput = str_replace($styles[0][$i], '', $documentOutput);
        }
        if(!empty($styles_str)) {
            $documentOutput = str_replace('</head>', '<style>'.$styles_str.'</style></head>', $documentOutput);
        }
    }


    $modx->documentOutput = $documentOutput;
        //$e->output($documentOutput);
    break;

    default :
        return; // important! stop here!
        break;
    }

?>