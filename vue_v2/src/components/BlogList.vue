<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title" v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">Search</button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Blogs List</h4>
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(blog, index) in blogs"
            :key="index"
            @click="setActiveBlog(blog, index)">
          {{ blog.title }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllBlogs">Remove All</button>
    </div>
    <div class="col-md-6">
      <div v-if="currentBlog">
        <h4>Blog</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentBlog.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentBlog.body }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentBlog.published }}
        </div>
        <router-link :to="'/blogs/' + currentBlog.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Blog...</p>
      </div>
    </div>
  </div>
</template>
<script>
import BlogDataService from "../services/BlogDataService";

export default {
  name: "blogs-list",
  data() {
    return {
      blogs: [],
      currentBlog: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveBlogs() {
      BlogDataService.getAll()
        .then(response => {
          if (response.data) {
            this.blogs = response.data.data.data; // Ensure this is an array
          } else {
            console.error("Unexpected response structure:", response);
            this.blogs = []; // Fallback to an empty array
          }
        })
        .catch(e => {
          console.log(e);
          this.blogs = []; // Handle error by setting to empty array
        });
    },
    refreshList() {
      this.retrieveBlogs();
      this.currentBlog = null;
      this.currentIndex = -1;
    },
    setActiveBlog(blog, index) {
      this.currentBlog = blog;
      this.currentIndex = index;
    },
    removeAllBlogs() {
      BlogDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    searchTitle() {
      BlogDataService.findByTitle(this.title)
        .then(response => {
          if (response.data && response.data.data) {
            this.blogs = response.data.data; // Ensure this is an array
            this.setActiveBlog(null, -1);
          } else {
            console.error("Unexpected response structure:", response);
            this.blogs = []; // Fallback to an empty array
          }
        })
        .catch(e => {
          console.log(e);
          this.blogs = []; // Handle error by setting to empty array
        });
    }
  },
  mounted() {
    this.retrieveBlogs();
  }
};
</script>
