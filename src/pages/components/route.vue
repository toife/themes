<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Routing stack</t-card-header>
      <t-card-body>
        <p class="mb-3">
          The route family connects <strong>vue-router</strong> to Toife’s layered navigation:
          <code>t-route-wrapper</code> builds a stack from matched routes,
          <code>t-route-navigator</code> renders that stack with optional swipe transitions, and
          <code>t-route-provider</code> / <code>t-route-outlet</code> are composed internally.
        </p>
        <p class="mb-3">
          This documentation layout uses <code>&lt;t-route-navigator variant="none" /&gt;</code> in
          the main column (see <code>document.vue</code>), while the root app uses
          <code>t-route-wrapper</code> with a swipe navigator — that is the live setup.
        </p>
        <p class="section-label">Minimal pattern</p>
        <pre class="doc-code-block"><code>&lt;t-route-wrapper home-route-name="home"&gt;
  &lt;t-route-navigator variant="swipe" /&gt;
&lt;/t-route-wrapper&gt;</code></pre>
        <p class="section-label mt-4">Navigator variants</p>
        <ul class="doc-list">
          <li><code>variant="none"</code> — no gesture transition (good for static docs).</li>
          <li><code>variant="swipe"</code> — interactive stack / swipe (typical in apps).</li>
        </ul>
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

.mt-4 {
  margin-top: 1rem;
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

.doc-list {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>
