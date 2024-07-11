# YYYY-MM-DD-TITLE.EXTENSION
# 2019-08-08 11:33:00 +0800

print("Post name: ")
post_name = gets.strip()

file_name = post_name.downcase.gsub(' ', '-')

current_time = Time.now()
file_name = current_time.strftime("%Y-%m-%d") + "-#{file_name}.md"

yaml = <<~YAML
---
title: #{post_name}
description:
author: Jerry
date: #{current_time.strftime("%Y-%m-%d %H:%M:%S %z")}
---
YAML

puts("Creating file #{file_name}...")
File.write("_posts/#{file_name}", yaml)
puts("Finished creating #{file_name}")

