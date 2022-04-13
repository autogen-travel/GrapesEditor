//<?php
/**
 * Grapes Editor
 *
 * <strong>0.1</strong> Grapes Editor
 *
 * @category    plugin
 * @internal    @events OnWebPagePrerender,OnPageNotFound,OnRichTextEditorInit,OnRichTextEditorRegister
 * @internal    @modx_category Content
 * @internal    @properties &styles=Ссылка на CSS стили;text;;Чтобы в редакторе блоки отображались так же как на сайте &width=Ширина базового контейнера;text;1024px; &frameHeight=Высота конструктора;text;500px
 * @internal    @disabled 0
 * @internal    @installset base
 */
 
if (!defined('MODX_BASE_PATH')) { die('What are you doing? Get out of here!'); }
require(MODX_BASE_PATH."assets/plugins/grapes/plugin.grapes.inc.php");
