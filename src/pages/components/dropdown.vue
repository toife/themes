<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Dropdown</t-card-header>
      <t-card-body>
        <p class="demo-lead">
          <code>t-dropdown</code> bọc trigger và panel; dùng slot <code>#trigger</code> với
          <code>toggle</code> / <code>open</code>, nội dung panel đặt trong default slot.
        </p>
        <div>
          <t-radio-group v-model="role" orientation="horizontal">
            <t-radio value="mode" role="mode">Mode</t-radio>
            <t-radio value="reverse" role="reverse">Reverse</t-radio>
            <t-radio value="primary" role="primary">Primary</t-radio>
            <t-radio value="success" role="success">Success</t-radio>
            <t-radio value="info" role="info">Info</t-radio>
            <t-radio value="warning" role="warning">Warning</t-radio>
            <t-radio value="danger" role="danger">Danger</t-radio>
          </t-radio-group>
        </div>
        <t-divider class="my-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Cơ bản</h3>
          <div class="demo-row">
            <t-dropdown v-model="menuOpen" :role="role">
              <template #trigger="{ toggle }">
                <t-button :role="role" variant="outline" @click="toggle">Mở menu</t-button>
              </template>
              <button
                v-for="item in menuItems"
                :key="item"
                type="button"
                class="dropdown-demo-row"
                @click="pickMenu(item)"
              >
                {{ item }}
              </button>
            </t-dropdown>
            <span v-if="lastPick" class="demo-hint">Đã chọn: {{ lastPick }}</span>
          </div>
        </section>
        <t-divider class="my-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Placement</h3>
          <div class="demo-row demo-row--wrap">
            <t-dropdown v-model="p1" placement="bottom-start" :role="role">
              <template #trigger="{ toggle }">
                <t-button :role="role" variant="outline" size="small" @click="toggle">
                  bottom-start
                </t-button>
              </template>
              <button type="button" class="dropdown-demo-row" @click="p1 = false">Đóng</button>
            </t-dropdown>
            <t-dropdown v-model="p2" placement="bottom-end" :role="role">
              <template #trigger="{ toggle }">
                <t-button :role="role" variant="outline" size="small" @click="toggle">
                  bottom-end
                </t-button>
              </template>
              <button type="button" class="dropdown-demo-row" @click="p2 = false">Đóng</button>
            </t-dropdown>
            <t-dropdown v-model="p3" placement="top-start" :role="role">
              <template #trigger="{ toggle }">
                <t-button :role="role" variant="outline" size="small" @click="toggle">
                  top-start
                </t-button>
              </template>
              <button type="button" class="dropdown-demo-row" @click="p3 = false">Đóng</button>
            </t-dropdown>
            <t-dropdown v-model="p4" placement="top-end" :role="role">
              <template #trigger="{ toggle }">
                <t-button :role="role" variant="outline" size="small" @click="toggle">
                  top-end
                </t-button>
              </template>
              <button type="button" class="dropdown-demo-row" @click="p4 = false">Đóng</button>
            </t-dropdown>
          </div>
        </section>
        <t-divider class="my-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Disabled</h3>
          <t-dropdown v-model="disabledOpen" disabled :role="role">
            <template #trigger="{ toggle }">
              <t-button :role="role" variant="outline" @click="toggle">Không mở được</t-button>
            </template>
            <button type="button" class="dropdown-demo-row">Ẩn</button>
          </t-dropdown>
        </section>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");
const menuOpen = ref(false);
const lastPick = ref("");
const menuItems = ["Tuỳ chọn A", "Tuỳ chọn B", "Tuỳ chọn C"];

const pickMenu = (label: string) => {
  lastPick.value = label;
  menuOpen.value = false;
};

const p1 = ref(false);
const p2 = ref(false);
const p3 = ref(false);
const p4 = ref(false);
const disabledOpen = ref(false);
</script>

<style scoped>
.demo-lead {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.88;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.demo-heading {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.75;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
}

.demo-row--wrap {
  align-items: flex-start;
}

.demo-hint {
  font-size: 0.85rem;
  opacity: 0.8;
}

.dropdown-demo-row {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0.5rem 0.75rem;
  border: none;
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: inherit;
}

.dropdown-demo-row:hover {
  background: rgba(0, 0, 0, 0.06);
}
</style>
