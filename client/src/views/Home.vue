<template>
  <div class="home">
    <Header />
    <b-container fluid class="bv-example-row">
      <b-row no-gutter>
        <b-col cols="4">
          <SideBar />
        </b-col>
        <b-col cols="8">
          <Post class="mt-5"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";
import Post from "@/components/Post.vue";

import { BCol, BRow, BContainer } from 'bootstrap-vue';

export default {
  name: "Home",
  components: {
    HelloWorld,
    Header,
    SideBar,
    Post,
    BCol,
    BRow,
    BContainer,
  }
};
</script>
