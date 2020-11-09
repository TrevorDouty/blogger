<template>
  <div class="my-blog text-light bg-dark">
    <router-link :to="{ name: 'ActiveBlog', params: {blogId: blog._id} }">
      <p>{{ blog.title }}</p>
    </router-link>
    <p>{{ blog.body }}</p>
    <p> {{ blog.creatorEmail }}</p>

    <!-- <button @click="getActiveBlog">
      Read Blog Post
    </button> -->
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
// import { useRoute } from 'vue-router'
// import { blogsService } from '../services/BlogsService'
// import { blogsService } from '../services/BlogsService'
// import { useRoute } from 'vue-router'
// import router from '../router'

export default {
  name: 'MyBlog',
  props: ['myBlogProp'],
  setup(props) {
    // const route = useRoute()
    return {
      profile: computed(() => AppState.profile),
      blog: computed(() => props.myBlogProp)

      // getActiveBlog() {
      //   blogsService.getActiveBlog(route.params._id)
      //   router.push({ name: 'ActiveBlog', params: { id: props.myBlogProp.id } })
      // }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
