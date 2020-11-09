<template>
  <div class="active-blog">
    <div v-if="blog.creator">
      <img :src="blog.creator.picture" alt="">
    </div>
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.body }}</p>
    <!-- v-if="profile.email" -->
    <form class="form-group" @submit.prevent="createComment">
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
    <button @click="deleteBlog(blogId)">
      Delete
    </button>
  </div>
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
      },
      deleteBlog() {
        blogsService.deleteBlog(route.params.blogId)
      }
    }
  },
  components: { AllComments }
}
</script>

<style lang="scss" scoped>

</style>
