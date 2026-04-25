<template>
  <t-page class="padding-4">
    <t-toast placement="bottom-end" />

    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body class="toast-actions">
        <p class="mb-3">
          Messages are queued in the shared <code>useToast()</code> store and shown in regions that
          match <code>placement</code>.
        </p>
        <t-button role="mode" @click="pushMode">Mode toast</t-button>
        <t-button role="primary" @click="pushPrimary">Primary toast</t-button>
        <t-button role="success" @click="pushSuccess">Success (text)</t-button>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { useToast } from "@toife/vue";

const toast = useToast();

const pushMode = () => {
  toast.open({
    message: "Saved as draft.",
    role: "mode",
    variant: "fill",
    placement: "bottom-end",
    duration: 4000,
  });
};

const pushPrimary = () => {
  toast.open({
    message: "Profile updated.",
    role: "primary",
    variant: "fill",
    placement: "bottom-end",
    duration: 4000,
  });
};

const pushSuccess = () => {
  toast.open({
    message: "Done.",
    role: "success",
    variant: "text",
    placement: "bottom-end",
    duration: 3500,
  });
};
</script>

<style scoped>
.toast-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}
</style>
