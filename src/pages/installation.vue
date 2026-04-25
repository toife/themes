<template>
  <t-page>
    <section class="doc-page padding-x-4 padding-y-4">
      <t-card class="section-card">
        <t-card-header>
          <h1>Installation</h1>
        </t-card-header>
        <t-card-body>
          <p class="lead">
            Install Toife packages and set up your Vue app in a few steps.
          </p>
        </t-card-body>
      </t-card>

      <t-card class="section-card">
        <t-card-header>
          <h2>1. Install packages</h2>
        </t-card-header>
        <t-card-body>
          <t-tabs v-model="pkgManager" variant="underline" :margin="[0, 0]" placement="top-start" class="pkg-tabs">
            <t-tab value="npm">npm</t-tab>
            <t-tab value="yarn">yarn</t-tab>
            <t-tab value="pnpm">pnpm</t-tab>
          </t-tabs>
          <p>Install common packages:</p>
          <pre v-if="pkgManager === 'npm'"><code>npm install @toife/sass-layer @toife/gesture</code></pre>
          <pre v-else-if="pkgManager === 'yarn'"><code>yarn add @toife/sass-layer @toife/gesture</code></pre>
          <pre v-else><code>pnpm add @toife/sass-layer @toife/gesture</code></pre>
          <p>Install Toife Vue package:</p>
          <pre v-if="pkgManager === 'npm'"><code>npm install @toife/vue</code></pre>
          <pre v-else-if="pkgManager === 'yarn'"><code>yarn add @toife/vue</code></pre>
          <pre v-else><code>pnpm add @toife/vue</code></pre>
        </t-card-body>
      </t-card>

      <t-card class="section-card">
        <t-card-header>
          <h2>2. Import theme styles</h2>
        </t-card-header>
        <t-card-body>
          <p>Import the stylesheet in your app entry file:</p>
          <pre><code>// main.ts
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')</code></pre>
        </t-card-body>
      </t-card>

      <t-card class="section-card">
        <t-card-header>
          <h2>3. Register Toife</h2>
        </t-card-header>
        <t-card-body>
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
        <t-card-header>
          <h2>4. Use components</h2>
        </t-card-header>
        <t-card-body>
          <p>You can now use Toife components in your templates:</p>
          <pre><code>&lt;template&gt;
  &lt;t-button type="button"&gt;Get started&lt;/t-button&gt;
&lt;/template&gt;</code></pre>
        </t-card-body>
      </t-card>
    </section>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const pkgManager = ref("npm");
</script>

<style scoped>
.doc-page {
  margin: 0 auto;
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

.pkg-tabs {
  margin-bottom: 1rem;
}

code {
  color: #111111;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 0.85rem;
}
</style>