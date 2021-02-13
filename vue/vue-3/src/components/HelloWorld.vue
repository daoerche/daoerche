<template>
  <h1>{{ msg }}</h1>
  <button @click="this.clickHandle">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    clickHandle() {
      if(this.count === 5) throw new Error('method error');
      this.count++;
    }
  },
  mounted() {
    // let a = k;
    // throw new Error('mounted error');
    this.$http();
    this._.appContext.config.globalProperties.$http = 123;
    console.log(this.$http);
    // const { ctx } = getCurrentInstance()
    // ctx.appContext.config.globalProperties.$http = 123;
  },
  watch: {
    count(pre, cur) {
      console.log('watch', pre, cur);
    },
    haha() {

    }
  },
  // inject: ['aaa']
}
</script>
