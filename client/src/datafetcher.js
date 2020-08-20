import axios from "axios";
import store from "./store";

class DataFetcher {
  constructor(url) {
    this.apibase = url;
  }

  async getTags() {
    const response = axios.get(`${this.apibase}/tags`);
    store.commit('setTags', (await response).data);
  }

  async getPosts(tag) {
    const response = axios.get(`${this.apibase}/tagged/${tag}`);
    let data = (await response).data;
    console.log(data);
    store.commit('setPosts', data);
  }

  async getContent(id) {
    const response = axios.get(`${this.apibase}/post/${id}`);
    let data = (await response).data;
    console.log(data);
    store.commit('setContent', data);
  }
}

var gDataFetcher = new DataFetcher("http://localhost:9000/api");

export default gDataFetcher;
