<template>
  <b-container fluid>
    <div class="header">
      <b-navbar class="navbar w-100" type="dark" variant="dark">
        <b-navbar-nav class="w-100">
            <b-row cols="12">
              <TagSelector
                v-for="(tag, index) in getTags"
                :key="tag + index"
                :tag="tag"
              />
            </b-row>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </b-container>
</template>

<script>
import { BContainer, BRow, BNavbar, BNavbarNav } from 'bootstrap-vue';
import TagSelector from "@/components/TagSelector.vue";

import gDataFetcher from "../datafetcher.js";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    BContainer,
    BRow,
    BNavbar,
    BNavbarNav,
    TagSelector
  },
  props: {},
  data: () => {
    return {
      tags: []
    };
  },
  created: function() {
    gDataFetcher.getTags();
  },
  computed: {
    ...mapGetters(["getTags"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
