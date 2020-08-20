<template>
  <b-col>
    <b-nav-item
      class="tag-selector"
      v-on:click="wasSelected"
      v-if="getSelectedTag === tag"
      active
    >
      {{ tag }}
    </b-nav-item>
    <b-nav-item
      class="tag-selector"
      v-on:click="wasSelected"
      v-else
    >
      {{ tag }}
    </b-nav-item>
  </b-col>
</template>

<script>
import { BCol, BNavItem } from "bootstrap-vue";
import { mapGetters } from "vuex";

import store from "@/store";
import gDataFetcher from "@/datafetcher";

export default {
  name: "TagSelector",
  components: {
    BNavItem,
    BCol
  },
  props: {
    tag: String,
  },
  methods: {
    wasSelected: function() {
      store.commit('setSelectedTag', this.tag);
      gDataFetcher.getPosts(this.tag);
    }
  },
  computed: {
    ...mapGetters(['getSelectedTag'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
