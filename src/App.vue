<template>
  <t-app :shape="shape" :divider="isDivider" :shadow="isShadow" :direction="direction">
    <t-cable placement="top" class="top-cable" :style="{'visibility': isShowHeader ? 'visible' : 'hidden'}" :class="{'active': route.name !== 'home'}">
      <t-toolbar class="header-toolbar">
       <div class="header-toolbar-controls padding-x-4 padding-y-2">
        <img src="/toife.png" alt="Logo" class="logo">
          <!-- <t-switch v-model="isDarkMode">Dark Mode</t-switch> -->
          <t-switch v-model="isShadow">Shadow</t-switch>
          <t-switch v-model="isDivider">Divider</t-switch>
          <div class="header-group-controls">
            <label for="direction">Direction:</label>
            <t-radio-group id="direction" v-model="direction" direction="horizontal">
              <t-radio value="left">Left</t-radio>
              <t-radio value="right">Right</t-radio>
            </t-radio-group>
          </div>
          <div class="header-group-controls">
            <label for="shape">Shape:</label>
            <t-radio-group id="shape" v-model="shape" direction="horizontal">
              <t-radio value="rounded">Rounded</t-radio>
              <t-radio value="flat">Flat</t-radio>
              <t-radio value="pill">Pill</t-radio>
            </t-radio-group>
          </div>
       </div>
      </t-toolbar>
    </t-cable>
    <t-route-wrapper>
      <t-route-navigator variant="swipe"/>
    </t-route-wrapper>
  </t-app>
</template>

<style lang="scss" scoped>
.top-cable {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.active {
    opacity: 1;
  }
}

:deep(.header-toolbar) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header-toolbar-controls{
  display: flex;
  flex-direction: row;
  height: unset !important;
  
  > div {
    &:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.08);
    }
    padding: 0 2rem;
  }
}

.header-group-controls{
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  label{
    font-size: 0.7rem;
    text-transform: uppercase;
  }
}

.logo {
  width: 2rem;
  height: 2rem;
}
</style>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const shape = ref<"rounded" | "flat" | "pill">("rounded");
const direction = ref<"left" | "right">("left");
const isDarkMode = ref<boolean>(localStorage.getItem("t-mode") === "dark");
const isShadow = ref<boolean>(false);
const isDivider = ref<boolean>(false);
const isShowHeader = ref<boolean>(true);

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

watch(() => route.name, (newRoute) => {
  if (newRoute === "home") {
    setTimeout(() => {
      isShowHeader.value = false;
    }, 300);
  } else {
    isShowHeader.value = true;
  }
});
</script>
