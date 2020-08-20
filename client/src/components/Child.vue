<template>
  <div
    class="post-content text-left mt-2 pl-2"
    :class="depthClass"
    v-if="content"
  >
    <h5>
      {{ content.type + ":"}}
    </h5>
    <p
      v-if="content.type === 's_answer' || content.type === 'i_answer'"
      v-html="content.history[content.history.length - 1].content"
    >
    </p>
    <p
      v-else
      v-html="content.subject"
    >
    </p>
    <Child
      v-for="child in content.children"
      :key="child.id"
      :content="child"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
import { BCol, BNavItem } from "bootstrap-vue";
import { mapGetters } from "vuex";

import store from "@/store";
import gDataFetcher from "@/datafetcher";

export default {
  name: "Child",
  components: {
    BNavItem,
    BCol
  },
  props: {
    content: Object,
    depth: Number,
  },
  computed: {
    depthClass() { 
      const margin = this.depth > 0 ? "ml-5" : "";
      const border = [
        "border-left border-primary",
        "border-left border-secondary",
        "border-left border-success",
        "border-left border-danger",
        "border-left border-warning",
        "border-left border-info",
      ][this.depth];
      return `${margin} ${border}`;
    },
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
