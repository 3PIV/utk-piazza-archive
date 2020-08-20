<template>
  <b-list-group-item
    class="tag-selector d-flex justify-content-between align-items-left"
    v-on:click="wasSelected"
    v-if="getSelectedPost === id"
    href="#"
    variant="light"
    active
    v-html="message.subject"
  >
  </b-list-group-item>
  <b-list-group-item
    class="tag-selector d-flex justify-content-between align-items-left"
    v-on:click="wasSelected"
    v-else
    href="#"
    variant="light"
    v-html="message.subject"
  >
  </b-list-group-item>
</template>

<script>
import { BListGroupItem } from 'bootstrap-vue';
import { mapGetters } from "vuex";

import store from "@/store";
import gDataFetcher from "@/datafetcher";

export default {
  name: "PostSelector",
  components: {
    BListGroupItem,
  },
  props: {
    message: {
        created: String,
        subject: String,
    },
    id: String
  },
  methods: {
    wasSelected: function() {
      store.commit('setSelectedPost', this.id);
      gDataFetcher.getContent(this.id);
    }
  },
  computed: {
    ...mapGetters(['getSelectedPost'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
