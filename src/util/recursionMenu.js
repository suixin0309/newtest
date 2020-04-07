/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */

export function recursionMenu(menuList = []) {
  let realMenu = _.cloneDeep(menuList);
  realMenu.forEach((item, index) => {
    if (item.children && item.children.length > 0) {
      console.log(item.children);
      item.children = item.children.filter((v, i) => v.meta.hasFun == false);
    }
  });
  // realMenu = realMenu.map((n, i) => {
  //   if (n.children && n.children.length <= 1) {
  //     // delete n.children;
  //     console.log('sfsdas');
  //   }
  // });
  console.log(realMenu);
  return realMenu;
}
