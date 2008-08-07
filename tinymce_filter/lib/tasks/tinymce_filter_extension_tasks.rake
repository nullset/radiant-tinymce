namespace :radiant do
  namespace :extensions do
    namespace :tinymce_filter do
      
      desc "Runs the migration of the Tinymce Filter extension"
      task :migrate => :environment do
        require 'radiant/extension_migrator'
        if ENV["VERSION"]
          TinymceFilterExtension.migrator.migrate(ENV["VERSION"].to_i)
        else
          TinymceFilterExtension.migrator.migrate
        end
      end
    
    end
  end
end