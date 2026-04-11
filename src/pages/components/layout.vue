<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Grid</t-card-header>
      <t-card-body>
        <p class="mb-3">
          <code>t-grid</code> là wrapper CSS Grid; props <code>options</code> gán các biến token theo
          breakpoint (mặc định không cần <code>breakpoint</code>, hoặc <code>sm</code>,
          <code>md</code>, …). Trong grid, <code>t-cell</code> dùng <code>:options</code> với
          <code>row</code>, <code>column</code>, <code>justify</code>, <code>align</code>.
        </p>

        <p class="section-label">Ba cột · tự xếp ô</p>
        <t-grid
          :options="[
            { columns: 'repeat(3, 1fr)', gap: '1rem' },
          ]"
        >
          <t-cell><span class="demo-tile">A</span></t-cell>
          <t-cell><span class="demo-tile">B</span></t-cell>
          <t-cell><span class="demo-tile">C</span></t-cell>
        </t-grid>

        <p class="section-label mt-4">Responsive: 1 cột → từ md ba cột</p>
        <t-grid
          :options="[
            { columns: '1fr', gap: '8px' },
            { breakpoint: 'md', columns: 'repeat(3, 1fr)', gap: '16px' },
          ]"
        >
          <t-cell><span class="demo-tile">1</span></t-cell>
          <t-cell><span class="demo-tile">2</span></t-cell>
          <t-cell><span class="demo-tile">3</span></t-cell>
        </t-grid>

        <p class="section-label mt-4">t-cell: vị trí ô + justify-self / align-self</p>
        <t-grid
          :options="[
            { columns: 'repeat(2, 1fr)', rows: 'repeat(2, minmax(3rem, auto))', gap: '10px' },
          ]"
        >
          <t-cell :options="[{ row: 1, column: 1, justify: 'center', align: 'center' }]">
            <span class="demo-tile">(1, 1)</span>
          </t-cell>
          <t-cell :options="[{ row: 1, column: 2, justify: 'center', align: 'center' }]">
            <span class="demo-tile">(1, 2)</span>
          </t-cell>
          <t-cell :options="[{ row: 2, column: 1, justify: 'end', align: 'center' }]">
            <span class="demo-tile demo-tile-narrow">justify end</span>
          </t-cell>
          <t-cell :options="[{ row: 2, column: 2, justify: 'center', align: 'center' }]">
            <span class="demo-tile">(2, 2)</span>
          </t-cell>
        </t-grid>

        <p class="section-label mt-4">Gợi ý markup</p>
        <pre class="doc-code-block"><code>&lt;t-grid :options="[{ columns: 'repeat(2, 1fr)', gap: '10px' }]"&gt;
  &lt;t-cell :options="[{ row: 1, column: 1, justify: 'center', align: 'center' }]"&gt;
    …
  &lt;/t-cell&gt;
&lt;/t-grid&gt;</code></pre>
      </t-card-body>
    </t-card>

    <t-card role="mode" class="mt-4">
      <t-card-header>Flex</t-card-header>
      <t-card-body>
        <p class="mb-3">
          <code>t-flex</code> là wrapper flexbox; <code>options</code> gán
          <code>gap</code>, <code>direction</code>, <code>wrap</code>,
          <code>justify</code>, <code>align</code>, <code>alignContent</code> theo breakpoint.
          <code>t-cell</code> trong flex dùng <code>flexGrow</code>, <code>flexShrink</code>,
          <code>flexBasis</code>, <code>order</code> và <code>align</code> (align-self).
        </p>

        <p class="section-label">Cột trên mobile · hàng từ md</p>
        <t-flex
          :options="[
            { direction: 'column', gap: '8px', align: 'stretch' },
            { breakpoint: 'md', direction: 'row', gap: '12px', justify: 'space-between', align: 'center' },
          ]"
        >
          <t-cell><span class="demo-tile">A</span></t-cell>
          <t-cell><span class="demo-tile">B</span></t-cell>
          <t-cell><span class="demo-tile">C</span></t-cell>
        </t-flex>

        <p class="section-label mt-4">t-cell: flexBasis cố định + flexGrow</p>
        <t-flex :options="[{ direction: 'row', gap: '10px', align: 'stretch' }]">
          <t-cell :options="[{ flexBasis: '100px', flexShrink: 0, align: 'center' }]">
            <span class="demo-tile">100px</span>
          </t-cell>
          <t-cell :options="[{ flexGrow: 1, align: 'center' }]">
            <span class="demo-tile">flex-grow: 1</span>
          </t-cell>
          <t-cell :options="[{ flexBasis: '5rem', align: 'center' }]">
            <span class="demo-tile">5rem</span>
          </t-cell>
        </t-flex>

        <p class="section-label mt-4">Gợi ý markup</p>
        <pre class="doc-code-block"><code>&lt;t-flex :options="[{ direction: 'row', gap: '10px' }]"&gt;
  &lt;t-cell :options="[{ flexBasis: '100px', flexShrink: 0 }]"&gt;…&lt;/t-cell&gt;
  &lt;t-cell :options="[{ flexGrow: 1 }]"&gt;…&lt;/t-cell&gt;
&lt;/t-flex&gt;</code></pre>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<style scoped>
.mb-3 {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  line-height: 1.55;
}

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

.demo-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 8px;
  background: rgba(1, 82, 168, 0.12);
  color: #0152a8;
  font-size: 0.8rem;
  font-weight: 600;
}

.demo-tile-narrow {
  width: auto;
  min-width: 5.5rem;
}
</style>
