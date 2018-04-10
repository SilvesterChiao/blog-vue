<template>
  <div class="main">
    <Blogheader>
      <span class="header-title">消息</span>
    </Blogheader>
    <div class="photo-list">
      <div class="photo" v-for="(pic, index) in pictures" :key="index" v-on:click="showPhoto(index)">
        <img :src="pic" alt="image">
      </div>
    </div>
    <div class="photo-show" v-if="show" v-on:click="hidePhoto">
      <div>
        <img :src="showedPhoto" alt="image">
      </div>
    </div>
    <navbar></navbar>
  </div>
</template>

<script>
import Blogheader from '../components/Blogheader';
import Navbar from '../components/Navbar';
import picture1 from './../assets/images/picture1.jpg';
import picture2 from './../assets/images/picture2.jpg';
import picture3 from './../assets/images/picture3.jpg';
import picture4 from './../assets/images/picture4.jpg';
import picture5 from './../assets/images/picture5.jpg';
import picture6 from './../assets/images/picture6.jpg';
import picture7 from './../assets/images/picture7.jpg';
import picture8 from './../assets/images/picture8.jpg';
import picture9 from './../assets/images/picture9.jpg';
import picture10 from './../assets/images/picture10.jpg';

export default {
 name: 'photos',
 data: function(){
   return {
     msg: 'photos',
     showedPhoto: '',
     show: false,
     pictures: [
       picture1,
       picture2,
       picture3,
       picture4,
       picture5,
       picture6,
       picture7,
       picture8,
       picture9,
       picture10,
       picture1,
       picture2,
       picture3,
       picture4,
       picture5,
       picture6,
       picture7,
       picture8,
       picture9,
       picture10,
       picture1
     ]
   }
 },
 methods: {
   showPhoto: function(index){
     this.showedPhoto = this.pictures[index];
     this.show = true;
   },
   hidePhoto: function(){
     this.show = false;
   }
 },
 components: {
   Blogheader,
   Navbar
 }
}
</script>

<style lang="scss" scoped>
.main {

  .photo-list {
    // overflow: hidden;
    column-count: 4;
    column-gap: 8px;

    .photo {
      // float: left;
      // padding: 10px;
      // border: 1px solid #ccc;
      break-inside: avoid;
      box-sizing: border-box;
      padding: 10px;

      img {
        width: 100%;
      }
    }
  }

  .photo-show {
    // display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    img {
      display: block;
      margin: 100px auto 0;
      width: 600px;
    }
  }
}
</style>
