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
        <p>Above</p>
        <t-divider :role="role" class="my-3" />
        <p>Below</p>
        <t-divider class="my-4" />
        <p>Vertical</p>
        <div class="divider-vertical-row">
          <span>Left</span>
          <t-divider orientation="vertical" :role="role" />
          <span>Right</span>
        </div>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
</script>

<style scoped>
.divider-vertical-row {
  display: flex;
  align-items: stretch;
  min-height: 4rem;
  gap: 0;
}
</style>
