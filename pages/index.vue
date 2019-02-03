<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <div class="row">
        <div class="col s12">
          <h1>Willkommen!</h1>
          <div>Enter Username Please:</div>
          <input v-model="hello.UserName">
          <button @click="doIt()">GOGOGO</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    async doIt() {
      console.log('Before: ' + this.hello.UserName)
      this.hello = await this.$axios.$post('/api/testValue', this.hello)

      console.log('After: ' + this.hello)
    }
  },

  data() {
    return {
      hello: {
        UserName: ''
      }
    }
  }
}
</script>
