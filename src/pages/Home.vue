<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <h1>
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
    onMounted(() => blogsService.getAll())

    return {
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.blogs)
    }
  },
  components: { Blog }
}
</script>
