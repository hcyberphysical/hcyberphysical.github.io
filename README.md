# H Cyber Physical Website

A professional, responsive marketing website built with Jekyll and hosted on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Bundler gem

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/hcyberphysical/hcyberphysical.github.io.git
   cd hcyberphysical.github.io
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run the development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**: Open your browser to `http://localhost:4000`

## 📁 Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   ├── default.html     # Base layout
│   └── page.html        # Standard page layout
├── _includes/           # Reusable components
│   ├── header.html      # Site header/navigation
│   └── footer.html      # Site footer
├── _sass/               # SCSS partials (if needed)
├── assets/              # Static assets
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   └── images/          # Images (create this folder)
├── index.html           # Homepage
├── services.md          # Services page
├── about.md             # About page
├── contact.md           # Contact page
└── Gemfile              # Ruby dependencies
```

## 🎨 Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Email address
- Navigation menu
- Social media links
- URL settings

### Styling

The main stylesheet is in `assets/css/main.scss`. Key variables at the top control:
- Colors (primary, secondary, accent)
- Typography
- Spacing
- Breakpoints

### Content

- **Homepage**: Edit `index.html`
- **Pages**: Edit the corresponding `.md` files in the root directory
- **Navigation**: Update `_config.yml` under the `navigation` section

## 📧 Contact Form Setup

The contact form uses Formspree. To set it up:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form ID
3. Edit `contact.md` and replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🌐 GitHub Pages Deployment

### Automatic Deployment

1. Push your code to the `main` branch
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose `main` branch and `/ (root)` folder
6. Click Save

Your site will be available at `https://hcyberphysical.github.io`

### Custom Domain Setup

1. Create a file named `CNAME` in the root directory with your domain:
   ```
   yourdomain.com
   www.yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   - **Type**: CNAME
   - **Name**: www (or @)
   - **Value**: hcyberphysical.github.io

3. For the apex domain (without www), use A records:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

4. GitHub will automatically provision SSL certificates

## 🔮 Future Features: Payment Processing

**Note**: A commented payment section placeholder was previously included in `services.md` but has been removed to keep the codebase clean. When ready to add payment processing, follow the instructions below.

### Adding Payment Processing to the Services Page

To add payment options to your services page, you can add a new section after the "Interested in Our Services?" CTA section in `services.md`. Here are your options:

### Option 1: Stripe Checkout (Recommended)

1. **Create a Stripe account** at [stripe.com](https://stripe.com)

2. **Add Stripe.js** to `_layouts/default.html` in the `<head>` section:
   ```html
   <script src="https://js.stripe.com/v3/"></script>
   ```

3. **Add a payment section to `services.md`** after the services-cta section:
   ```html
   <section class="payment-section">
     <h3>Service Packages</h3>
     <div class="pricing-grid">
       <div class="pricing-card">
         <h4>Basic Package</h4>
         <p class="price">$299</p>
         <button class="btn btn-primary stripe-checkout" 
                 data-amount="29900" 
                 data-description="Basic Service Package">
           Purchase Now
         </button>
       </div>
       <!-- Add more pricing cards as needed -->
     </div>
   </section>
   ```

4. **Create a checkout handler** in `assets/js/main.js`:
   ```javascript
   // Initialize Stripe with your publishable key
   const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
   
   // Handle checkout button clicks
   document.querySelectorAll('.stripe-checkout').forEach(button => {
     button.addEventListener('click', async () => {
       // You'll need a backend endpoint to create a checkout session
       // For now, this is a placeholder
       const response = await fetch('/create-checkout-session', {
         method: 'POST',
         body: JSON.stringify({
           amount: button.dataset.amount,
           description: button.dataset.description
         })
       });
       // Redirect to Stripe Checkout
     });
   });
   ```

5. **For server-side processing**, you'll need a backend (Rails API, serverless function, etc.) to:
   - Create Stripe Checkout sessions
   - Handle webhooks for payment confirmations
   - Send receipts
   - Manage orders

### Option 2: PayPal Integration

1. **Create a PayPal Business account** at [paypal.com](https://paypal.com)

2. **Create PayPal buttons** in your PayPal dashboard and get the hosted button IDs

3. **Add a payment section to `services.md`**:
   ```html
   <section class="payment-section">
     <h3>Service Packages</h3>
     <div class="pricing-grid">
       <div class="pricing-card">
         <h4>Basic Package</h4>
         <p class="price">$299</p>
         <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
           <input type="hidden" name="cmd" value="_s-xclick">
           <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID">
           <input type="submit" value="Pay with PayPal" class="btn btn-primary">
         </form>
       </div>
     </div>
   </section>
   ```

### Option 3: Third-Party Services

These services handle everything for you:

- **Gumroad**: Easy product sales and downloads - just embed their buy button
- **Paddle**: All-in-one payment and tax solution - great for international sales
- **Lemon Squeezy**: Modern payment platform with built-in tax handling
- **Buy Me a Coffee**: Simple payment buttons for services

**Implementation**: Most of these services provide embed codes that you can add directly to your HTML.

### Option 4: Embedded Payment Forms

For a seamless experience without leaving your site:

1. Use **Stripe Elements** to create custom payment forms
2. Use **PayPal Smart Buttons** for inline PayPal checkout
3. These require JavaScript integration but provide a better UX

### Important Notes

- **Backend Required**: For full payment processing with webhooks, receipts, and order management, you'll need a backend service (Rails API, serverless functions like Vercel/Netlify Functions, etc.)
- **GitHub Pages Limitation**: GitHub Pages only serves static files, so you cannot process payments server-side directly. You'll need an external service or backend.
- **Security**: Never expose secret keys in your frontend code. Only use publishable/client keys in your JavaScript.
- **Testing**: Always test payment flows in sandbox/test mode before going live.

## 📦 Future Features: Downloads

When ready to add downloadable products:

### Option 1: GitHub Releases

1. Create releases in your repository
2. Link to release assets directly
3. Use authentication tokens for private downloads

### Option 2: Cloud Storage (AWS S3, Cloudflare R2)

1. Upload files to cloud storage
2. Generate signed URLs for secure downloads
3. Track downloads via analytics

### Option 3: CDN (Cloudflare, BunnyCDN)

1. Upload files to CDN
2. Use CDN URLs for fast downloads
3. Implement access control if needed

### Implementation Example

Create a `downloads.md` page:

```markdown
---
layout: page
title: Downloads
---

<div class="downloads-grid">
  <div class="download-item">
    <h3>Product Name</h3>
    <p>Description</p>
    <a href="DOWNLOAD_URL" class="btn btn-primary">Download</a>
  </div>
</div>
```

## 🛠️ Maintenance

### Updating Content

1. Edit the relevant `.md` or `.html` files
2. Test locally: `bundle exec jekyll serve`
3. Commit and push changes
4. GitHub Pages will automatically rebuild

### Adding New Pages

1. Create a new `.md` file in the root directory:
   ```markdown
   ---
   layout: page
   title: New Page
   ---
   
   Your content here
   ```

2. Add to navigation in `_config.yml`:
   ```yaml
   navigation:
     - title: New Page
       url: /new-page
   ```

### Updating Dependencies

```bash
bundle update
```

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [Formspree Documentation](https://formspree.io/guides)

## 🤝 Contributing

This site is designed to be maintainable by non-developers. Key principles:

- **Clear structure**: Files are organized logically
- **Documentation**: This README and inline comments
- **Simple edits**: Most content changes only require editing markdown files
- **Version control**: All changes are tracked in Git

## 📝 Notes for Future Maintainers

### Making Content Changes

- **Text changes**: Edit the `.md` files directly
- **Style changes**: Edit `assets/css/main.scss` (requires basic CSS knowledge)
- **New pages**: Follow the pattern in existing `.md` files
- **Navigation**: Update `_config.yml`

### Common Tasks

- **Change colors**: Edit variables in `assets/css/main.scss`
- **Add social links**: Update `_config.yml` under `social:`
- **Update contact info**: Edit `contact.md` and `_config.yml`
- **Add new service**: Edit `services.md`

### Getting Help

- Check Jekyll documentation for technical issues
- Review GitHub Pages documentation for deployment issues
- Contact the original developer for site-specific questions

## 📄 License

All rights reserved. © 2024 H Cyber Physical
