<template>
  <t-page class="p-4">
    <t-card>
      <t-card-header>Mode</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="mode" disabled />
        <t-checkbox v-model="on" role="mode" variant="outline" />
        <t-checkbox v-model="on" role="mode" variant="fill" />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Reverse</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="reverse" disabled />
        <t-checkbox v-model="on" role="reverse" variant="outline" />
        <t-checkbox v-model="on" role="reverse" variant="fill" />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Light</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="light" disabled />
        <t-checkbox v-model="on" role="light" variant="outline" />
        <t-checkbox v-model="on" role="light" variant="fill" />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Dark</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="dark" disabled />
        <t-checkbox v-model="on" role="dark" variant="outline" />
        <t-checkbox v-model="on" role="dark" variant="fill" />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Primary</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="primary" disabled />
        <t-checkbox v-model="on" role="primary" variant="outline" />
        <t-checkbox v-model="on" role="primary" variant="fill" />
      </t-card-body>
    </t-card>  

    <t-card class="mt-4">
      <t-card-header>Danger</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="danger" disabled />        
        <t-checkbox v-model="on" role="danger" variant="outline" />
        <t-checkbox v-model="on" role="danger" variant="fill" />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Info</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="info" disabled />        
        <t-checkbox v-model="on" role="info" variant="outline" />
        <t-checkbox v-model="on" role="info" variant="fill" />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Warning</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="warning" disabled />
        <t-checkbox v-model="on" role="warning" variant="outline" />
        <t-checkbox v-model="on" role="warning" variant="fill" />
      </t-card-body>
    </t-card>

    <t-card class="mt-4">
      <t-card-header>Success</t-card-header>
      <t-card-body>
        <t-checkbox v-model="on" role="success" disabled />
        <t-checkbox v-model="on" role="success" variant="outline" />
        <t-checkbox v-model="on" role="success" variant="fill" />
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
const on = ref(false);
</script>
