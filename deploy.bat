:: Build the project.
hugo -t hugrid

:: Go To Public folder
cd public

:: Add changes to git.
git add .

:: Commit changes.
git commit -m "rebuilding site"

:: Push source and build repos.
git push origin master

:: Come Back up to the Project Root
cd ..