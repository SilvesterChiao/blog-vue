import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import People from '@/components/People'
import Article from '@/components/Article'
import AddArticle from '@/components/AddArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/people/:id',
      name: 'People',
      component: People
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/addArticle/',
      name: 'AddArticle',
      component: AddArticle
    }
  ]
})
