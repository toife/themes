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
        <t-button role="danger" @click="visible = true">Delete item</t-button>

        <t-decision-modal
          :visible="visible"
          title="Confirm"
          message="This action cannot be undone. Continue?"
          :role="role"
          :actions="actions"
          :dismiss="['backdrop', 'escape']"
          @close="onClose"
          @choose="onChoose"
        />
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { DecisionModalButton } from "@toife/vue";

const role = ref("mode");
const visible = ref(false);

const actions = computed<DecisionModalButton[]>(() => [
  {
    text: "Cancel",
    variant: "text",
    role: role.value,
    handler: () => {},
  },
  {
    text: "Delete",
    variant: "fill",
    role: "danger",
    handler: () => {},
  },
]);

const onClose = () => {
  visible.value = false;
};

const onChoose = () => {
  visible.value = false;
};
</script>
