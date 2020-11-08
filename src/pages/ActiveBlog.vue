<template>
  <div class="active-blog">
    <h1>Hello {{ blog.title }}</h1>
  </div>
  <form class="form-group" v-if="profile.email" @submit.prevent="createComment">
    <input type="text"
           class="form-control"
           aria-describedby="helpId"
           placeholder="Comment"
           v-model="state.body"
    >
    <button type="submit">
      Post Comment
    </button>
  </form>
  <all-comments v-for="comment in comments" :comments-prop="comment" :key="comment.body" />
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import { useRoute } from 'vue-router'
import AllComments from '../components/AllComments'
export default {
  name: 'ActiveBlog',
  // props: ['myBlogProp'],
  setup() {
    const state = reactive({
      body: '', newComment: {}, props: ['blogProp']
    })
    const route = useRoute()
    onMounted(() => {
      blogsService.getActiveBlog(route.params.blogId)
      blogsService.getComments(route.params.blogId)
    })
    return {
      state,
      blog: computed(() => AppState.ActiveBlog),
      profile: computed(() => AppState.profile),
      comments: computed(() => AppState.comments),
      createComment() {
        blogsService.createComment(state.body)
      }
    }
  },
  components: { AllComments }
}
</script>

<style lang="scss" scoped>

</style>
