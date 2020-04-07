<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ age }}</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          {{status}}
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>

  import {mapGetters, mapState} from "vuex";

export default {
  name: 'HelloWorld',
  props: ['msg'],
  data () {
    return {
      age:''
    }
  },
  beforeMount() {
    // this.$request(this.apiUri.taobao,'get',{
    //   'code':'utf-8',
    //     'q':'%E5%8D%AB%E8%A1%A3',
    //   'callback':'cb'
    // },'taobao').then(res=>{
    // })
  
  },
  computed:mapGetters({
      status:'getNavStatus'
    })
  ,
  methods:{
    changeNavStatus: function (num) {
      this.$store.dispatch('actionNavStatus', {num: num})
    }
  }
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
