<template>
  <t-page class="padding-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
        <div>
          <t-radio-group v-model="role" direction="horizontal">
            <t-radio value="mode" role="mode">Mode</t-radio>
            <t-radio value="reverse" role="reverse">Reverse</t-radio>
            <t-radio value="primary" role="primary">Primary</t-radio>
            <t-radio value="success" role="success">Success</t-radio>
            <t-radio value="info" role="info">Info</t-radio>
            <t-radio value="warning" role="warning">Warning</t-radio>
            <t-radio value="danger" role="danger">Danger</t-radio>
          </t-radio-group>
        </div>
        <t-divider class="margin-y-4" />
        <p class="mb-3">
          Visual hint used inside modals/sheets (see <code>t-modal</code>). Shown here in a framed
          preview.
        </p>
        <div class="gesture-preview" aria-hidden="true">
          <t-gesture-indicator placement="bottom" :role="role" />
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
.gesture-preview {
  position: relative;
  min-height: 120px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.06);
  overflow: hidden;
}
</style>
