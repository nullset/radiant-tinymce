function part_added() {
  var partNameField = $('part-name-field');
  var partIndexField = $('part-index-field');
  var index = parseInt(partIndexField.value);
  var tab = 'tab-' + index;
  var caption = partNameField.value;
  var page = 'page-' + index;
  tabControl.addTab(tab, caption, page);
  Element.hide('add-part-popup');
  Element.hide('busy');
  partNameField.value = '';
  partIndexField.value = (index + 1).toString();
  $('add-part-button').disabled = false;
  Field.focus(partNameField);
  tabControl.select(tab);
}
function part_loading() {
  $('add-part-button').disabled = true;
  new Effect.Appear('busy');
}
function valid_part_name() {
  var partNameField = $('part-name-field');
  var name = partNameField.value.downcase().strip();
  var result = true;
  if (name == '') {
    alert('Part name cannot be empty.');
    return false;
  }
  tabControl.tabs.each(function(pair){
    if (tabControl.tabs[pair.key].caption == name) {
      result = false;
      alert('Part name must be unique.');
      throw $break;
    }
  })
  return result;
}
function center(element) {
  var header = $('header')
  element = $(element);
  element.style.position = 'fixed'
  var dim = Element.getDimensions(element)
  element.style.top = '200px';
  element.style.left = ((header.offsetWidth - dim.width) / 2) + 'px';
}
function toggle_add_part_popup() {
  var popup = $('add-part-popup');
  var partNameField = $('part-name-field');
  center(popup);
  Element.toggle(popup);
  Field.focus(partNameField);
}
var last_type = "<%= @page.class_name %>";
function load_tag_reference(part) {
  page_type = $F('page_class_name');
  popup = $('tag-reference-popup');
  if(last_type != page_type) {
    url = "<%= tag_reference_url %>";
    params = "class_name=" + page_type;
    new Effect.Highlight('tag-reference-link-'+ part);
    req = new Ajax.Request(url, { method: 'get', parameters: params, evalScripts: true });
  } else {
     center(popup);
     Element.toggle(popup);
  }
  return false;
}
var last_filter = "<%= default_filter_name %>";
function load_filter_reference(part) {
  filter_type = $F("part[" + part + "][filter_id]");
  popup = $('filter-reference-popup');
  if(last_filter != filter_type) {
    url = "<%= filter_reference_url %>";
    params = "filter_name=" + filter_type;
    new Effect.Highlight('filter-reference-link-'+ part);
    req = new Ajax.Request(url, { method: 'get', parameters: params, evalScripts: true });
  } else {
    center(popup);
    Element.toggle(popup);
  }
  return false;
}
