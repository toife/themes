<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
        <p class="section-label">Remote image</p>
        <t-image class="demo-image" :src="srcOk" alt="Sample" />
        <t-divider class="my-4" />
        <p class="section-label">Fallback (defaultSrc)</p>
        <p class="mb-2">Broken URL falls back to a placeholder image.</p>
        <t-image
          class="demo-image"
          src="https://invalid.example/missing.png"
          :default-src="fallbackSrc"
          alt="Fallback demo"
        />
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
const srcOk = "https://picsum.photos/seed/toife/320/200";
const fallbackSrc = "https://picsum.photos/seed/fallback/320/200";
</script>

<style scoped>
.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}

.demo-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  vertical-align: middle;
}
</style>
