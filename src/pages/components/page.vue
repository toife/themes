<template>
  <t-page class="padding-4">
    <t-card role="mode">
      <t-card-header>Example</t-card-header>
      <t-card-body>
        <p class="mb-3">
          <code>t-page</code> is the standard scrollable surface inside the app shell. Component
          demo routes in this site wrap content in <code>t-page</code> with utility padding (e.g.
          <code>class="padding-4"</code>).
        </p>
        <div class="page-demo-frame">
          <t-page class="page-demo-inner">
            <p class="mb-0">Inner <code>t-page</code> — use for full-width sections inside cards or split layouts.</p>
          </t-page>
        </div>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<style scoped>
.page-demo-frame {
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  min-height: 120px;
  position: relative;
}

.page-demo-inner {
  padding: 1rem;
  min-height: 120px;
  font-size: 0.875rem;
}
</style>
