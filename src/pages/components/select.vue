<template>
  <t-page class="p-4">
    <t-card role="mode">
      <t-card-header>Select</t-card-header>
      <t-card-body>
        <p class="demo-lead">
          <code>t-select</code> combines a combobox with an <code>options</code> list; supports placeholder,
          validation message, panel placement, and field-like variants.
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
          <h3 class="demo-heading">Basic</h3>
          <t-select
            v-model="city"
            :role="role"
            :options="cityOptions"
            placeholder="Select a city"
            help="Select one item from the list."
          />
          <p v-if="city !== null" class="demo-hint">Value: <code>{{ city }}</code></p>
        </section>
        <t-divider class="my-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Variant &amp; size</h3>
          <div class="select-stack">
            <t-select
              v-model="tier"
              :role="role"
              variant="outline"
              size="standard"
              :options="tierOptions"
              placeholder="Outline / standard"
            />
            <t-select
              v-model="tier"
              :role="role"
              variant="fill"
              size="small"
              :options="tierOptions"
              placeholder="Fill / small"
            />
          </div>
        </section>
        <t-divider class="my-4" />
        <section class="demo-section">
          <h3 class="demo-heading">State</h3>
          <div class="select-stack">
            <t-select
              v-model="status"
              :role="role"
              :options="statusOptions"
              placeholder="Has a disabled option"
            />
            <t-select
              v-model="locked"
              :role="role"
              :options="cityOptions"
              placeholder="Disabled"
              disabled
            />
            <t-select
              v-model="readonlyVal"
              :role="role"
              :options="cityOptions"
              placeholder="Readonly"
              readonly
            />
            <t-select
              v-model="errVal"
              :role="role"
              :options="cityOptions"
              placeholder="With error message"
              message="Please select a valid value."
            />
          </div>
        </section>
        <t-divider class="my-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Placement panel</h3>
          <t-select
            v-model="placementDemo"
            :role="role"
            :options="placementOptions"
            placeholder="bottom-end"
            placement="bottom-end"
          />
        </section>
        <t-divider class="my-4" />
        <section class="demo-section">
          <h3 class="demo-heading">Option slot (custom rendering)</h3>
          <t-select v-model="emoji" :role="role" :options="emojiOptions" placeholder="Select an icon">
            <template #option="{ option, selected }">
              <span class="select-option-custom" :class="{ selected }">
                <span class="select-option-emoji">{{ option.label.split(" ")[0] }}</span>
                {{ option.label.slice(option.label.indexOf(" ") + 1) }}
              </span>
            </template>
          </t-select>
        </section>
      </t-card-body>
    </t-card>
  </t-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const role = ref("mode");

const cityOptions = [
  { label: "Hanoi", value: "hn" },
  { label: "Ho Chi Minh City", value: "hcm" },
  { label: "Da Nang", value: "dn" },
];
const city = ref<string | null>(null);

const tierOptions = [
  { label: "Free", value: "free" },
  { label: "Pro", value: "pro" },
  { label: "Team", value: "team" },
];
const tier = ref<string | null>(null);

const statusOptions = [
  { label: "Draft", value: "draft" },
  { label: "Sent", value: "sent", disabled: true },
  { label: "Approved", value: "approved" },
];
const status = ref<string | null>(null);

const locked = ref<string | null>("hn");
const readonlyVal = ref<string | null>("hcm");
const errVal = ref<string | null>(null);

const placementOptions = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
];
const placementDemo = ref<string | null>(null);

const emojiOptions = [
  { label: "⭐ Star", value: "star" },
  { label: "🔔 Bell", value: "bell" },
  { label: "📌 Pin", value: "pin" },
];
const emoji = ref<string | null>(null);
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

.demo-hint {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.85;
}

.select-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 22rem;
}

.select-option-custom {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.select-option-custom.selected {
  font-weight: 600;
}

.select-option-emoji {
  font-size: 1.1rem;
  line-height: 1;
}
</style>
