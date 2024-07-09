# Check if the correct dependencies are installed.
if [[ $(gem list -i "^bundler$") == true ]]; then
    echo "Found bundler"
else
    echo "Bundler not detected, installing..."
    gem install bundler
fi

if [[ $(gem list -i "^jekyll$") == true ]]; then
    echo "Found Jekyll"
else
    echo "Jekyll not detected, installing.."
    bundle install
fi

jekyll serve --host 0.0.0.0 --livereload-port 4001 --livereload
