---
layout: page
title: Contact
subtitle: Get in touch with us
---

<div class="contact-content">
  <section class="contact-intro">
    <p class="lead">
      Have a project in mind? Need more information about our services? 
      We'd love to hear from you.
    </p>
  </section>

  <div class="contact-grid">
    <section class="contact-form-section">
      <h2>Send Us a Message</h2>
      <form class="contact-form" id="contact-form" action="https://formspree.io/f/xldzkkdy" method="POST">
        <div class="form-group">
          <label for="name">Name *</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject">
        </div>
        
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
      
      <div class="form-message" id="form-message"></div>
    </section>

    <section class="contact-info">
      <h2>Contact Information</h2>
      
      <div class="contact-item">
        <h3>Email</h3>
        <p>
          {% if site.email %}
            <a href="mailto:{{ site.email }}">{{ site.email }}</a>
          {% else %}
            Please configure your email in _config.yml
          {% endif %}
        </p>
      </div>

      <div class="contact-item">
        <h3>Business Hours</h3>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Weekend: By appointment</p>
      </div>

      <div class="contact-item">
        <h3>Response Time</h3>
        <p>We typically respond within 24-48 hours during business days.</p>
      </div>
    </section>
  </div>
</div>

