// import Vue from 'vue/types'
// import Vuex from 'vuex/types'
import Vuex from 'vuex';
import Vue from 'vue';
import {DynamicRouter} from '../router';
import router from '../router/index';
import {recursionMenu} from '../util/recursionMenu';
import dynamicRoutes from '../util/auth-config';
import {recursionRouter} from '../util/recursionRouter';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: '123',
    navStatus: 1,
    permission: {
      permissionList: [],
      menuList: []
    },
    hasMessage:{
      isHas:false,
      type:'info'
    }
  },
  //vuex的计算属性，就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
  getters: {
    getNavStatus: state => {
      return state.navStatus;
    },
    getAuth: state => {
      return [1, 2, 5];
    },
    getMessage:(state) => {
      if (state.hasMessage.isHas){
        return true
      }
      else{
        return false
      }
    }
  },
  mutations: {
    mutationNavStatus (state, status) {
      state.navStatus = status.num;
    },
    SET_PERMISSION (state, status) {
      state.permission.permissionList = status;
    },
    SET_MENU (state, status) {
      state.permission.menuList = status;
    },
    SET_MESSAGE (state, status) {
      state.hasMessage = status;
    }
  },
  actions: {
    MESSAGE:function(context, status){
      context.commit('SET_MESSAGE',status)
    },
    actionNavStatus: function (context, status) {
      context.commit('mutationNavStatus', status);
    },
    FETCH_PERMISSION: async function (context, status) {
      /*  获取后台给的权限数组 */
      // let permissionList = await fetchPermission();

      let permissionList = [
        {

          'meta': {
            'name': '数据标准',
            'isAuth': true,
            'hasFun': false,
          },
          'children': [
            {
              'meta': {
                'name': '标准维护',
                'isAuth': true,
                'hasFun': true,
              }
            },
            {
              'meta':{
                'name':'标准列表',
                'isAuth': true,
                'hasFun': false,
              }
            }
          ]
        },
        {
          'meta': {
            'name': '数据质量',
            'isAuth': true,
            'hasFun': false,
          },
          'children': [
            {
              'meta': {
                'name': '数据质量列表',
                'isAuth': true,
                'hasFun': false,
              },
            }
          ]
        },
        {
          'meta': {
            'name': '数据集成',
            'isAuth': true,
            'hasFun': false,
          },
          'children': [
            {
              'meta': {
                'name': '数据来源管理',
                'isAuth': true,
                'hasFun': false,
              },
            },
            {
              'meta': {
                'name': '数据存储源管理',
                'isAuth': true,
                'hasFun': false,
              }
            },
            {
              'meta': {
                'name': '新增数据源',
                'isAuth': true,
                'hasFun': true,
              }
            },
            {
              'meta': {
                'name': '修改数据源',
                'isAuth': true,
                'hasFun': true,
              }
            }
          ]
        },
        {
          'meta': {
            'name': '数据分发',
            'isAuth': true,
            'hasFun': false,
          },
          // 'children': [
          //   {
          //     'name': '数据请求审核'
          //   }
          // ]
        }
      ];

      /*  根据后台权限跟我们定义好的权限对比，筛选出对应的路由并加入到path=''的children */
      let routes = recursionRouter(permissionList, dynamicRoutes);
      console.log(routes);
      let menuList = recursionMenu(routes);
      console.log(menuList);
      let MainContainer = DynamicRouter.find(v => v.path === '/nav');
      let children = MainContainer.children;
      let menu = _.cloneDeep(MainContainer.children);
      children.push(...routes);
      menu.push(...menuList);
      console.log(menu);
      console.log(233232);
      /* 生成左侧导航菜单 */
      // commit('SET_MENU', children);
      context.commit('SET_MENU', menu);


      // setDefaultRoute([MainContainer]);

      /*  初始路由 */
      let initialRoutes = router.options.routes;
      /*  动态添加路由 */
      router.addRoutes(DynamicRouter);

      /* 完整的路由表 */
      context.commit('SET_PERMISSION', [...initialRoutes, ...DynamicRouter]);
    }
  }
});
