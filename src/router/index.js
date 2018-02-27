import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import People from '@/pages/People'
import Article from '@/pages/Article'
import AddArticle from '@/pages/AddArticle'
import Photos from '@/pages/Photos'
import ArticleTypes from '@/pages/ArticleTypes'
import Search from '@/pages/Search'

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
      path: '/addArticle',
      name: 'AddArticle',
      component: AddArticle
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/articleTypes',
      name: 'ArticleTypes',
      component: ArticleTypes
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
