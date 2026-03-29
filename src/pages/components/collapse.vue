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
        <div class="collapse-stack">
          <t-collapse v-model="open" :role="role">
            <template #trigger>
              <t-button variant="text" :role="role">Toggle panel</t-button>
            </template>
            <p>Content inside the collapse panel.</p>
          </t-collapse>
          <t-collapse v-model="openPrimary" :role="role">
            <template #trigger>
              <t-button variant="text" :role="role">Section (open by default)</t-button>
            </template>
            <p>More details here.</p>
          </t-collapse>
        </div>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const open = ref(false);
const openPrimary = ref(true);
</script>

<style scoped>
.collapse-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
