=begin
    X Create/pull project markdown file
    Add entry to _data/projects.yml
    Skills?
=end
# require "yaml"

def create_md_file(project)
    # puts Dir.pwd
    
    file_path = "projects/#{project}.md"
    
    if(File.exists?(file_path))
        puts("'#{file_path}' already exists.")
    else
        puts "Creating '#{project}'.."
    
        open(file_path, "w") do |md_file|
            md_file.puts("# #{project}")
        end
    
        # md_file = File.new(file_path, "w")
        # md_file.close
        
        puts "Done." 
    end
end

def add_project_to_yml(project)
    puts "Adding #{project} to _data/projects.yml.."

    file_path = "_data/projects.yml"
    if(File.exists?(file_path))
        open(file_path, "a") do |yml_file|
            yml_file.puts("")
        end
    end

    puts "Done."
end

print "Enter the project name: "
project = gets.to_s.chomp

md_file_path = "projects/#{project}.md"

if(File.exists?(md_file_path))
    puts("'#{md_file_path}' already exists")
else
    puts("Creating '#{project}'..")

    File.open(md_file_path, "w") do |md_file|
        md_file.puts("# #{project}")
    end
    yaml = <<END
- 
    name: #{project}
    description: #{}
    url: /projects/#{}
    repo: #{}
    skills: #{}
END
    puts(yaml)

    # md_file = File.new(file_path, "w")
    # md_file.close

    puts "Done"
end

create_md_file(project)
add_project_to_yml(project)
