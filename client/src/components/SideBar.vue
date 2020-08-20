<template>
  <div class="sidebar">
    <b-list-group>
      <PostSelector
          v-for="(post, index) in getPosts"
          :key="index"
          :message="post.message"
          :id="post._id"
      />
    </b-list-group>
  </div>
</template>

<script>
import PostSelector from "@/components/PostSelector.vue";

import { BListGroup } from 'bootstrap-vue';

import { mapGetters } from "vuex";
import store from "@/store";

export default {
  name: "SideBar",
  components: {
    PostSelector,
    BListGroup,
  },
  methods: {
    wasSelected: function() {
      console.log('was selected!');
      //store.commit('setSelectedTag', this.tag);
    }
  },
  computed: {
    ...mapGetters(['getPosts'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
