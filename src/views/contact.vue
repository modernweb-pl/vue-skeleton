<template>
  <section class="contact py-3 py-sm-5">
    <div class="container">
      <form action="#" novalidate>
        <h2 class="h4 text-secondary mb-3">Contact</h2>

        <div class="form-group">
          <label for="contact-name">Name</label>
          <input type="text" name="name" class="form-control" id="contact-name" />
          <div class="invalid-feedback">Enter your name</div>
        </div>
        <div class="form-group">
          <label for="contact-email">Email address</label>
          <input type="email" name="email" class="form-control" id="contact-email" />
          <div class="invalid-feedback">Enter your email address</div>
        </div>
        <div class="form-group">
          <label for="contact-phone">Phone</label>
          <input type="tel" name="phone" class="form-control" id="contact-phone" />
          <div class="invalid-feedback">Enter your phone number</div>
        </div>
        <div class="form-group">
          <label for="contact-message">Message</label>
          <textarea name="message" class="form-control" id="contact-message" rows="3"></textarea>
          <div class="invalid-feedback">Please white how can we help you</div>
        </div>
        <div class="text-center text-sm-left">
          <button type="submit" class="btn btn-secondary">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'contact',
  metaInfo: {
    title: 'Contact',
  },
});
</script>
