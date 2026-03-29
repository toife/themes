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
        <p class="section-label">OTP-style (6 cells)</p>
        <t-segmented-field
          v-model="code"
          :role="role"
          :length="6"
          help="Enter the code from your device."
        />
        <p class="mt-2 muted">Model: {{ code.join("") || "—" }}</p>
        <t-divider class="my-4" />
        <p class="section-label">Shorter (4 cells) · readonly</p>
        <t-segmented-field v-model="pin" :role="role" :length="4" readonly />
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const code = ref<string[]>([]);
const pin = ref<string[]>(["1", "2", "3", "4"]);
</script>

<style scoped>
.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}

.muted {
  opacity: 0.75;
  font-size: 0.875rem;
}
</style>
