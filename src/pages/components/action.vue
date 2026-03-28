<template>
  <t-page class="p-4">
    <t-card>
      <t-card-header>Action</t-card-header>
      <t-card-body>
        <t-button @click="onOk">Open Action</t-button>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { useAction } from "@toife/vue";

const action = useAction();

const onOk = () => {
  action.open({
    actions: [
      [
        { text: "OK", handler: () => {} },
        { text: "OK", handler: () => {} }
      ],
      [{ text: "Cancel", handler: () => {} }],
    ],
    onClose: () => {},
    onChoose: (btn) => {},
  });
};
</script>
