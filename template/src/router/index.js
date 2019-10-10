import Vue from 'vue'
import Router from 'vue-router'
import appliM from '../pages/application-manage'
import dM from '../pages/d-manage'
import examM from '../pages/example-manage'
import overM from '../pages/overview'
import resM from '../pages/result'
import tM from '../pages/t-manage'
import taskM from '../pages/task-manage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'overview'
      // component: overM
    },
    {
      path: '/overview/:target',
      component: overM
    },
    {
      path: '/result/:target',
      component: resM
    },
    {
      path: '/testM',
      component: tM,
      children: [
        {
          path: 'application/:target',
          component: appliM
        },
        {
          path: 'example/:target',
          component: examM
        },
        {
          path: 'task/:target',
          component: taskM
        }
      ]
    },
    {
      path: '/deviceM/:target',
      component: dM
    }
  ]
})
