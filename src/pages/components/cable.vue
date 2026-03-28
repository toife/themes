<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
        <p class="mb-3">
          <code>t-cable</code> is a fixed “cable” layer (top or bottom) that provides placement
          context for toolbars and similar chrome. Toolbar inherits placement when not set
          explicitly.
        </p>
        <p class="section-label">Top cable</p>
        <div class="cable-demo-shell">
          <t-cable placement="top">
            <t-toolbar :role="role" size="48px">
              <t-button variant="text" :role="role">Top bar</t-button>
            </t-toolbar>
          </t-cable>
          <div class="cable-demo-body">Scrollable content area</div>
        </div>
        <t-divider class="my-4" />
        <p class="section-label">Bottom cable</p>
        <div class="cable-demo-shell">
          <div class="cable-demo-body">Scrollable content area</div>
          <t-cable placement="bottom">
            <t-toolbar :role="role" size="48px">
              <t-button variant="text" :role="role">Bottom bar</t-button>
            </t-toolbar>
          </t-cable>
        </div>
        <t-divider class="my-4" />
        <div>
          <t-radio-group v-model="role" orientation="horizontal">
            <t-radio value="mode" role="mode">Mode</t-radio>
            <t-radio value="primary" role="primary">Primary</t-radio>
            <t-radio value="success" role="success">Success</t-radio>
          </t-radio-group>
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
.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}

.cable-demo-shell {
  position: relative;
  min-height: 160px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.cable-demo-body {
  flex: 1;
  min-height: 72px;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  opacity: 0.8;
}
</style>
