<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <h1 class="welcome">
        Welcome
      </h1>
    </div>
    <div class="row justify-content-around">
      <blog v-for="blog in blogs" :blog-prop="blog" :key="blog._id" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import Blog from '../components/Blog'
export default {
  name: 'Home',
  setup() {
    onMounted(() => { blogsService.getAll() })

    return {
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.blogs)
    }
  },
  components: { Blog }
}
</script>

<style scoped>
.home{
background-image: url("https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
background-repeat: no-repeat;
background-size: cover;}

.welcome{
  color: rgba(131, 86, 4, 0.842);
}

</style>
