<template>
  <div class="active-blog">
    <h1>Hello {{ blog.title }}</h1>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import useRoute from 'vue-router'
export default {
  name: 'ActiveBlog',
  // props: ['myBlogProp'],
  setup() {
    const route = useRoute()
    onMounted(() => { blogsService.getActiveBlog(route.params.blogId) })
    return {
      blog: computed(() => AppState.ActiveBlog),
      profile: computed(() => AppState.profile)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
