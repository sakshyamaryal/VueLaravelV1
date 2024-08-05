<template>
  <div class="container my-5">
    <!-- Search Bar -->
    <div class="row mb-4">
      <div class="col-md-12">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search by title" v-model="title" />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="searchTitle">Search</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog List and Details -->
    <div class="row">
      <!-- Blog List -->
      <div class="col-md-4">
        <h4 class="mb-4">Blogs List</h4>
        <div class="list-group">
          <a
            v-for="(blog, index) in blogs"
            :key="blog.id"
            :class="['list-group-item', { active: index === currentIndex }]"
            @click="setActiveBlog(blog, index)"
          >
            {{ blog.title }}
          </a>
        </div>
        <button v-if="authStatus" class="btn btn-danger mt-4" @click="removeAllBlogs">Remove All</button>
      </div>

      <!-- Blog Details -->
      <div class="col-md-8">
        <div v-if="currentBlog">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ currentBlog.title }}</h5>
              <p class="card-text"><strong>Description:</strong> {{ currentBlog.body }}</p>
              <p class="card-text"><strong>Status:</strong> {{ currentBlog.published === 'Published' ? 'Published' : 'Draft' }}</p>
              <div v-if="authStatus">
                <router-link :to="'/blogs/' + currentBlog.id" class="btn btn-warning">Edit</router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="text-center">Please click on a blog to see details...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import BlogDataService from "../services/BlogDataService";
import { isAuthenticated, authStatus } from '../components/auth/authenticate';

export default {
  name: "blogs-list",
  setup() {
    const blogs = ref([]);
    const currentBlog = ref(null);
    const currentIndex = ref(-1);
    const title = ref("");
    const authStatusRef = ref(isAuthenticated());

    const retrieveBlogs = () => {
      BlogDataService.getAll()
        .then(response => {
          if (response.data) {
            blogs.value = response.data.data.data;
          } else {
            console.error("Unexpected response structure:", response);
            blogs.value = [];
          }
        })
        .catch(e => {
          console.log(e);
          blogs.value = [];
        });
    };

    const refreshList = () => {
      retrieveBlogs();
      currentBlog.value = null;
      currentIndex.value = -1;
    };

    const setActiveBlog = (blog, index) => {
      currentBlog.value = blog;
      currentIndex.value = index;
    };

    const removeAllBlogs = () => {
      BlogDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    };

    const searchTitle = () => {
      BlogDataService.findByTitle(title.value)
        .then(response => {
          if (response.data && response.data.data) {
            blogs.value = response.data.data.data;
            setActiveBlog(null, -1);
          } else {
            console.error("Unexpected response structure:", response);
            blogs.value = [];
          }
        })
        .catch(e => {
          console.log(e);
          blogs.value = [];
        });
    };

    const checkAuth = () => {
      authStatusRef.value = isAuthenticated();
    };

    onMounted(() => {
      checkAuth();
      retrieveBlogs();
    });

    watch(authStatus, (newStatus) => {
      authStatusRef.value = newStatus;
    });

    return {
      blogs,
      currentBlog,
      currentIndex,
      title,
      authStatus: authStatusRef,
      retrieveBlogs,
      refreshList,
      setActiveBlog,
      removeAllBlogs,
      searchTitle,
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.input-group {
  max-width: 600px;
  margin: 0 auto;
}

.list-group-item.active {
  background-color: #007bff;
  color: white;
}

.card {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.btn-warning {
  color: #fff;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
