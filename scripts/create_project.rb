=begin
    Create/pull project markdown file
    Add entry to _data/projects.yml
    Skills?
=end
print "Enter the project name: "
project = gets.to_s.chomp

# puts Dir.pwd

md_file_path = "projects/#{project}.md"

if(File.exists?(md_file_path))
    puts("'#{md_file_path}' already exists.")
else
    puts "Creating '#{project}'.."

    open(md_file_path, "w") do |md_file|
        md_file.puts("# #{project}")
    end

    # md_file = File.new(md_file_path, "w")
    # md_file.close
    
    puts "Done" 
end
