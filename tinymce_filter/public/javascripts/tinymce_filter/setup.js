tinyMCE.init({
    language : "en",
    mode : "exact",
    elements : "myEditor",
    theme : "advanced",
    remove_linebreaks : false,
    convert_urls : false,
    // content_css : "/stylesheets/content.css",
    height: "370",
    plugins : "preview,searchreplace,contextmenu,paste,style,table,noneditable,radiantcodeprotect,xhtmlxtras",
    theme_advanced_toolbar_location : "top",
    theme_advanced_toolbar_align : "left",
    theme_advanced_buttons1 : "formatselect,styleselect,separator,bold,italic,del,abbr,acronym,separator,justifyleft,justifycenter,justifyright,justifyfull,separator,bullist,numlist,outdent,indent,separator,sup,sub,hr,charmap,separator,forecolor,backcolor",
    theme_advanced_buttons2 : "undo,redo,separator,cut,copy,paste,pastetext,pasteword,separator,search,replace,selectall,separator,link,unlink,image,separator,visualaid,removeformat,cleanup,code,preview,styleprops",
    theme_advanced_buttons3 : "tablecontrols",

		// To set advanced styles, simply insert this pattern into the quotes below 
		//     NAME=CLASS_NAME;NAME=CLASS_NAME
		// using upper/lowercase names where appropriate
    theme_advanced_styles : "",
    table_cell_styles : "",
    table_row_styles : "",
    
    theme_advanced_statusbar_location : "bottom",
    inline_styles : true,
    verify_html: true,
    paste_use_dialog : false,
    paste_auto_cleanup_on_paste : true,
    convert_fonts_to_spans: true,
    apply_source_formatting : true,
    paste_convert_headers_to_strong : false,
    paste_strip_class_attributes : "all",
    cleanup_callback : "blockElementAlignClean",
    valid_elements : ""
    +"r:*[*],"
    +"a[accesskey|charset|class|coords|dir<ltr?rtl|href|id|lang"
      +"|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup"
      +"|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rel|rev"
      +"|style|tabindex|title|type],"
      // +"|shape<circle?default?poly?rect|style|tabindex|title|type],"
    +"abbr[align|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"acronym[align|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"blockquote[dir|style|cite|class|dir<ltr?rtl|id|onclick|ondblclick"
      +"|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout"
      +"|onmouseover|onmouseup|style|title],"
    +"br[class|id|style|title],"
    +"button[accesskey|class|dir<ltr?rtl|disabled<disabled|id|name|onblur"
      +"|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown"
      +"|onmousemove|onmouseout|onmouseover|onmouseup|style|tabindex|title|type"
      +"|value],"
    +"dd[align|cite|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"del[align|cite|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"div[align|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"dl[align|cite|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"dt[align|cite|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"em/i[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown|onkeypress"
      +"|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style"
      +"|title],"
    +"h1[class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"h2[class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"h3[class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"h4[class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"h5[class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"h6[class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"hr[rel|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"img[alt|class|dir<ltr?rtl|height"
      +"|id|longdesc|onclick|ondblclick|onkeydown"
      +"|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover"
      +"|onmouseup|src|style|title|width],"
    +"li[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown|onkeypress|onkeyup"
      +"|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],"
    +"object[class|classid|codebase|data|id|onclick|ondblclick|onkeydown"
      +"|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover"
      +"|onmouseup|style|title|type],"
    +"ol[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown"
      +"|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover"
      +"|onmouseup|style|title],"
    +"p[align|class|dir<ltr?rtl|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title],"
    +"param[class|id|name|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|style|title|value],"
    +"pre/listing/plaintext/xmp[align|class|dir<ltr?rtl|id|onclick|ondblclick"
      +"|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout"
      +"|onmouseover|onmouseup|style|title],"
    +"script[charset|defer|src|type],"
    +"select[class|dir<ltr?rtl|disabled<disabled|id|multiple<multiple|name"
      +"|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup"
      +"|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|size|style"
      +"|tabindex|title],"
    +"small[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown|onkeypress"
      +"|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style"
      +"|title],"
    +"span[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown"
      +"|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover"
      +"|onmouseup|style|title],"
    +"strong/b[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown|onkeypress"
      +"|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style"
      +"|title],"
    +"style[dir<ltr?rtl|media|title|type],"
    +"sub[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown|onkeypress"
      +"|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style"
      +"|title],"
    +"sup[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown|onkeypress"
      +"|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style"
      +"|title],"
    +"table[border|cellpadding|cellspacing|class"
      +"|dir<ltr?rtl|frame|height|id|onclick|ondblclick|onkeydown|onkeypress"
      +"|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rules"
      +"|style|summary|title|width],"
    +"td[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class"
      +"|colspan|dir<ltr?rtl|headers|id|onclick"
      +"|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove"
      +"|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup"
      +"|style|title|valign<baseline?bottom?middle?top],"
    +"tr[abbr|align<center?char?justify?left?right|char|charoff|class"
      +"|rowspan|dir<ltr?rtl|id|onclick|ondblclick|onkeydown|onkeypress"
      +"|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style"
      +"|title|valign<baseline?bottom?middle?top],"
    +"ul[class|dir<ltr?rtl|id|onclick|ondblclick|onkeydown"
      +"|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover"
      +"|onmouseup|style|title]",
    invalid_elements: "font"
});

function blockElementAlignClean(type, value) {
    switch (type) {
        case "get_from_editor":  //not used but good to keep
            //console.info("Value HTML string: ",value);
            //value = value.replace(/align=(['"])(\w+)(['"])/,"style=$1text-align: $2;$3");
            break;

        case "insert_to_editor": //not used but good to keep
            //console.info("Value HTML string: ",value);
            //value = value.replace(/align=(['"])(\w+)(['"])/,"style=$1text-align: $2;$3");
            // Do custom cleanup code here
            break;

        case "get_from_editor_dom": //convert into inline styles
            // console.info("Value DOM Element ",value);
            // Do custom cleanup code here
            var paragraphs = $A(value.getElementsByTagName('p'));
            var divs = $A(value.getElementsByTagName('div'));
            paragraphs.each(function (paragraph) {
                if(paragraph.align) {
                    paragraph.style.textAlign = paragraph.align;
                    paragraph.align = '';
                }
            });
            divs.each(function (div) {
                if(div.align) {
                    div.style.textAlign = div.align;
                    div.align = '';
                }
            });
            break;

        case "insert_to_editor_dom": //convert back into align, to allow for changes to be made though the text align buttons
            // console.info("Value DOM Element: ",value);
            // Do custom cleanup code here
            var paragraphs = $A(value.getElementsByTagName('p'));
            var divs = $A(value.getElementsByTagName('div'));
            paragraphs.each(function (paragraph) {
                if(paragraph.style.textAlign) {
                    paragraph.align = paragraph.style.textAlign;
                    paragraph.style.textAlign = '';
                }
            });
            divs.each(function (div) {
                if(div.style.textAlign) {
                    div.align = div.style.textAlign;
                    div.style.textAlign = '';
                }
            });
            break;
    }
    return value;
}

function text_input_method(index, filter) {
  if (index != null) {
   // control for page parts
   
   elem = $('part_'+ index +'_content');
   // setBucketAction(elem, filter);
   if (filter == "TinyMce") {
     tinyMCE.execCommand('mceAddControl',true,'part_'+ index +'_content');
   } else {
     tinyMCE.execCommand('mceRemoveControl',true,'part_'+ index +'_content');
   }
  } else {
   // control for snippets
   if (filter == "TinyMce") {
     tinyMCE.execCommand('mceAddControl',true,'snippet_content');
   } else {
     tinyMCE.execCommand('mceRemoveControl',true,'snippet_content');
   }
  }
}

Event.observe(window, 'load', init_load_tiny_mce, false);

function init_load_tiny_mce(){
	// loads TinyMce editor if "TinyMce" is the selected text filter
  // check to see if we are working with a page or with a snippet
  if ($('part_0_filter_id'))
  {
    parts = $$('#pages .textarea');
    for (var i = 0; i < parts.length; i++)
    {
      if ($F('part_' + i + '_filter_id') == 'TinyMce') {
        text_input_method((i), 'TinyMce');
      }
    }
  } else if ($('snippet_filter')) {
    if ($F('snippet_filter') == 'TinyMce') {
      text_input_method(null, 'TinyMce');
    }
  }
}