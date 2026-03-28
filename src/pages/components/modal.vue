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
        <p class="section-label">Bottom sheet</p>
        <t-button :role="role" @click="sheetOpen = true">Open modal</t-button>
        <t-modal :visible="sheetOpen" placement="bottom" :role="role" @close="sheetOpen = false">
          <t-card :role="role">
            <t-card-header>Modal</t-card-header>
            <t-card-body>
              <p class="mb-3">Bottom placement with gesture-friendly dismiss.</p>
              <t-button :role="role" @click="sheetOpen = false">Close</t-button>
            </t-card-body>
          </t-card>
        </t-modal>
        <t-divider class="my-4" />
        <p class="section-label">Center</p>
        <t-button :role="role" @click="centerOpen = true">Open centered</t-button>
        <t-modal
          :visible="centerOpen"
          placement="center"
          :role="role"
          :gesture="false"
          @close="centerOpen = false"
        >
          <t-card :role="role">
            <t-card-header>Dialog</t-card-header>
            <t-card-body>
              <t-button :role="role" @click="centerOpen = false">OK</t-button>
            </t-card-body>
          </t-card>
        </t-modal>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const sheetOpen = ref(false);
const centerOpen = ref(false);
</script>

<style scoped>
.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}
</style>
