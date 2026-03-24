<template>
  <div class="document-layout">
    <div class="document-shell">
      <aside class="document-sidebar" aria-label="Documentation">
        <nav class="document-sidebar-nav">
          <router-link v-slot="{ href, navigate, isExactActive }" custom to="/">
            <a
              :href="href"
              class="document-sidebar-link"
              :class="{ 'router-link-active': isExactActive }"
              @click="navigate"
            >
              Home
            </a>
          </router-link>
          <router-link class="document-sidebar-link" to="/docs">Docs</router-link>
        </nav>
      </aside>

      <main class="document-main">
        <t-route-navigator variant="none" />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.document-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
}

.document-header-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.document-nav-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.85;

  &:hover,
  &.router-link-active {
    opacity: 1;
  }
}

.document-shell {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding-top: 50px;
}

.document-sidebar {
  flex: 0 0 220px;
  max-width: 40vw;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  overflow: auto;
  padding: 0.75rem 0;
}

.document-sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 0.75rem;
}

.document-sidebar-link {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  opacity: 0.9;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &.router-link-active {
    font-weight: 600;
    background: rgba(0, 0, 0, 0.07);
  }
}

.document-main {
  flex: 1;
  min-width: 0;
  overflow: auto;
  margin: 1rem;
}
</style>
