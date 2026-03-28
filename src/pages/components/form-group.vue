<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
        <div>
          <t-radio-group v-model="role" orientation="horizontal">
            <t-radio value="mode" role="mode">Mode</t-radio>
            <t-radio value="reverse" role="reverse">Reverse</t-radio>
            <t-radio value="light" role="light">Light</t-radio>
            <t-radio value="dark" role="dark">Dark</t-radio>
            <t-radio value="primary" role="primary">Primary</t-radio>
            <t-radio value="success" role="success">Success</t-radio>
            <t-radio value="info" role="info">Info</t-radio>
            <t-radio value="warning" role="warning">Warning</t-radio>
            <t-radio value="danger" role="danger">Danger</t-radio>
          </t-radio-group>
        </div>
        <t-divider class="my-4" />
        <p class="section-label">Horizontal</p>
        <t-form-group orientation="horizontal">
          <label class="form-label">Name</label>
          <t-field v-model="name" :role="role" placeholder="Your name" />
        </t-form-group>
        <t-divider class="my-4" />
        <p class="section-label">Vertical</p>
        <div class="form-vertical">
          <t-form-group orientation="vertical">
            <label class="form-label-vertical">Email</label>
            <t-field v-model="email" :role="role" type="email" placeholder="you@example.com" />
          </t-form-group>
        </div>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const name = ref("");
const email = ref("");
</script>

<style scoped>
.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}

.form-label {
  min-width: 5rem;
  align-self: center;
}

.form-vertical .form-label-vertical {
  display: block;
  margin-bottom: 0.35rem;
}
</style>
