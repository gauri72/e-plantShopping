# GitHub Setup Instructions

## Steps Completed Automatically ✅

1. ✅ Git repository initialized
2. ✅ All project files added and committed
3. ✅ Package.json configured for GitHub Pages deployment
4. ✅ Routing updated to use HashRouter for GitHub Pages compatibility

## Steps You Need to Complete

### 1. Fork the Repository (Required - Manual Step)

1. Go to: https://github.com/ibm-developer-skills-network/e-plantShopping.git
2. Click the **Fork** button in the top right corner
3. This will create a copy of the repository in your GitHub account

### 2. Add Remote and Push Your Code

After forking, run these commands (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
# Add your forked repository as remote
git remote add origin https://github.com/YOUR_USERNAME/e-plantShopping.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### 3. Update Homepage in package.json

Before deploying, update the homepage URL in `package.json`:
- Replace `YOUR_USERNAME` with your actual GitHub username
- The line should look like: `"homepage": "https://YOUR_USERNAME.github.io/e-plantShopping"`

### 4. Install Dependencies and Deploy

```bash
# Install all dependencies (including gh-pages)
npm install

# Deploy to GitHub Pages
npm run deploy
```

### 5. Enable GitHub Pages (If needed)

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select **gh-pages branch**
5. Click **Save**

Your app will be available at: `https://YOUR_USERNAME.github.io/e-plantShopping`

## Future Updates

After making changes to your code:

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"

# Push to GitHub
git push origin main

# Deploy updated version
npm run deploy
```

## Notes

- The app uses **HashRouter** instead of BrowserRouter for GitHub Pages compatibility
- All routes will have a `#` in the URL (e.g., `/#/products`, `/#/cart`)
- This is normal and required for static hosting on GitHub Pages

