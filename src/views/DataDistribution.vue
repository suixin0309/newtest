<template>
  <div class="hello">
    <h2>数据分发页</h2>
  </div>
</template>

<script>

  import {mapGetters, mapState} from "vuex";

export default {
  name: 'DataDistribution',
  props: ['msg'],
  data () {
    return {
      age:''
    }
  },
  beforeMount() {

  },
  computed:mapGetters({
      status:'getNavStatus'
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
