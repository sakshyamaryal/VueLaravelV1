<template>
  <div class="body">
    <div class="container">
        <div class="header" v-if="currentBlog">
            <h1 class="header__title">{{ currentBlog.title }}</h1>
            <p class="header__meta">Published on {{ formatDate(currentBlog.created_at) }} - Status: {{ currentBlog.published }}</p>
        </div>
        
        <div class="content" v-if="currentBlog">
            <p>{{ currentBlog.body }}</p>
        </div>
        
        <div class="footer">
            <p>&copy; 2024 My Awesome Blog | <a href="/home" class="footer__link">Back to Home</a></p>
        </div>
    </div>
  </div>
</template>
<script>
import BlogDataService from "../services/BlogDataService";

export default {
  name: "PostDetails",
  data() {
    return {
      currentBlog: null,
      message: ''
    };
  },
  methods: {
    getBlog(id) {
      BlogDataService.get(id).then(response => {
        this.currentBlog = response.data.data;
        console.log(response.data);
      }).catch(e => {
        console.log(e);
      });
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  },
  mounted() {
    this.message = '';
    this.getBlog(this.$route.params.id);
  }
};
</script>

<style scoped>
.body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
}

.container {
  width: 80%;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.header__title {
  margin: 0;
  font-size: 2em;
}

.header__meta {
  color: #888;
  font-size: 0.9em;
}

.content {
  line-height: 1.6;
}

.footer {
  border-top: 2px solid #eee;
  padding-top: 10px;
  margin-top: 20px;
  text-align: center;
  color: #888;
}

.footer__link {
  color: #007BFF;
  text-decoration: none;
}

.footer__link:hover {
  text-decoration: underline;
}
</style>
