<template>
  <div class="body">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h2>Explore the Best Insights on [Your Blog’s Focus]</h2>
        <p>Your ultimate destination for expert advice, trending topics, and engaging content.</p>
        <router-link to="/posts" class="btn">See Latest Posts</router-link>
      </div>
    </section>
    
    <!-- Featured Posts Section -->
    <section class="featured-posts">
      <div class="container">
        <h2>Featured Articles</h2>
        <div class="posts">
          <!-- Example Featured Post -->
          <article>
            <img src="https://img.freepik.com/free-vector/modern-blogger-concept-with-flat-design_23-2147996703.jpg?t=st=1722580744~exp=1722584344~hmac=96031b4bafc20df8f15e2e8d8ef462d8b985f2c716ca9e74c6baee25e885c5ec&w=740" alt="Featured Post Image">
            <h3><router-link to="/post/1">How to Master [Topic]</router-link></h3>
            <p>Discover the strategies and tips to become a pro in [Topic].</p>
            <router-link to="/post/1" class="btn">Read More</router-link>
          </article>
          <!-- Add more featured posts here -->
        </div>
      </div>
    </section>
    
    <!-- Latest Posts Section -->
    <section class="latest-posts">
      <div class="container">
        <h2>Recent Updates</h2>
        <div class="posts">
          <!-- Example Latest Post -->
          <article>
            <h3><router-link to="/post/2">Understanding [Concept]</router-link></h3>
            <p>Get the latest insights and updates on [Concept].</p>
            <router-link to="/post/2" class="btn">Read More</router-link>
          </article>
          <!-- Add more latest posts here -->
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer>
      <div class="container">
        <p>&copy; 2024 My Awesome Blog. All rights reserved.</p>
        <nav>
          <ul>
            <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
            <li><router-link to="/terms-of-service">Terms of Service</router-link></li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  color: #444;
  background-color: #f9f9f9;
}

.hero {
  background: #3498db;
  color: #fff;
  padding: 60px 20px;
  text-align: center;
}

.hero .btn {
  background: #2c3e50;
  color: #fff;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1em;
}

.featured-posts, .latest-posts {
  padding: 40px 20px;
}

.featured-posts h2, .latest-posts h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  text-align: center;
}

.featured-posts .posts, .latest-posts .posts {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.featured-posts article, .latest-posts article {
  flex: 1;
  min-width: 280px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.featured-posts img, .latest-posts img {
  width: 100%;
  height: auto;
}

.featured-posts h3, .latest-posts h3 {
  font-size: 1.4em;
}

footer {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 20px 20px;
  text-align: center;
}

footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

footer nav ul li {
  margin: 0;
}

footer nav ul li a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 0.9em;
}
</style>
