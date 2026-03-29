<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
        <div>
          <t-radio-group v-model="role" orientation="horizontal">
            <t-radio value="mode" role="mode">Mode</t-radio>
            <t-radio value="reverse" role="reverse">Reverse</t-radio>
            <t-radio value="primary" role="primary">Primary</t-radio>
            <t-radio value="success" role="success">Success</t-radio>
            <t-radio value="info" role="info">Info</t-radio>
            <t-radio value="warning" role="warning">Warning</t-radio>
            <t-radio value="danger" role="danger">Danger</t-radio>
          </t-radio-group>
        </div>
        <t-divider class="my-4" />
        <p class="section-label">Fill</p>
        <t-tabs v-model="tab" :role="role" variant="fill" placement="top-start">
          <t-tab value="one">One</t-tab>
          <t-tab value="two">Two</t-tab>
          <t-tab value="three">Three</t-tab>
        </t-tabs>
        <p class="mt-3">Active: <strong>{{ tab }}</strong></p>
        <t-divider class="my-4" />
        <p class="section-label">Underline</p>
        <t-tabs v-model="tabB" :role="role" variant="underline" placement="top-start">
          <t-tab value="a">Alpha</t-tab>
          <t-tab value="b">Beta</t-tab>
        </t-tabs>
        <p class="mt-3">Active: <strong>{{ tabB }}</strong></p>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const tab = ref("one");
const tabB = ref("a");
</script>

<style scoped>
.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}
</style>
