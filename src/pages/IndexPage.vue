<script setup>
import { ref } from 'vue'
import { useFormatAmount } from '../composables/useFormatAmount'
import { useAmountClass } from '../composables/useAmountClass'

const name = ref('')
const amount = ref(null)

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
])
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
          <q-item-section
            :class="useAmountClass(amount)"
          >
            {{ name }}
          </q-item-section>

          <q-item-section
            side
            :class="useAmountClass(amount)"
          >
            {{ useFormatAmount(amount) }}
          </q-item-section>
        </q-item>
      </q-list>
  </div>

    <q-footer class="bg-transparent">
      <div class="row q-px-xs q-py-sm q-mb-sm items-center shadow-up-3">
        <div class="col text-grey-7 text-h6">Balance:</div>
        <div class="col text-grey-7 text-h6 text-right">+ $3,999.00</div>
      </div>
      <div class="row q-px-xs q-pb-sm q-col-gutter-sm bg-primary">
        <div class="col">
          <q-input
            standout
            v-model="name"
            label="Name"
            bg-color="white"
            input-class="text-grey-10"
          />
        </div>
        <div class="col">
          <q-input
            standout
            v-model="amount"
            type="number"
            label="Amount"
            bg-color="white"
            step="0.01"
            input-class="text-grey-10 text-right"
          />
        </div>
        <div class="col col-auto flex flex-center">
          <q-btn round color="primary" icon="add" />
        </div>
      </div>
    </q-footer>

  </q-page>
</template>

<style scoped>

</style>

