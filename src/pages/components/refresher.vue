<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
        <p class="mb-2">
          Drag down at the top of the scroll area. When released past the threshold, the
          <code>refresh</code> event fires with a <code>close</code> callback.
        </p>
        <t-refresher variant="up" :threshold="96" @refresh="onRefresh">
          <template #icon="{ offset, refreshing }">
            <span class="refresher-icon">{{ refreshing ? "…" : offset > 0 ? "↓" : "" }}</span>
          </template>
          <div class="refresher-scroll">
            <p v-for="n in 24" :key="n" class="refresher-line">Row {{ n }} — scroll inside this box.</p>
          </div>
        </t-refresher>
        <p v-if="lastRefresh" class="mt-2 muted">Last refresh: {{ lastRefresh }}</p>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const lastRefresh = ref("");

const onRefresh = (close: () => void) => {
  lastRefresh.value = new Date().toLocaleTimeString();
  window.setTimeout(close, 800);
};
</script>

<style scoped>
.refresher-scroll {
  max-height: 220px;
  overflow: auto;
  padding: 0.5rem 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.refresher-line {
  padding: 0.35rem 0.75rem;
  margin: 0;
}

.refresher-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  font-size: 1.25rem;
}

.muted {
  opacity: 0.75;
  font-size: 0.875rem;
}
</style>
