const grapesBaseConfig = {
	"avoidInlineStyle": true,
	"height": "100%",
	"width": "auto",
	"cssIcons": false,
	"fromElement": true,
	"showOffsets": true,
	"selectorManager": { 
		"componentFirst": true 
	},
	"mediaCondition": "min-width",

	"storageManager": false,
	"clearStyles": true,
	"noticeOnUnload": 0,

	"colorPicker": {
		"showPalette": true
	},

	"panels": { 
		"defaults": [
		{
			"id": "devices",
			"buttons": [   	
			{ 
				"id": "set-device-desktop", 
				"command": "set-device-desktop", 
				"label": "<svg stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" viewBox=\"0 0 24 24\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M8 21h8m-4-4v4\"></path></svg>",
				"className": "device",
				"tagName": "div",
				"active": true
			},
			{ 
				"id": "set-device-mobile", 
				"command": "set-device-mobile", 
				"label": "<svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><path d=\"M12 18h.01\"></path></svg>",
				"className": "device",
				"tagName": "div"
			}
			]
		},
		{
			"id": "redo",
			"buttons": [
			{
				"id": "show-undo",
				"label": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path fill=\"currentColor\" d=\"M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88 3.16 0 5.89 1.84 7.19 4.5.27.56.91.84 1.5.64.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z\"/></svg>",
				"context": "show-undo",
				"className": "device",
				"tagName": "div",
				"command": "undo",
				"toggled": false
			},
			{
				"id": "show-redo",
				"label": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path fill=\"currentColor\" d=\"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93-.32.67.04 1.47.75 1.71.59.2 1.23-.08 1.5-.64 1.3-2.66 4.03-4.5 7.19-4.5 1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71l-1.89 1.9z\"/></svg>",
				"context": "show-redo",
				"className": "device",
				"tagName": "div",
				"command": "redo",
				"toggled": false
			}
			]
		},
		{
			"id": "misc",
			"buttons": [
			{ 
				"id": "fullscreen", 
				"command": "set-fullscreen", 
				"label": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><g transform=\"translate(-1743 -72)\"><path fill=\"none\" d=\"M0,0H24V24H0Z\" data-name=\"Path 3668\" transform=\"translate(1743 72)\"/><path fill=\"currentColor\" d=\"M-2045.1,19.2a.9.9,0,0,1-.9-.9V12.9a.9.9,0,0,1,.9-.9.9.9,0,0,1,.9.9v3.227l5.2-5.2a.9.9,0,0,1,1.273,0,.9.9,0,0,1,0,1.273l-5.2,5.2h3.227a.9.9,0,0,1,.9.9.9.9,0,0,1-.9.9Zm9.936-10.927a.9.9,0,0,1,0-1.273l5.2-5.2h-3.227a.9.9,0,0,1-.9-.9.9.9,0,0,1,.9-.9h5.4a.9.9,0,0,1,.9.9V6.3a.9.9,0,0,1-.9.9.9.9,0,0,1-.9-.9V3.073l-5.2,5.2a.9.9,0,0,1-.636.264A.9.9,0,0,1-2035.164,8.273Z\" data-name=\"Path 3561\" transform=\"translate(3791.4 74.4)\"/></g></svg>",
				"className": "device fs",
				"tagName": "div"
			},
			{
				"id": "visibility",
				"active": true,
				"className": "device",
				"label": "<svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M20.5,3.5c0-0.6-0.4-1-1-1h-16c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-15h15C20.1,4.5,20.5,4.1,20.5,3.5z M19.5,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,10.5,19.5,10.5z M19.5,6.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1 S20.1,6.5,19.5,6.5z M19.5,14.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,14.5,19.5,14.5z M7.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1 s1-0.4,1-1S8.1,18.5,7.5,18.5z M11.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,18.5,11.5,18.5z M15.5,18.5c-0.6,0-1,0.4-1,1 s0.4,1,1,1s1-0.4,1-1S16.1,18.5,15.5,18.5z M19.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,18.5,19.5,18.5z\"/></svg>",
				"command": "sw-visibility",
				"tagName": "div",
				"toggled": true
			},
			{
				"id": "canvas-clear",
				"active": false,
				"className": "device",
				"label": "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\"><path fill=\"currentColor\" d=\"M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z\"/></svg>",
				"command": "canvas-clear",
				"tagName": "div",
				"toggled": false
			}
			]
		},

		{
			"id": "settings",
			"buttons": [
			{
				"id": "settings",
				"active": false,
				"className": "device",
				"label": "<svg fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\"><path fill=\"currentColor\" d=\"M 10.490234 2 C 10.011234 2 9.6017656 2.3385938 9.5097656 2.8085938 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 5.2851562 5.2480469 C 4.8321563 5.0920469 4.33375 5.2793594 4.09375 5.6933594 L 2.5859375 8.3066406 C 2.3469375 8.7216406 2.4339219 9.2485 2.7949219 9.5625 L 4.1132812 10.708984 C 4.0447181 11.130337 4 11.559284 4 12 C 4 12.440716 4.0447181 12.869663 4.1132812 13.291016 L 2.7949219 14.4375 C 2.4339219 14.7515 2.3469375 15.278359 2.5859375 15.693359 L 4.09375 18.306641 C 4.33275 18.721641 4.8321562 18.908906 5.2851562 18.753906 L 6.9296875 18.1875 C 7.5958842 18.734206 8.3553934 19.166339 9.1757812 19.476562 L 9.5097656 21.191406 C 9.6017656 21.661406 10.011234 22 10.490234 22 L 13.509766 22 C 13.988766 22 14.398234 21.661406 14.490234 21.191406 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 18.714844 18.751953 C 19.167844 18.907953 19.66625 18.721641 19.90625 18.306641 L 21.414062 15.691406 C 21.653063 15.276406 21.566078 14.7515 21.205078 14.4375 L 19.886719 13.291016 C 19.955282 12.869663 20 12.440716 20 12 C 20 11.559284 19.955282 11.130337 19.886719 10.708984 L 21.205078 9.5625 C 21.566078 9.2485 21.653063 8.7216406 21.414062 8.3066406 L 19.90625 5.6933594 C 19.66725 5.2783594 19.167844 5.0910937 18.714844 5.2460938 L 17.070312 5.8125 C 16.404116 5.2657937 15.644607 4.8336609 14.824219 4.5234375 L 14.490234 2.8085938 C 14.398234 2.3385937 13.988766 2 13.509766 2 L 10.490234 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z\"/></svg>",
				"tagName": "div",
				"command": "show-settings"
			}
			]
		}
		] 
	},

	"styleManager": {
		"sectors": [
		{
			"name": "???????? ????????????",
			"open": false,
			"buildProps": ["color"],
			"properties": [
			{
				"property": "color"
			}
			]
		},
		{
			"name": "????????????????????????",
			"open": false,
			"buildProps": ["text-align"],
			"properties": [
			{
				"name": "???????????????????????? ????????????",
				"property": "text-align",
				"defaults": "none",
				"min": 0
			}
			]
		},
		{
			"name": "??????????????",
			"open": false,
			"buildProps": ["width", "height", "padding", "margin"],
			"properties": [
			{ 
				"type": "integer",
				"name": "????????????",
				"property": "width",
				"units": ["px", "%"],
				"defaults": "auto",
				"min": 0
			},
			{ 
				"type": "integer",
				"name": "????????????",
				"property": "height",
				"units": ["px", "%"],
				"defaults": "auto",
				"min": 0
			}
			]
		},
		{
			"name": "???????????????????? ??????????????",
			"open": false,
			"buildProps": ["padding"],
			"properties": [
			{
				"name": "???????????????????? ??????????????",
				"property": "padding"
			}
			]
		},
		{
			"name": "???????????????? ??????????????",
			"open": false,
			"buildProps": ["margin"],
			"properties": [
			{
				"name": "???????????????? ??????????????",
				"property": "margin"
			}
			]
		},
		{
			"name": "??????",
			"open": false,
			"buildProps": ["background","background-color"],
			"properties": [
			{ 
				"name": "???????? ????????",
				"property": "background-color",
			},
			{ 
				"name": "?????????????? ??????????????????????",
				"property": "background",
			}
			]
		},
		{
			"name": "????????",
			"open": false,
			"buildProps": ["shadow"],
			"properties": [
			{
				"id": "shadow",
				"name": "???????? ??????????",
				"property": "box-shadow",
				"type": "radio",
				"defaults": "none",
				"options": [
				{ "value": "none", "name": "??????" },
				{ "value": "0 0 20px -10px #000", "name": "Light" },
				{ "value": "0 0 15px -5px #000", "name": "Medium" },
				{ "value": "0 0 20px -5px #000", "name": "Strong" }
				]
			},
			{
				"id": "textshadow",
				"name": "???????? ????????????",
				"property": "text-shadow",
				"type": "radio",
				"defaults": "none",
				"options": [
				{ "value": "none", "name": "??????" },
				{ "value": "0px 2px 2px #adadad", "name": "Light" },
				{ "value": "0px 4px 4px #424242", "name": "Medium" },
				{ "value": "0px 4px 3px #040404", "name": "Strong" }
				]
			}
			]
		}
		]
	},

	"canvas": {
		"styles": [],
		"scripts": []
	},

	"deviceManager": {
		"default": "Desktop",
		"devices": [
		{
			"name": "Desktop",
			"width": "",
			"widthMedia": "415px"
		},
		{
			"name": "Mobile",
			"width": "414",
			"widthMedia": ""
		}
		]
	},
	"blockManager": {
		"blocks": []
	},
	"traitManager": {	
	},

	"assetManager": {
		"dropzone": true,
		"showUrlInput": false,
		"openAssetsOnDrop": true,
		"dropzoneContent": "<div class=\"dropzone-inner\">Drop here your images</div>",
		"uploadName": "files",
		"upload": "/grapesEditor"
	}
};


const baseTpl = `<div id="wrapper-[+grapesID+]" class="grapesEditor grapes-main">
<div class="panel-view">
<div class="panel panel-devices"></div>
<div class="panel panel-redo"></div>
<div class="panel panel-misc"></div>
<div class="panel panel-settings d-none"></div>
</div>
<div class="sidebar">
<div class="sidebar-wrapper">
<div class="traits-wrapper d-none">
<div class="traits"></div>
</div>
<div class="sidebar-tabs">
<div class="styles" data-tab="styles" onclick="tab(this)">??????????</div>
<div class="blocks active" data-tab="blocks" onclick="tab(this)">??????????</div>
</div>
<div class="sidebar-content">
<div class="styles"></div>
<div class="blocks active">
<div class="blockList"></div>
<div class="addCustomBlock">
<a class="btn btn-success" href="javascript:;" data-grapes="addCustomBlock">
<span>???????????????? ???????? ????????</span>
</a>
</div>
</div>
</div>
</div>
<div class="label">
<svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
<path fill="#494c4e" d="M5.49 15.61a1.5 1.5 0 0 1-.1-2.12L9.47 9 5.39 4.51a1.5 1.5 0 1 1 2.22-2.02L12.62 8A1.474 1.474 0 0 1 13 9a1.524 1.524 0 0 1-.38 1l-5.01 5.51a1.5 1.5 0 0 1-2.12.1z"/>
</svg>
</div>
</div>
<div id="grapes-[+grapesID+]" style="height:0px; overflow:hidden"></div>
</div>`;


function tab(el) {
	let tabName = $(el).data('tab')
	$(el).closest('.sidebar-wrapper').find('.sidebar-tabs>div').removeClass('active')
	$(el).addClass('active')
	$(el).closest('.sidebar-wrapper').find('.sidebar-content>div').removeClass('active')
	$(el).closest('.sidebar-wrapper').find('.'+tabName).addClass('active')
}

function aceEditor() {
	$('textarea[data-editor]').each(function() {
		var textarea = $(this);
		var mode = textarea.data('editor');
		var editDiv = $('<div>', {
			position: 'absolute',
			width: textarea.width(),
			height: textarea.height(),
			'class': textarea.attr('class')
		}).insertBefore(textarea);
		textarea.css('display', 'none');
		var aceeditor = ace.edit(editDiv[0]);
		aceeditor.renderer.setShowGutter(textarea.data('gutter'));
		aceeditor.getSession().setValue(textarea.val());
		aceeditor.getSession().setMode("ace/mode/" + mode);
		aceeditor.setTheme("ace/theme/idle_fingers");
		aceeditor.getSession().setTabSize(2);
		aceeditor.getSession().setUseWrapMode(true);

		aceeditor.getSession().on('change', function(){
			textarea.val(aceeditor.getSession().getValue());
		});
	});
}

function assetsThumbnails(editor){
	const am = editor.AssetManager;
	am.addType('image', {
		view: {
			getPreview() {
				const thumb = this.model.get('thumb');
				return `<div class="gjs-am-preview" style="background-image: url('${thumb}');"></div>`;
			}
		}
	})
}

$(document).on('click', '.grapesEditor .sidebar .label', function(e){
	e.preventDefault();
	$(this).closest('.sidebar').toggleClass('is-open');
})

$(window).keydown(function(event) {
	if(event.keyCode == 13) {
		if($(event.target).is('.form-control') || $(event.target).closest('.gjs-input-holder').length) {
			event.preventDefault();
			return false;
		}
	}
})


function startGrapes(element) {
	var textarea = document.querySelector('textarea[name="'+element+'"]')
	if (!textarea) return

	const tpl = baseTpl.replace(/\[\+grapesID\+\]/g, element);
	$(tpl).insertBefore(textarea);
	$('#grapes-'+element).html(textarea.value.replace(/div class="grapesBody"/g, 'body'))

	grapesBaseConfig.panels.defaults[0].appendTo = '#wrapper-'+element+' .panel-devices'
	grapesBaseConfig.panels.defaults[1].appendTo = '#wrapper-'+element+' .panel-redo'
	grapesBaseConfig.panels.defaults[2].appendTo = '#wrapper-'+element+' .panel-misc'
	grapesBaseConfig.panels.defaults[3].appendTo = '#wrapper-'+element+' .panel-settings'
	grapesBaseConfig.blockManager.blocks = grapesConfig.blocks
	grapesBaseConfig.blockManager.appendTo = '#wrapper-'+element+' .blockList'
	grapesBaseConfig.styleManager.appendTo = '#wrapper-'+element+' .sidebar-content .styles'
	grapesBaseConfig.traitManager.appendTo = '#wrapper-'+element+' .traits'
	grapesBaseConfig.canvas.styles = grapesConfig.styles
	grapesBaseConfig.plugins = [assetsThumbnails]
	grapesBaseConfig.container = '#grapes-'+element
	renderEditor('#wrapper-'+element, grapesBaseConfig, textarea)
}



function renderEditor(container, grapesBaseConfig, textarea) {

	const editor = grapesjs.init(grapesBaseConfig);


	editor.onReady(() => {
		$(document).on('click', function(e){
			editor.trigger('update');
			if(!$(e.target).closest('.sidebar').length && !$(e.target).closest('.gjs-mdl-container').length && !$(e.target).closest('.gjs-toolbar').length) {
				$('.grapesEditor .sidebar').removeClass('is-open');
			}
		})

		editor.Commands.add('undo', {
			run: editor => editor.UndoManager.undo(),
			stop: function(){}
		});

		editor.Commands.add('redo', {
			run: editor => editor.UndoManager.redo(),
			stop: function(){}
		});

		editor.Commands.add('set-device-desktop', {
			run: editor => editor.setDevice('Desktop'),
			stop: function(){}
		});

		editor.Commands.add('set-device-mobile', {
			run: editor => editor.setDevice('Mobile'),
			stop: function(){}
		});

		editor.Commands.add('set-fullscreen', {
			run: (editor) => {
				editor.stopCommand('fullscreen');
				editor.runCommand('fullscreen', {  target: container });
			}
		});

		editor.Commands.add('openTraits', {
			run: (editor) => {
				editor.Modal.open({
					title: '?????????????????? ??????????',
					content: $(container + ' .traits-wrapper > .traits').detach()
				});
			}
		});

		editor.on('modal', (modal) => { 
			if(!modal.open && modal.title.data=='?????????????????? ??????????') {
				$(container + ' .traits-wrapper').html($(modal.content).detach())
			}
		})

		editor.Commands.add('openStyles', {
			run: (editor) => {
				$(container + ' .sidebar-tabs .styles').trigger('click')
				$(container + ' .sidebar').addClass('is-open')
			}
		});

		editor.Commands.add('setDrag', {
			stop: function(){editor.setDragMode('none')},
			run: (editor) => {
				editor.setDragMode('translate')
			}
		});

		editor.Commands.add('canvas-clear', function() {
			if(confirm('??????????????, ?????? ???????????? ?????????????????')) {
				var comps = editor.DomComponents.clear();
				setTimeout(function(){ localStorage.clear()}, 0)
			}
		});

		editor.on('asset:upload:start', () => {
			$('.gjs-mdl-content').css({'opacity': .5})
		});

		editor.on('asset:open', () => {
			fetch('/grapesEditor', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/form-data;charset=utf-8'
				},
				body: JSON.stringify({action: 'getImages'})
			})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				editor.AssetManager.load({assets:res})
				editor.AssetManager.render()
			})
		});

		editor.on('asset:upload:end', () => {
			$('.gjs-mdl-content').css({'opacity': 1})
		});


     // editor.Commands.add('show-settings', function() { 
	    // 	editor.Modal.open({
	    //     	title: '?????????????????? ??????????????????',
	    //     	content: `
		   //      <div class="customBlockWrapper">
		   //      <div class="customBlockTitleWrapper">
		   //      	<input type="text" name="css" placeholder="???????????? ???? ?????????? ???????????? ??????????"/>
		   //      	<span>?????????? ?? ?????????????????? ???????????????? ???????????????????????? ?????????? ?????? ???? ??????????</span>
		   //      </div>
		   //       <div class="customBlockTitleWrapper">
		   //      	<input type="text" name="css" placeholder="???????????? ???? ?????????? js"/>
		   //      	<span>?????????? ?? ?????????????????? ???????????????? ???????????????????????? ?????????? ?????? ???? ??????????</span>
		   //      </div>
		   //      <div class="customBlockForm mt-3">
		   //      	<a class="btn btn-success" href="javascript:;" data-grapes="saveGrapesSettings">
	    //           		<span>??????????????????</span>
     //        		</a>
		   //      </div>
		   //      </div>`
	    // 	});
     //  });


		/* Assets Manager*/
		editor.on('asset:remove', (some, argument) => { 
	     	fetch('/grapesEditor', {
	     		method: 'POST',
	     		headers: {
	     			'Content-Type': 'application/form-data;charset=utf-8'
	     		},
	     		body: JSON.stringify({action: 'remove', id: some.id})
	     	});
		})

		editor.on('update', () => {
	     	const selectedComponent = editor.getSelected();
	     	if(selectedComponent?.attributes?.type == 'image') {
	     		let styles = selectedComponent.view.el
		    		selectedComponent.addAttributes({ 'grapes-image':  'w='+styles.width+',h='+styles.height})
		    	}

		    	let output = editor.getHtml()
		    	output = output.replace(/<body/g, '<div class="grapesBody"')
		    	output = output.replace(/body>/g, 'div>')
		    	output += `<style type="grapes">${editor.getCss()}</style>`
		    	output = output.replace('body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}', '')
		    	textarea.value = output
		    	
	    })

		editor.on('component:selected', () => {
	     	const selectedComponent = editor.getSelected();
	     	if(selectedComponent.attributes.tagName == 'body') {
	     		return false;
	     	}

	     	if(selectedComponent.attributes.type == 'image') {
	     		selectedComponent.attributes.resizable = {
	     			ratioDefault: 1,
	     			keepAutoHeight: true,
	     			autoHeight: true,
					  tc: false,
					  cl: false,
					  cr: false,
					  bc: false,
				}

				selectedComponent.setTraits([
					{
						type: 'text',
						label: 'Alt',
						name: 'alt',
						placeholder: 'alt',
					},
					{
						type: 'text',  
						label: 'Title',
						name: 'title',
						placeholder: 'title',
					},
					{
						type: 'checkbox',
						label: 'Fancybox',
						name: 'grapes-fancybox',
					}	
				])		    	
		    }

		    const defaultToolbar = selectedComponent.get('toolbar');
		    const addedIcons = [];

		    const openStyles = defaultToolbar.some(item => item.command === 'openStyles');
		    if (!openStyles) {
		    	addedIcons.push({ attributes: {class: 'fa fa-paint-brush'}, command: 'openStyles' })
		    }

		    const openTraits = defaultToolbar.some(item => item.command === 'openTraits');
		    if (!openTraits) {
		    	addedIcons.push({  attributes: {class: 'fa fa-gear'}, command: 'openTraits' })
		    }

		    selectedComponent.set({
		    	toolbar: [ ...addedIcons, ...defaultToolbar]
		    });
		});

		editor.on('component:selected block:drag:start', () => {
			$('.sidebar').removeClass('is-open');
		});

		editor.on('modal:open', () => {
			aceEditor();
		});

		$(document).on('click', container+' [data-grapes="addCustomBlock"]', function() {
			editor.Modal.open({
				title: '???????????????? ???????????? ??????????',
				content: `
				<div class="customBlockWrapper">
				<input type="hidden" name="blockid" value=""/>
				<div class="customBlockTitleWrapper">
				<input type="text" class="form-control" name="label" placeholder="???????????????? ??????????" spellcheck="true" required/>
				</div>
				<div class="customBlockForm">
				<div class="html">
				<div>
				<p>HTML ?????? ??????????</p>
				<textarea name="customHTML" data-editor="html" data-gutter="1" rows="15"></textarea>
				</div>
				</div>
				<div class="container my-3">
				<div class="row">
				<div class="col-6">
				<a class="btn btn-success" href="javascript:;" data-grapes="saveCustomBlock">
				<span>?????????????????? ????????</span>
				</a>
				</div>
				<div class="col-6 text-right">
				</div>
				</div>
				</div>
				</div>
				</div>`
			});	    	
		})

		$(document).on('click', container+' [data-grapes="saveCustomBlock"]', function() {
			let oldblocktitle = $(this).data('blocktitle')

			fetch('/grapesEditor', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/form-data;charset=utf-8'
				},
				body: JSON.stringify({
					action: 'customBlock', 
					label: $(this).closest('.customBlockWrapper').find('.customBlockTitleWrapper [name="label"]').val(), 
					html: $(this).closest('.customBlockWrapper').find('[name="customHTML"]').val(), 
					blockid: $(this).closest('.customBlockWrapper').find('[name="blockid"]').val(), 
				})
			})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				editor.BlockManager.remove(res.id);
				editor.BlockManager.add(res.id, res.block);
					// if(oldblocktitle) {
					// 	$(container+' .gjs-block[title="'+oldblocktitle+'"]').find('.gjs-block-label').text(res.block.label)
					// 	$(container+' .gjs-block[title="'+oldblocktitle+'"]').attr('title', res.block.label)
					// }
					
					editor.Modal.close()
				})	
		})

		$(document).on('click', container+' [data-grapes="deleteCustomBlock"]', function() {
			let oldblocktitle = $(this).data('blocktitle')

			fetch('/grapesEditor', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/form-data;charset=utf-8'
				},
				body: JSON.stringify({
					action: 'deleteCustomBlock',
					blockid: $(this).closest('.customBlockWrapper').find('[name="blockid"]').val(), 
				})
			})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				editor.BlockManager.remove(res.id);					
				editor.Modal.close()
			})	
		})	  

		$(document).on('click', container+' .gjs-block', function(){
			let blockTitle = $(this).attr('title')
			let block = editor.BlockManager.getAll().models.find(block => block.attributes.label == blockTitle && !block.attributes.protected)
			if(block) {
				editor.Modal.open({
					title: '???????????????????????????? ??????????',
					content: `
					<div class="customBlockWrapper">
					<input type="hidden" name="blockid" value="`+block.id+`"/>
					<div class="customBlockTitleWrapper">
					<input type="text" class="form-control" name="label" placeholder="???????????????? ??????????" spellcheck="true" required value="`+block.attributes.label+`"/>
					</div>
					<div class="customBlockForm">
					<div class="html">
					<div>
					<p>HTML ?????? ??????????</p>
					<textarea name="customHTML" data-editor="html" data-gutter="1" rows="15">`+block.attributes.content+`</textarea>
					</div>
					</div>
					<div class="container my-3">
					<div class="row">
					<div class="col-6">
					<a class="btn btn-success" href="javascript:;" data-blocktitle="`+blockTitle+`" data-grapes="saveCustomBlock">
					<span>?????????????????? ????????</span>
					</a>
					</div>
					<div class="col-6 text-right">
					<a class="btn btn-danger" href="javascript:;" data-blocktitle="`+blockTitle+`" data-grapes="deleteCustomBlock">
					<span>?????????????? ????????</span>
					</a>
					</div>
					</div>
					</div>
					</div>
					</div>`
				});
			}
		})  
	})
}










