class TinymceFilterExtension < Radiant::Extension
  version "0.8"
  description "Provides WYSIWYG (What You See Is What You Get) rich text editing capabilities."
  url "http://blog.brandalism.com/tinymce"

  define_routes do |map|
    # map.connect 'admin/tinymce/:action', :controller => 'admin/tinymce'
  end
  
  def activate
    # admin.tabs.add "Tinymce Filter", "/admin/tinymce_filter", :after => "Layouts", :visibility => [:all]
    TinyMceFilter
    admin.page.edit.add :form, "/admin/shared/js"
    admin.page.edit.add :form, "/admin/page/filter_observer"

    admin.snippet.edit.add :form, "/admin/shared/js"
    admin.snippet.edit.add :form, "/admin/snippet/filter_observer"
  end
  
  def deactivate
    # admin.tabs.remove "Tinymce Filter"
  end
    
end