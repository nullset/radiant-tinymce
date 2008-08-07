(function() {
	// Load plugin specific language pack
  // tinymce.PluginManager.requireLangPack('example');

	tinymce.create('tinymce.plugins.RadiantCodeProtectPlugin', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {

      var t = this;

			t.editor = ed;
			
			function __toggleRadiantTags(ed, o) {
  		  content = o.content;
        if (o.set == true) {


          lines = content.split(/\n/);
          for (i=0; i < lines.length; i++) {
            match_r_line_tags = lines[i].match(/^(<r:([^>]*)?\/?>)|(<\/r:([^>]*)?>)$/g);
            if (!(match_r_line_tags == null)) {
              content = __r_to_hr(content, match_r_line_tags);
            }
          }
          // alert(content);
          

  			  match_r_tags = content.match(/(<r:([^>]*)?\/?>)|(<\/r:([^>]*)?>)/g);
  			  if (!(match_r_tags == null)) {
  			    o.content = __r_to_img(content, match_r_tags);
  			  }
        } else {
          o.content = __img_to_r(content);
          o.content = __hr_to_r(o.content);
        }
  		}

  		function __r_to_img(content, m) {
        for (i=0; i < m.length; i++) {
          var title = m[i].replace(/"/g, "&#34;").replace(/\\/g, '&#47;').replace(/>/g, '&#62;');
          if (m[i].charAt(1) == '/') {
            css_class = 'closing';
          } else if (m[i].lastIndexOf('/') == (m[i].length - 2) ) {
            css_class = 'self_closing';
          } else {
            css_class = 'opening';
          }
          var match = escape(m[i]);
          var regex = new RegExp('(' + m[i] + ')', 'i');
          var content = content.replace(regex, '<img class="mceCode_' + css_class + ' mceCode mceNonEditable" height="13" id="' + match + '" src="/images/tinymce_filter/t.gif" title="' + title + '" width="48" />');
        }
        return content;
  		}
  		
  		function __r_to_hr(content, m) {
  		  m = m.toString();
        var title = m.replace(/</g, '&#60;').replace(/"/g, "&#34;").replace(/\\/g, '&#47;').replace(/>/g, '&#62;');
        if (m.charAt(1) == '/') {
          css_class = 'closing';
        } else if (m.lastIndexOf('/') == (m.length - 2) ) {
          css_class = 'self_closing';
        } else {
          css_class = 'opening';
        }
        var match = escape(m);
        var regex = new RegExp('(' + m + ')', 'i');
        c = content.replace(regex, '<hr class="mceCode_' + css_class + ' mceCode mceNonEditable" id="' + match + '" title="' + title + '" />');
        return c;
  		}
  		

  		function __img_to_r(content) {
        var regex = new RegExp('<img class="([^ ]+) mceCode mceNonEditable" height="13" id="([^"]*)?" src="/images/tinymce_filter/t.gif" title="(.*?)" width="48" />', 'g');
        var m = content.match(regex);
        if (!(m == null)) {
         for (i=0; i<m.length; i++) {
           var match = unescape(m[i].replace(regex, '$2'));
           var content = content.replace(m[i], match);
         }
        }
        return content;
  		}
  		
  		function __hr_to_r(content) {
        var regex = new RegExp('<hr class="([^ ]+) mceCode mceNonEditable" id="([^"]*)?" title="(.*?)" />', 'g');
        var m = content.match(regex);
        if (!(m == null)) {
         for (i=0; i<m.length; i++) {
           var match = unescape(m[i].replace(regex, '$2'));
           var content = content.replace(m[i], match);
         }
        }
        return content;
  		}
  		
  		
						
      ed.onPostProcess.add(function(ed, o) {
        __toggleRadiantTags(ed, o);
        alert(o.content);
      });
      
			ed.onBeforeSetContent.add(function(ed, o) {
        __toggleRadiantTags(ed, o);
			});
			
		},
		
		// Private methods
		
		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'Radiant Code Protect',
				author : 'Nathan Wright',
				authorurl : 'http://www.brandalism.com',
				infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/example',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('radiantcodeprotect', tinymce.plugins.RadiantCodeProtectPlugin);
})();

/**
 * $Id: editor_plugin_src.js 201 2007-02-12 15:56:56Z spocke $
 *
 * @author Moxiecode
 * @copyright Copyright © 2004-2008, Moxiecode Systems AB, All rights reserved.
 */

// tinyMCE.init({
//  cleanup_callback : "radiantCodeProtect",
// });
// 
// function radiantCodeProtect(type, content) {
//  switch (type) {
//    case "get_from_editor":
//    alert(content);
//       var regex = new RegExp('<hr id="([^"]*)?" class="(.*) mceCode" title="(.*?)" />', 'g');
//       var m = content.match(regex);
//       if (!(m == null)) {
//        for (i=0; i<m.length; i++) {
//          var match = unescape(m[i].replace(regex, '$1'));
//          var content = content.replace(m[i], match);
//        }
//       }
//       return content;
//       break;
//    case "insert_to_editor":
//     // alert(content);
//       var m = content.match(/(<r:([^>]*)?\/?>)|(<\/r:([^>]*)?>)/g);
//       if (!(m == null)) {
//        for (i=0; i < m.length; i++) {
//           var title = m[i].replace(/"/g, "&#34;").replace(/\\/g, '&#47;').replace(/>/g, '&#62;');
//           if (m[i].charAt(1) == '/') {
//             css_class = 'closing';
//           } else if (m[i].lastIndexOf('/') == (m[i].length - 2) ) {
//             css_class = 'self_closing';
//           } else {
//             css_class = 'opening';
//           }
//           var match = escape(m[i]);
//          var regex = new RegExp('(' + m[i] + ')', 'i');
//          var content = content.replace(regex, '<hr id="' + match + '" class="mceCode_' + css_class + ' mceCode" title="' + title + '" />');
//        }
//       }
//       // alert(content);
//       return content;
//       break;
//    case "submit_content":
//       // alert("Value HTML Element: " + value);
//      // Do custom cleanup code here
//      break;
//    case "get_from_editor_dom":
//       // alert("Value DOM Element " + value);
//      // Do custom cleanup code here
//      break;
//    case "insert_to_editor_dom":
//       // alert("Value DOM Element: " + value);
//      // Do custom cleanup code here
//      break;
//    case "setup_content_dom":
//       // alert("Value DOM Element: " + value);
//      // Do custom cleanup code here
//      break;
//    case "submit_content_dom":
//       // alert("Value DOM Element: " + value);
//      // Do custom cleanup code here
//      break;
//  }
// 
// }

// /* Import plugin specific language pack */
// // tinyMCE.importPluginLanguagePack('radiantcodeprotect', 'en'); // <- Add a comma separated list of all supported languages
// 
// /****
//  * 
//  * I'm not even gonna copyright this, that's just silly.
//  *
//  * Feel free to improve on this code and re-upload it.
//  * 
//  * Tijmen Schep, Holland, 9-10-2005
//  * 
//  * 
//  ****/
// 
// 
// 
// /**
//  * Gets executed when contents is inserted / retrived.
//  */
// function TinyMCE_radiantcodeprotect_cleanup(type, content) {
//  switch (type) {
//    case "get_from_editor":
//       // var regex = new RegExp('<hr rel="([^"]*)?" class="mceItemRadiantCode" title="(.*?)" />', 'g');
//      var regex = new RegExp('<hr rel="([^"]*)?" class="(.*) mceCode" title="(.*?)" />', 'g');
//      var m = content.match(regex);
//      if (!(m == null)) {
//        for (i=0; i<m.length; i++) {
//          var match = unescape(m[i].replace(regex, '$1'));
//          var content = content.replace(m[i], match);
//        }
//      }
//      return content;
//       break;
// 
//     case "insert_to_editor":
//       // var m = content.match(/(<r:([^\/><]*)?\/?>)|(<\/r:([^>]*)?>)/g); // not matching things like <r:find url="/articles/">
//      var m = content.match(/(<r:([^>]*)?\/?>)|(<\/r:([^>]*)?>)/g);
//      if (!(m == null)) {
//        for (i=0; i < m.length; i++) {
//           var title = m[i].replace(/"/g, "&#34;").replace(/\\/g, '&#47;').replace(/>/g, '&#62;');
//           if (m[i].charAt(1) == '/') {
//             css_class = 'closing';
//           } else if (m[i].lastIndexOf('/') == (m[i].length - 2) ) {
//             css_class = 'self_closing';
//           } else {
//             css_class = 'opening';
//           }
//           // alert(m[i].length - 2 + " : " + m[i][m[i].length - 2]);
//           // alert(css_class);
//           // alert(m[i].charAt(1));
//           var match = escape(m[i]);
//          var regex = new RegExp('(' + m[i] + ')', 'i');
//          var content = content.replace(regex, '<hr rel="' + match + '" class="mceCode_' + css_class + ' mceCode" title="' + title + '" />');
//           // var content = content.replace(regex, '<hr rel="' + match + '" class="mceItemRadiantCode" title="' + title + '" />');
//        }
//      }
//      return content;
// 
//     break;
// 
//     case "get_from_editor_dom":
//      // Do custom cleanup code here. THIS PLUGIN DOESN'T USE THIS
//      break;
//    case "insert_to_editor_dom":
//      // Do custom cleanup code here. BUT I LEFT IT IN ANYWAY..
//      break;
//  }
//  return content;
// }
// 
