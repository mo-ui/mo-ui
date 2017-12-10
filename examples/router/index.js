import Vue from 'vue'
import Router from 'vue-router'
import map from './routeMap.json'

Vue.use(Router)

let routes = [];

function dealwithChildren (children) {
    if(!children) return;
    let szRoutes = [];

    children.forEach((child) => {
        if (child.children) {
            dealwithChildren(child.children);
        } else {
            szRoutes.push({
                alias: child.alias,
                path: child.name,
                component: r => require.ensure([], () => r(require(`../docs/${child.name}.md`)))
            });
        }
    });
    return szRoutes;
}

map.forEach((item) => {
    routes.push({
        path: item.path,
        component: r => require.ensure([], () => r(require(`../components/${item.component}`))),
        children: dealwithChildren(item.children)
    });
    // item.component = r => require.ensure([], () => r(require(`../docs/${item.component}.md`)))
});
console.log(routes);
export default new Router({
    mode: 'hash',
    routes: routes
})
