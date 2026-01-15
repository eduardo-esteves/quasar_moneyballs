<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="absolute-center">
            <q-icon name="savings" />
            Moneyballs
          </div>
        </q-toolbar-title>

        <div>v{{ appVersion }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
      :breakpoint="900"
    >
      <q-list>
        <q-item-label
          header
          class="text-cyan-3"
        >
          Naviagation
        </q-item-label>

        <Navlink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import Navlink from 'components/Nav/NavLink.vue'
import { appVersion } from 'src/config/app.js'

const linksList = [
  {
    title: 'Entries',
    caption: 'View your entries',
    icon: 'list_alt',
    link: '/'
  },

  {
    title: 'Settings',
    caption: 'Application settings',
    icon: 'settings',
    link: '/settings'
  },

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
