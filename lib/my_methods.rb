def source_paths
  Array(super) +
    [File.join(File.expand_path(File.dirname(__FILE__ + "../")),'extras')]
end

def my_rspec
  generate "rspec:install"
end

def my_devise
  generate "devise:install"
  generate "devise User"
  rake "db:migrate"

  copy_file "api-auth/1_add_access_token_to_user.rb", "db/migrate/#{Time.now.strftime("%Y%m%d%H%M%S")}_add_access_token_to_user.rb", :force => true
  rake "db:migrate"

  # Add new Files
  copy_file "api-auth/application_controller.rb", "app/controllers/application_controller.rb", :force => true
  copy_file "api-auth/routes.rb", "config/routes.rb", :force => true
  copy_file "api-auth/session_serializer.rb", "app/serializers/v1/session_serializer.rb", :force => true
  copy_file "api-auth/sessions_controller.rb", "app/controllers/v1/sessions_controller.rb", :force => true
  copy_file "api-auth/users_controller.rb", "app/controllers/v1/users_controller.rb", :force => true
  copy_file "api-auth/user.rb", "app/models/user.rb", :force => true
end

def my_cleanup
  generate "rspec:install"
  # Clean up files
  run "rm README.rdoc"
  file 'README.md', <<-CODE
  # React Rest Server
  CODE
  append_to_file '.gitignore', "\nnode_modules"
end

def my_git_commit
  git :init
  git add: "."
  git commit: %Q{ -m 'Initial commit' }
end

def my_gems
  gem 'active_model_serializers', '~> 0.8.3' # NOTE: not the 0.9
  gem 'devise', '~> 3.4.1'

  gem_group :development, :test do
   gem "rspec-rails"
  end

  gem_group :development do
   gem "pry"
   gem "pry-remote"
  end
end
