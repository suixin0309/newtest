/* 这里是我们写好的需要权限判断的路由 */
import DataStandard from '../views/DataStandard';
import DataDistribution from '../views/DataDistribution';
import DataQuality from '../views/DataQuality';
import DataIntegration from '../views/dataIntegration';
import DataSource from '../views/dataSources';
import AddSource from '../views/addSources';
import Return from '../views/Return';
import Home from '../views/Home';
import EditStandard from '../views/EditStandard';
import HelloWorld from '../components/HelloWorld';
import About from '../views/About'
const dynamicRoutes = [
  {
    path: 'standard',
    name: 'dataStandard',
    component: About,
    meta: {
      name: '数据标准',
      isAuth:true,
      hasFun:false,
    },
    children:[
      {
        path: 'edit',
        name: 'edit',
        component: EditStandard,
        meta: {
          name: '标准维护',
          isAuth:true,
          hasFun:true,
          parentName:'标准列表'
        }
      },
      {
        path: 'list',
        name: 'list',
        component: DataStandard,
        meta: {
          name: '标准列表',
          isAuth:true,
          hasFun:false,
        }
      }
    ]
  },
  {
    path: 'quality',
    name: 'dataQuality',
    component: About,
    meta: {
      name: '数据质量',
      isAuth:true,
      hasFun:false,
    },
    children:[
      {
        path: 'list',
        name: 'quality',
        component: DataQuality,
        meta: {
          name: '数据质量列表',
          isAuth:true,
          hasFun:false,
        }
      },
      {
        path: 'qqq',
        name: 'qqq',
        component: HelloWorld,
        meta: {
          name: '质量管理',
          isAuth:true,
          hasFun:false,
        }
      }
    ]
  },
  {
    path: 'integration',
    name: 'DataIntegration',
    component: About,
    meta: {
      name: '数据集成',
      isAuth:true,
      hasFun:false,
    },
    children:[
      {
        path: 'sourceList',
        name: 'sourceList',
        component: DataSource,
        meta: {
          name: '数据来源管理',
          isAuth:true,
          hasFun:false,
        }
      },
      {
        path: 'qqq',
        name: 'qqq',
        component: HelloWorld,
        meta: {
          name: '数据存储源管理',
          isAuth:true,
          hasFun:false,
        }
      },
      {
        path: 'addSource',
        name: 'addSource',
        component: AddSource,
        meta: {
          name: '新增数据源',
          isAuth:true,
          hasFun:true,
          parentName:'数据来源管理'

        }
      },
      {
        path: 'editSource',
        name: 'editSource',
        component: AddSource,
        meta: {
          name: '修改数据源',
          isAuth:true,
          hasFun:true,
          parentName:'数据来源管理'

        }
      }
    ]
  },
  {
    path: 'distribution',
    name: 'dataDistribution',
    component: DataDistribution,
    meta: {
      name: '数据分发',
      isAuth:true,
      hasFun:false,
    },
    // children: [
    //   {
    //     path: 'management',
    //     name: 'management',
    //     component: Management,
    //     meta: {
    //       name: '数据分发管理'
    //     }
    //   },
    //   {
    //     path: 'verify',
    //     name: 'verify',
    //     component: Verify,
    //     meta: {
    //       name: '数据审核管理'
    //     }
    //   },
    //   {
    //     path: 'abnormal',
    //     name: 'abnormal',
    //     component: Abnormal,
    //     meta: {
    //       name: '访问异常报警'
    //     }
    //   },
    //   {
    //     path: 'market',
    //     name: 'market',
    //     component: Market,
    //     meta: {
    //       name: '数据集市'
    //     }
    //   },
    //   {
    //     path: 'detail',
    //     name: 'detailv',
    //     component: AbnormalDetail,
    //     meta: {
    //       name: '集市详情'
    //     }
    //   },
    // ]
  },
  // {
  //   path: 'convergence',
  //   name: 'convergence',
  //   component: Convergence,
  //   meta: {
  //     name: '数据集成'
  //   },
  //   children: [
  //     {
  //       path: 'transform',
  //       name: 'transform',
  //       component: ConvergenceTransform,
  //       meta: {
  //         name: '任务'
  //       }
  //     },
  //     {
  //       path: 'job',
  //       name: 'job',
  //       component: ConvergenceJob,
  //       meta: {
  //         name: '作业'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: 'system',
  //   name: 'system',
  //   component: System,
  //   meta: {
  //     name: '系统管理'
  //   },
  //   children: [
  //     {
  //       path: 'enum',
  //       name: 'enum',
  //       component: Enum,
  //       meta: {
  //         name: '枚举管理'
  //       }
  //     },
  //     {
  //       path: 'user',
  //       name: 'user',
  //       component: User,
  //       meta: {
  //         name: '用户管理'
  //       }
  //     },
  //     {
  //       path: 'role',
  //       name: 'role',
  //       component: Role,
  //       meta: {
  //         name: '角色管理'
  //       }
  //     }
  //   ]
  // }
];

export default dynamicRoutes;

