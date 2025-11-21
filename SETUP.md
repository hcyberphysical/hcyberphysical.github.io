# Quick Setup Guide

## Immediate Next Steps

### 1. Install Dependencies (First Time Only)

```bash
# Make sure you have Ruby installed (check with: ruby -v)
# If not, install Ruby using rbenv, rvm, or Homebrew

# Install Bundler if you don't have it
gem install bundler

# Install project dependencies
bundle install
```

### 2. Customize Your Site

**Edit `_config.yml`**:
- Update `title` and `description`
- Add your `email` address
- Update `url` if using a custom domain
- Customize `navigation` menu items

**Edit Content Pages**:
- `index.html` - Homepage content
- `services.md` - Your services
- `about.md` - About your business
- `contact.md` - Contact information

### 3. Set Up Contact Form

1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy your form ID
4. Edit `contact.md` and replace `YOUR_FORM_ID` with your actual ID

### 4. Test Locally

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site.

### 5. Deploy to GitHub Pages

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Initial Jekyll site setup"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Click Save

3. Your site will be live at: `https://hcyberphysical.github.io`

### 6. Add Custom Domain (Optional)

1. Create a `CNAME` file in the root:
   ```bash
   echo "yourdomain.com" > CNAME
   echo "www.yourdomain.com" >> CNAME
   ```

2. Configure DNS with your domain provider (see README.md for details)

3. Commit and push the CNAME file

## Common Customizations

### Change Colors

Edit `assets/css/main.scss` - modify the variables at the top:
```scss
$primary-color: #2563eb;  // Change this
$secondary-color: #64748b;
$accent-color: #10b981;
```

### Add Logo

1. Add your logo image to `assets/images/`
2. Edit `_includes/header.html` to use your logo:
   ```html
   <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Logo">
   ```

### Add Social Media Links

Edit `_config.yml`:
```yaml
social:
  github: hcyberphysical
  linkedin: your-linkedin
  twitter: your-twitter
```

Then update `_includes/footer.html` to display them.

## Need Help?

- Check `README.md` for detailed documentation
- Jekyll docs: https://jekyllrb.com/docs/
- GitHub Pages: https://docs.github.com/en/pages

