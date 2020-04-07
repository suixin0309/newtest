<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100vh;text-align: left">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo"/>
      <MainMenu v-on:MenuRoutes="onMenu" :select-menu="selectMenu" :menu-list="menuList"/>
      >
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;text-align: left">
        <div>
          <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="2">
              <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
              />
            </a-col>
            <a-col :span="20">
              <a-breadcrumb :routes="routes">
                <template slot="itemRender" slot-scope="{route, params, routes, paths}">
                  <span v-if="routes.indexOf(route) === routes.length - 1 ||  routes.indexOf(route) !== 0">
                    {{route.meta.name}}
                  </span>
                  <span v-on:click="onBreadcrumb('/nav/standard/list')" v-else>
                    {{route.meta.name}}
                  </span>
                </template>
              </a-breadcrumb>
            </a-col>
            <a-col :span="2">
              <span>管理员</span>

            </a-col>
          </a-row>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import MainMenu from './MainMenu';
  import Vue from 'vue'

  export default {
    name: 'NavComponent',
    data() {
      return {
        routes: this.$route.matched,
        collapsed: false,
        menuList: this.$store.state.permission.menuList,
        selectMenu: this.$route.path
      };
    },
    components: {
      MainMenu
    },
    // provide:function(){
    //   const state = Vue.observable({ count: 0 });
    //   return {
    //     tneme:this.selectMenu
    //   };
    // },
    methods: {
      // hasMessage: function (type) {
      //   this.$message[type]('This is a normal message');
      // },
      onMenu: function (data) {
        console.log(data)
        this.routes = data
        this.selectMenu =data[data.length-1].path
      },
      onBreadcrumb: function (data) {
        console.log('232332')
        this.selectMenu = data
        this.$router.push({path: '/nav/standard/list'})
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
