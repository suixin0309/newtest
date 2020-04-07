/* 这里是我们写好的需要权限判断的路由 */
import DataStandard from '../../views/DataStandard';
import DataDistribution from '../../views/DataDistribution';
import DataQuality from '../../views/DataQuality';
import Review from '../../views/Review';
import Return from '../../views/Return';
import Home from '../../views/Home';

const dynamicRoutes = [
  {
    path: 'dataStandard',
    name: 'dataStandard',
    component: DataStandard,
    meta: {
      name: '数据标准'
    }
  },
  {
    path: 'quality',
    name: 'dataQuality',
    component: DataQuality,
    meta: {
      name: '数据质量'
    }
  },
  {
    path: 'distribution',
    name: 'dataDistribution',
    component: DataDistribution,
    meta: {
      name: '数据分发'
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

