<template>
  <t-page class="padding-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
        <div>
          <t-radio-group v-model="placement" direction="horizontal">
            <t-radio value="bottom">Bottom</t-radio>
            <t-radio value="top">Top</t-radio>
            <t-radio value="center">Center</t-radio>
          </t-radio-group>
        </div>
        <t-divider class="margin-y-4" />
        <t-button :role="role" @click="open = true">Open present</t-button>
        <t-present :visible="open" :placement="placement" @close="onClose">
          <t-card :role="role" class="present-card">
            <t-card-header>Present</t-card-header>
            <t-card-body>
              <p class="mb-3">Backdrop click emits <code>close</code>. Programmatic close below.</p>
              <t-button :role="role" @click="open = false">Close</t-button>
            </t-card-body>
          </t-card>
        </t-present>
        <t-divider class="margin-y-4" />
        <div>
          <t-radio-group v-model="role" direction="horizontal">
            <t-radio value="mode" role="mode">Mode</t-radio>
            <t-radio value="primary" role="primary">Primary</t-radio>
            <t-radio value="reverse" role="reverse">Reverse</t-radio>
          </t-radio-group>
        </div>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const open = ref(false);
const placement = ref<"bottom" | "top" | "center">("bottom");

const onClose = () => {
  open.value = false;
};
</script>

<style scoped>
.present-card {
  max-width: min(100%, 420px);
  margin: 0 auto;
}
</style>
