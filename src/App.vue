<template>
  <t-app :shape="shape" :divider="isDivider" :shadow="isShadow" :direction="direction">
    <t-cable placement="top">
      <t-toolbar class="header-toolbar">
       <div class="header-toolbar-controls">
          <t-switch v-model="isDarkMode">Dark Mode</t-switch>
          <t-switch v-model="isShadow">Shadow</t-switch>
          <t-radio-group v-model="direction" orientation="horizontal">
            <t-radio value="left">Left</t-radio>
            <t-radio value="right">Right</t-radio>
          </t-radio-group>
          <t-radio-group v-model="shape" orientation="horizontal">
            <t-radio value="rounded">Rounded</t-radio>
            <t-radio value="flat">Flat</t-radio>
            <t-radio value="pill">Pill</t-radio>
          </t-radio-group>
          <t-switch v-model="isDivider">Divider</t-switch>
       </div>
      </t-toolbar>
    </t-cable>
    <t-route-wrapper>
      <t-route-navigator variant="swipe" />
    </t-route-wrapper>
  </t-app>
</template>

<style lang="scss" scoped>
:deep(.header-toolbar > div > *) {
  flex: none !important;
}

:deep(.header-toolbar) {
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header-toolbar-controls{
  display: flex;
  gap: 2rem;
  flex-direction: row;
}
</style>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
const shape = ref<"rounded" | "flat" | "pill">("rounded");
const direction = ref<"left" | "right">("left");
const isDarkMode = ref<boolean>(localStorage.getItem("t-mode") === "dark");
const isShadow = ref<boolean>(false);
const isDivider = ref<boolean>(false);

const setMode = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add("t-mode-dark");
    document.documentElement.classList.remove("t-mode-light");
  } else {
    document.documentElement.classList.add("t-mode-light");
    document.documentElement.classList.remove("t-mode-dark");
  }
};

watch(isDarkMode, (newMode) => {
  setMode(newMode);
  localStorage.setItem("t-mode", newMode ? "dark" : "light");
});

onMounted(() => {
  setMode(isDarkMode.value);
});
</script>
