$(document).on('click', '.grapesEditor .sidebar .label', function(e){
	e.preventDefault();
	$(this).closest('.sidebar').toggleClass('is-open');
})

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

$(window).keydown(function(event) {
    if(event.keyCode == 13) {
    	if($(event.target).is('.form-control') || $(event.target).closest('.gjs-input-holder').length) {
    		event.preventDefault();
    		return false;
    	}
    }
	});


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

function startGrapes(element, tpl) {
	var textarea = document.querySelector('textarea[name="'+element+'"]')
  	if (!textarea) return
  	//textarea.style.display = 'none'

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


	grapesBaseConfig.assetManager.assets = grapesConfig.assets
	grapesBaseConfig.assetManager.upload = '/grapesEditor'

	grapesBaseConfig.canvas.styles = grapesStyles
	grapesBaseConfig.canvas.scripts = grapesScripts

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
		        	title: 'Настройки блока',
		        	content: $(container + ' .traits-wrapper > .traits').detach()
		    	});
	      }
			});

		editor.on('modal', (modal) => { 
	    	if(!modal.open && modal.title.data=='Настройки блока') {
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
	        if(confirm('Уверены, что хотите очистить?')) {
	          var comps = editor.DomComponents.clear();
	          setTimeout(function(){ localStorage.clear()}, 0)
	        }
    });

		editor.on('asset:upload:start', () => {
		  $('.gjs-mdl-content').css({'opacity': .5})
		});

		// The upload is ended (completed or not)
		editor.on('asset:upload:end', () => {
		  $('.gjs-mdl-content').css({'opacity': 1})
		});

     
     // editor.Commands.add('show-settings', function() { 
	    // 	editor.Modal.open({
	    //     	title: 'Настройки редактора',
	    //     	content: `
		   //      <div class="customBlockWrapper">
		   //      <div class="customBlockTitleWrapper">
		   //      	<input type="text" name="css" placeholder="Ссылки на файлы стилей сайта"/>
		   //      	<span>Чтобы в редакторе элементы отображались также как на сайте</span>
		   //      </div>
		   //       <div class="customBlockTitleWrapper">
		   //      	<input type="text" name="css" placeholder="Ссылки на файлы js"/>
		   //      	<span>Чтобы в редакторе элементы отображались также как на сайте</span>
		   //      </div>
		   //      <div class="customBlockForm mt-3">
		   //      	<a class="btn btn-success" href="javascript:;" data-grapes="saveGrapesSettings">
	    //           		<span>Сохранить</span>
     //        		</a>
		   //      </div>
		   //      </div>`
	    // 	});
     //  });

	    

	    /* Assets Manager*/
	    editor.on('asset:remove', (some, argument) => { 
	    	/* TODO: delete image from server */
	       	console.log(some)
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
	    		//console.log(currentComponent.ccid, styles.width, styles.height)
	    		selectedComponent.addAttributes({ 'grapes-image':  'w='+styles.width+',h='+styles.height})
	    	}


	    	//console.log(editor.getCss())
				let output = editor.getHtml()
				output = output.replace(/<body/g, '<div class="grapesBody"')
				output = output.replace(/body>/g, 'div>')
				output += `<style>${editor.getCss()}</style>`
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
						  tc: false, // Top center
						  cl: false, // Center left
						  cr: false, // Center right
						  bc: false, // Bottom center
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

		    	//selectedComponent.addAttributes({ 'grapes-image':  })
		    	
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
		        title: 'Создание нового блока',
		        content: `
		        <div class="customBlockWrapper">
			        <input type="hidden" name="blockid" value=""/>
			        <div class="customBlockTitleWrapper">
			        	<input type="text" class="form-control" name="label" placeholder="Название блока" spellcheck="true" required/>
			        </div>
			        <div class="customBlockForm">
			        	<div class="html">
			        		<div>
			        			<p>HTML код блока</p>
			        			<textarea name="customHTML" data-editor="html" data-gutter="1" rows="15"></textarea>
			        		</div>
			        	</div>
			        	<div class="container my-3">
				        	<div class="row">
					        	<div class="col-6">
					        		<a class="btn btn-success" href="javascript:;" data-grapes="saveCustomBlock">
				              	<span>Сохранить блок</span>
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
			        title: 'Редактирование блока',
			        content: `
			        <div class="customBlockWrapper">
				        <input type="hidden" name="blockid" value="`+block.id+`"/>
				        <div class="customBlockTitleWrapper">
				        	<input type="text" class="form-control" name="label" placeholder="Название блока" spellcheck="true" required value="`+block.attributes.label+`"/>
				        </div>
				        <div class="customBlockForm">
				        	<div class="html">
				        		<div>
				        			<p>HTML код блока</p>
				        			<textarea name="customHTML" data-editor="html" data-gutter="1" rows="15">`+block.attributes.content+`</textarea>
				        		</div>
				        	</div>
				        	<div class="container my-3">
					        	<div class="row">
						        	<div class="col-6">
						        		<a class="btn btn-success" href="javascript:;" data-blocktitle="`+blockTitle+`" data-grapes="saveCustomBlock">
					              	<span>Сохранить блок</span>
					           		</a>
					           	</div>
					           	<div class="col-6 text-right">
						        		<a class="btn btn-danger" href="javascript:;" data-blocktitle="`+blockTitle+`" data-grapes="deleteCustomBlock">
					              	<span>Удалить блок</span>
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










