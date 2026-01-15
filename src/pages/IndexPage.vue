<script setup>
import { ref } from 'vue';


const entries = ref([
  {
    id: 1,
    name: 'Salary',
    amount: 4999.99
  },
  {
    id: 2,
    name: 'Rent',
    amount: -999
  },
  {
    id: 3,
    name: 'Phone',
    amount: -14.88
  },
  {
    id: 4,
    name: 'Unknown',
    amount: 0
  },
]);
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <q-list
        bordered
        padding
        separator
        class="bg-white"
        v-for="{ id, name, amount } in entries"
        :key="id"
      >
        <q-item>
          <q-item-section>
            {{ name }}
          </q-item-section>

          <q-item-section side>
            {{ amount.toFixed(2) }}
          </q-item-section>
        </q-item>
      </q-list>
  </div>
  </q-page>
</template>

