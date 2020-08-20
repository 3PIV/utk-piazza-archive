import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tags: [],
    posts: [],
    content: '',
    selectedTag: '',
    selectedPost: '',
  },

  getters: {
    getTags: state => state.tags,
    getPosts: state => state.posts,
    getContent: state => state.content,
    getSelectedTag: state => state.selectedTag,
    getSelectedPost: state => state.selectedPost
  },

  mutations: {
    setTags(state, tags) {
      state.tags = tags;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setContent(state, content) {
      state.content = content;
    },
    setSelectedTag(state, selectedTag) {
      state.selectedTag = selectedTag;
    },
    setSelectedPost(state, selectedPost) {
      state.selectedPost = selectedPost;
    },
  },

  actions: {}
});
