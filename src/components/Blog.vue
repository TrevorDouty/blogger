<template>
  <div class="blog card border border-warning shadow-lg col-3 m-2 text-light">
    <router-link :to="{ name: 'ActiveBlog', params: {blogId: blog._id} }">
      <p>{{ blog.title }}</p>
      <p>{{ blog.creatorEmail }}</p>
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Blog',
  props: ['blogProp'],
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      blog: computed(() => props.blogProp)
    }
  },
  components: {}
}

</script>

<style scoped>
.blog {font-family: 'Syne Mono', monospace;
background-color: rgba(131, 86, 4, 0.842);
}
</style>
