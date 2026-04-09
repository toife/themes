<template>
  <t-page>
    <main class="home-doc">
      <section class="hero">
        <p class="eyebrow">TOIFE UI</p>
        <h1>Toife Libraries</h1>
        <p class="lead">
          A component library and theme system for building consistent Vue interfaces.
        </p>
        <p>
          Toife helps teams ship UI faster with reusable components, predictable
          styling, and a straightforward developer experience.
        </p>
        <div class="actions">
          <router-link class="doc-link doc-link-primary" to="/installation">
            Installation guide
          </router-link>
          <router-link class="doc-link" to="/components">Components</router-link>
        </div>
      </section>

      <section class="section">
        <h2>Why Toife</h2>
        <div class="feature-grid">
          <article class="feature-card">
            <h3>Consistent design</h3>
            <p>Shared styles and components keep every screen aligned.</p>
          </article>
          <article class="feature-card">
            <h3>Composable by default</h3>
            <p>Flexible building blocks for real product workflows.</p>
          </article>
          <article class="feature-card">
            <h3>Fast onboarding</h3>
            <p>Simple setup and practical API choices for Vue teams.</p>
          </article>
        </div>
      </section>

      <section class="section quick-start">
        <h2>Quick start</h2>
        <p>
          Start with installation, then explore available components in the docs.
        </p>
        <div class="quick-links">
          <router-link class="text-link" to="/installation">Read installation docs</router-link>
          <router-link class="text-link" to="/components/action">Browse all components</router-link>
        </div>
      </section>
    </main>
  </t-page>
</template>

<style scoped>
.home-doc {
  max-width: 860px;
  margin: 0 auto;
  padding: 28px 20px 48px;
  color: #111111;
}

.hero {
  border: 1px solid #dddddd;
  border-radius: 12px;
  padding: 1.25rem;
  background: #ffffff;
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #555555;
}

h1 {
  margin: 0.3rem 0 0;
  font-size: 2rem;
  line-height: 1.2;
}

.lead {
  margin: 0.75rem 0 1rem;
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

.section {
  margin-top: 1.4rem;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  padding: 1rem 1.1rem;
  background: #ffffff;
}

.feature-grid {
  margin-top: 0.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.feature-card {
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 0.8rem;
  background: #fafafa;
}

.feature-card h3 {
  margin: 0;
  font-size: 0.98rem;
}

.feature-card p {
  margin: 0.4rem 0 0;
  font-size: 0.92rem;
  color: #444444;
}

.actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
}

.doc-link {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  color: #111111;
  text-decoration: none;
  background: #ffffff;
}

.doc-link:hover {
  background: #f6f6f6;
}

.doc-link-primary {
  background: #111111;
  color: #ffffff;
  border-color: #111111;
}

.doc-link-primary:hover {
  background: #2a2a2a;
}

.quick-start {
  margin-bottom: 0.5rem;
}

.quick-links {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.4rem;
}

.text-link {
  color: #111111;
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
