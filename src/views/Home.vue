<template>
  <v-layout column fill-height secondary>
    <v-flex>test1</v-flex>
    <v-flex>test2</v-flex>
    <v-flex>test3</v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
