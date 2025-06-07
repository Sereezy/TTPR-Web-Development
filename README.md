# TTPR-Web-Development

This repository will contain all of our classroom projects for the web development bootcamp.

## 📥 Cloning the Repo

Click the green **<> Code** button at the top right section of this repository and copy the **HTTPS URL**.  
Open your terminal or command prompt.  
Navigate to the folder where you want this repo to be cloned:  
```bash
cd path/to/your/folder
```  
Clone the repository using:  
```bash
git clone [repo-url]
```

## 🌿 Making Your Own Branch

Each student should create a personal branch to work in without affecting the main codebase.  
Open your terminal or command prompt.  
Navigate into the cloned project folder:  
```bash
cd TTPR-Web-Development
```  
Create and switch to your own branch using the following naming convention:  
```bash
git checkout -b firstname-lastname
```  
Example:  
```bash
git checkout -b john-doe
```

## 🔄 Updating Your Branch

New projects will be added to this repository as the bootcamp progresses. To keep your branch up to date:  
Commit the changes you've made:  
```bash
git add .
git commit -m "Your message briefly describing the changes"
```  
Pull the latest changes from the main branch:  
```bash
git pull origin main
```

Happy coding!


# 🧠 Git Cheat Sheet

## 🔧 Initial Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## 📁 Start a New Project
```bash
git init                  # Start a new git repo in current folder
git clone [url]           # Copy an existing repo from GitHub
```

## 🔄 Working with Changes
```bash
git status                # Show changed files
git add .                 # Stage all changes
git add filename          # Stage one specific file
git commit -m "Message"   # Save staged changes with a message
```

## 🌿 Branching
```bash
git branch                # List branches
git checkout -b new-branch  # Create and switch to a new branch
git checkout branch-name  # Switch to an existing branch
```

## 🔁 Syncing with Remote
```bash
git pull origin main      # Get latest changes from main branch
git push origin branch    # Push your branch to GitHub
```

## 🧹 Other Useful Commands
```bash
git log                   # Show commit history
git diff                  # Show what's changed but not yet staged
git rm filename           # Remove a file from repo and stage the deletion
```

> 💡 Tip: Always `git add .` → `git commit -m "message"` → `git push` in that order to save and sync your work!

