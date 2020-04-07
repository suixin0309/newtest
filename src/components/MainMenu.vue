<template>
  <div>
    <a-menu
      style="width: 100%"
      mode="vertical"
      :defaultSelectedKeys="defaultSelectedKeys"
      theme="dark"
      @click="handleClick"
    >
      <template v-for="item in menuList">
        <a-sub-menu :key="item.path" :index="item.name"
                    v-if="item.children&&item.children.length>1">
          <span slot="title">
                <a-icon type="appstore"/><span> {{item.meta.name}}</span>
          </span>

          <a-menu-item v-for="v in item.children" v-if="v.name" :key='item.path+"/"+v.path'
                       :index="v.name">
            <router-link :on="handleClick" :to="`/nav/${item.path}/${v.path}`">
              <a-icon type="appstore"/>
              <span> {{v.meta.name}}</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item v-else-if="item.children&&item.children.length==1" :key="item.path+'/'+item.children[0].path"
                     :index="item.children[0].name">
          <router-link :on="handleClick" :to="'/nav/'+item.path+'/'+item.children[0].path">
            <a-icon type="appstore"/>
            <span> {{item.children[0].meta.name}}</span>
          </router-link>
        </a-menu-item>
        <a-menu-item v-else :key="item.path" :index="item.name">
          <router-link :on="handleClick" :to="'/nav/'+item.path">
            <a-icon type="appstore"/>
            <span> {{item.meta.name}}</span>
          </router-link>
        </a-menu-item>
      </template>
    </a-menu>
    <div>{{selectMenu}}</div>
    <div>{{pathObj}}</div>
  </div>

</template>
<script>
  export default {
    name: 'MainMenu',
    props: {
      menuList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      selectMenu:{
        type: String,
        default: function () {
          return 'wewe';
        },
      }
    },
    data() {
      return {
        pathObj: this.$route.path.slice(5),
        defaultSelectedKeys: [],
        collapsed: false,
        test: 9
      };
    },
    watch: {
      selectMenu: function (newPathObj, oldPathObj) {
        console.log("newPathObj")
        console.log(newPathObj)
        console.log(oldPathObj)
        // this.pathObj = newPathObj
      },
      deep: true
    },
    beforeMount: function () {
      if (this.pathObj.search('/') != -1) {
        const uri = this.pathObj.split('/')
        const current = this.menuList.filter((n, i) => uri[0] == n.path)
        const notFun = current[0].children.length > 0 ? current[0].children.filter((m, j) => uri[1] == m.path) : 'single'
        if (typeof notFun != "string" && notFun.length) {
          this.defaultSelectedKeys.push(this.pathObj)
        } else {
          this.defaultSelectedKeys.push(uri[0] + '/' + current[0].children[0].path)
        }
      } else {
        this.defaultSelectedKeys.push(this.pathObj)
      }
      console.log(this.defaultSelectedKeys)
    },
    mounted:function(){
      console.log('mmmmm')

    },
    beforeUpdate:function(){
      console.log('upupup')
      console.log(this.pathObj)
      console.log(this.defaultSelectedKeys)
    },
    methods: {
      handleClick: function (e) {
        this.$emit('MenuRoutes', this.$route.matched)
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
