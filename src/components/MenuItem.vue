<template>
  <div v-if="menuItemList && menuItemList[0].name">
    <a-menu-item v-for="item in menuItemList" :key="item.name" :index="item.name">
      <router-link :to="'/nav/'+item.path">
        <a-icon type="appstore"/>
        <span> {{item.meta.name}}</span>
      </router-link>
    </a-menu-item>
  </div>
</template>
<script>

  export default {
    name: 'MenuItem',
    props: {
      menuItemList: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        collapsed: false,
        test: 9
      };
    },
    beforeMount: function () {
      console.log('this');
      console.log(this.props.menuItemList);

    },
    components: {

    },
    computed: {},
    methods: {

      handleClick: function (e) {
        console.log(e);

      }
    }
  };
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, .2);
    margin: 16px;
  }
</style>
