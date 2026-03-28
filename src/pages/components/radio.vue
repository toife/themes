<template>
  <t-page class="p-4">
    <t-card>
      <t-card-header>Mode</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.mode" role="mode">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
        </t-radio-group>
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Reverse</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.reverse" role="reverse">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
        </t-radio-group>
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Light</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.light" role="light">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
        </t-radio-group>
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Dark</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.dark" role="dark">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
        </t-radio-group>
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Primary</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.primary" role="primary">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
        </t-radio-group>
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Danger</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.danger" role="danger">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
        </t-radio-group>
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Info</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.info" role="info">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
        </t-radio-group>
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Warning</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.warning" role="warning">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
          <t-radio value="fill" variant="fill" />
        </t-radio-group>
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Success</t-card-header>
      <t-card-body>
        <t-radio-group v-model="selection.success" role="success">
          <t-radio value="disabled" disabled>
            Disabled
          </t-radio>
          <t-radio value="outline" variant="outline">
            Outline
          </t-radio>
          <t-radio value="fill" variant="fill">
            Fill
          </t-radio>
        </t-radio-group>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selection = ref({
  mode: "outline",
  reverse: "outline",
  light: "outline",
  dark: "outline",
  primary: "outline",
  danger: "outline",
  info: "outline",
  warning: "outline",
  success: "outline",
});
</script>
