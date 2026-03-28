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
        <div class="skel-stack">
          <t-skeleton :role="role" width="60%" height="0.75rem" />
          <t-skeleton :role="role" width="100%" height="3rem" />
          <t-skeleton :role="role" width="40%" height="0.75rem" />
        </div>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<style scoped>
.skel-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const role = ref("mode");
</script>