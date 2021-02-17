<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <icon-my></icon-my>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  custom: 'hello!',
  errorCaptured(...rest) {
    console.log('app errorCaptured', rest);
  }
}
</script>
