<template>
  <t-page class="p-4">
    <t-card>
      <t-card-header>Mode</t-card-header>
      <t-card-body>
        <t-switch v-model="on" role="mode"/>
        <t-switch v-model="on" role="mode" disabled />
        <t-switch v-model="on" role="mode" readonly />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Reverse</t-card-header>
      <t-card-body>
        <t-switch v-model="on" role="reverse"/>
        <t-switch v-model="on" role="reverse" disabled />
        <t-switch v-model="on" role="reverse" readonly />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Warning</t-card-header>
      <t-card-body>
        <t-switch v-model="on" role="warning"/>
        <t-switch v-model="on" role="warning" disabled />
        <t-switch v-model="on" role="warning" readonly />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Success</t-card-header>
      <t-card-body>
        <t-switch v-model="on" role="success"/>
        <t-switch v-model="on" role="success" disabled />
        <t-switch v-model="on" role="success" readonly />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Info</t-card-header>
      <t-card-body>
        <t-switch v-model="on" role="info"/>
        <t-switch v-model="on" role="info" disabled />
        <t-switch v-model="on" role="info" readonly />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Danger</t-card-header>
      <t-card-body>
        <t-switch v-model="on" role="danger"/>
        <t-switch v-model="on" role="danger" disabled />
        <t-switch v-model="on" role="danger" readonly />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Primary</t-card-header>
      <t-card-body>
        <t-switch v-model="on" role="primary"/>
        <t-switch v-model="on" role="primary" disabled />
        <t-switch v-model="on" role="primary" readonly />
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
const on = ref(false);
</script>
