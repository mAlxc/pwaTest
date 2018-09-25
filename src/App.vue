<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" color="primary" app>
        <v-list>
          <template v-for="item in items">
          <v-list-tile :key="'menu_'+item.label">
            <v-list-tile-avatar>
              <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-avatar>
            <v-list-tile-content>
              {{$t('menu.'+item.label)}}
            </v-list-tile-content>
          </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar dark color="primary" app>
        <v-toolbar-side-icon  @click="drawer = !drawer"><v-icon>menu</v-icon></v-toolbar-side-icon>
        <v-toolbar-title>{{$t('appName')}}</v-toolbar-title>
      </v-toolbar>
      <v-content color="primary">
        <v-container fill-height secondary>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer color="primary" app></v-footer>
    </v-app>
  </div>
</template>

<script>
const menuItems = [
  { label: 'home', icon: 'home', name:'home' },
  { label: 'params', icon: 'settings', name:'params' }
  ]

export default {
  data: () => ({
    drawer: false,
    items: menuItems
  }),
  props: {
    source: String
  },
  created () {
  }
}
</script>
