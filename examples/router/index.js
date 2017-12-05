import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/docs/guide',
            name: 'guide',
            component: r => require.ensure([], () => r(require('../components/guide.vue')))
        },
        {
            path: '/docs/component',
            name: 'component',
            component: r => require.ensure([], () => r(require('../components/component.vue')))
        }
    ]
})
