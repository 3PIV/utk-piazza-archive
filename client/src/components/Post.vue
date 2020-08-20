<template>
  <div>
    <h1
      v-if="getContent"
      class="text-left"
    >
      {{ getContent.message.subject }}
    </h1>
    <div
      class="post-content text-left"
      v-if="getContent"
      v-html="getContent.message.content"
    >
    </div>
    <p
      v-else
    >
      Select a post!
    </p>
    <div
      class="text-left"
      v-if="getContent && getContent.children && getContent.children.length"
    >
      <Child
        v-for="(child, index) in getContent.children"
        :key="index + '-' + child.id"
        :content="child"
        :depth="0"
      />
    </div>
  </div>
</template>

<script>
import { BCol, BNavItem } from "bootstrap-vue";
import { mapGetters } from "vuex";

import Child from "@/components/Child.vue";

import store from "@/store";
import gDataFetcher from "@/datafetcher";

export default {
  name: "TagSelector",
  components: {
    BNavItem,
    BCol,
    Child
  },
  props: {
    tag: String,
  },
  methods: {
  },
  computed: {
    ...mapGetters(['getContent'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.post-content >>> p {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
  letter-spacing: .03em;
}
</style>
