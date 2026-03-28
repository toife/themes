<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>App shell</t-card-header>
      <t-card-body>
        <p class="mb-3">
          <code>t-app</code> is the root layout: it applies global shape, divider, shadow, and
          navigation direction tokens, hosts global toasts and action/decision overlays, and wraps
          your routed content.
        </p>
        <p class="mb-3">
          This documentation site already mounts a single <code>t-app</code> in
          <code>App.vue</code>. Use the controls in the top toolbar to change
          <code>shape</code>, <code>direction</code>, <code>shadow</code>, and
          <code>divider</code> — that is the live demo.
        </p>
        <p class="section-label">Typical usage</p>
        <pre class="doc-code-block"><code>&lt;t-app shape="rounded" :divider="false" :shadow="false" direction="left"&gt;
  &lt;t-cable placement="top"&gt;…&lt;/t-cable&gt;
  &lt;t-route-wrapper&gt;
    &lt;t-route-navigator variant="swipe" /&gt;
  &lt;/t-route-wrapper&gt;
&lt;/t-app&gt;</code></pre>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<style scoped>
.section-label {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
}

.doc-code-block {
  margin: 0;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  line-height: 1.45;
  overflow: auto;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.06);
}
</style>
