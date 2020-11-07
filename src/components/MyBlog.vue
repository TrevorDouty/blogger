<template>
  <div class="my-blog">
    <p>{{ blog.title }}</p>
    <p>{{ blog.body }}</p>
    <p> {{ blog.creatorEmail }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'MyBlog',
  props: ['myBlogProp'],
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      blog: computed(() => props.myBlogProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
