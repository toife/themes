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
        <div class="field-examples">
          <t-field v-model="text" :role="role" placeholder="Outline field" />
          <t-field v-model="text" :role="role" placeholder="Disabled" disabled />
          <t-field v-model="text" :role="role" placeholder="Readonly" readonly />
          <t-field v-model="email" :role="role" type="email" placeholder="Email" />
          <t-field
            v-model="pwd"
            :role="role"
            type="password"
            placeholder="Password"
            help="Use a strong password."
          />
        </div>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const text = ref("");
const email = ref("");
const pwd = ref("");
</script>

<style scoped>
.field-examples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
