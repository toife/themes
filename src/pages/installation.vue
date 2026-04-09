<template>
  <t-page>
    <section class="installation-doc">
      <t-card class="section-card">
        <t-card-body>
          <h1>Installation</h1>
          <p class="lead">
            Install Toife packages and set up your Vue app in a few steps.
          </p>
        </t-card-body>
      </t-card>

      <t-card class="section-card">
        <t-card-body>
          <h2>1. Install packages</h2>
          <p>Install the core Vue package and theme package:</p>
          <pre><code>npm install @toife/vue @toife/sass-layer-generator</code></pre>
          <pre><code>yarn add @toife/vue @toife/sass-layer-generator</code></pre>
          <pre><code>pnpm add @toife/vue @toife/sass-layer-generator</code></pre>
        </t-card-body>
      </t-card>

      <t-card class="section-card">
        <t-card-body>
          <h2>2. Import theme styles</h2>
          <p>Import the stylesheet in your app entry file:</p>
          <pre><code>// main.ts
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')</code></pre>
        </t-card-body>
      </t-card>

      <t-card class="section-card">
        <t-card-body>
          <h2>3. Register Toife</h2>
          <p>Register the plugin so components are available globally:</p>
          <pre><code>// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Toife from '@toife/vue'

const app = createApp(App)
app.use(Toife)
app.mount('#app')</code></pre>
        </t-card-body>
      </t-card>

      <t-card class="section-card">
        <t-card-body>
          <h2>4. Use components</h2>
          <p>You can now use Toife components in your templates:</p>
          <pre><code>&lt;template&gt;
  &lt;t-button type="button"&gt;Get started&lt;/t-button&gt;
&lt;/template&gt;</code></pre>
        </t-card-body>
      </t-card>
    </section>
  </t-page>
</template>

<style scoped>
.installation-doc {
  max-width: 860px;
  margin: 0 auto;
  padding: 28px 20px 48px;
  color: #111111;
}

.section-card + .section-card {
  margin-top: 0.85rem;
}

h1 {
  margin: 0;
  font-size: 2rem;
  line-height: 1.2;
}

.lead {
  margin: 0.75rem 0 1.5rem;
  color: #444444;
}

h2 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}

p {
  margin: 0 0 0.75rem;
  color: #333333;
  line-height: 1.65;
}

pre {
  margin: 0.5rem 0 0.75rem;
  padding: 0.75rem 0.875rem;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  background: #fafafa;
  overflow-x: auto;
}

code {
  color: #111111;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 0.85rem;
}
</style>