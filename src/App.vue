<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        isTure: this.$store.state.hasMessage.isHas
      };
    },
    computed: {
      isHasMessage: function () {
        return this.$store.state.hasMessage.isHas;
      }
    },
    beforeMount: function () {
    },
    updated: function () {
      const {isHas, type} = this.$store.state.hasMessage;
      if (this.$store.getters.getMessage) {
        this.hasMessage(type);
      }
    },
    methods: {
      hasMessage: function (type) {
        this.$message[type]('This is a normal message');
      }
    }
  };
</script>

<style>
  #app {
    height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
