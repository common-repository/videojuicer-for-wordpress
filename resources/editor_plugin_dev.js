(function() {
	
	tinymce.create('tinymce.plugins.videojuicer' , {
		
		init : function ( ed , url )
		{
			var self = this;

			ed.addCommand('mceVideojuicer' , function() {
				ed.windowManager.open({
					file : url + '/videojuicer.html',
					width : 255,
					height : 200,
					inline : 1
				} , {
					plugin_url : url
				});
			});

			ed.addButton('videojuicer', {title : 'Videojuicer' , cmd : 'mceVideojuicer'});
		},

		getInfo : function() {
			return {
				longname  : 'Videojuicer',
				author	  : 'Videojuicer',
				authorurl : 'http://www.videojuicer.com/',
				infourl : 'http://www.videojuicer.com/',
				version : '0.1.0'
			}
		}
	});

	tinymce.PluginManager.add('videojuicer' , tinymce.plugins.videojuicer );
})();