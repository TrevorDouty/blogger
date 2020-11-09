
<template>
  <div class="all-comments border border-light rounded my-2 ">
    <h5>{{ commentsProp.creatorEmail }}</h5>
    <h3>{{ commentsProp.body }}</h3>
    <button @click="deleteComment" class="button1 mr-4">
      Delete
    </button>
    <form class="form-group" @submit.prevent="editComment">
      <textarea v-model="state.editComment.body" name="" id="" cols="30" rows="1"></textarea>
      <button type="submit" class="buttons btn rounded mt-2">
        Edit Comment
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { blogsService } from '../services/BlogsService'
import router from '../router'
export default {
  name: 'AllComments',
  props: ['commentsProp'],
  setup(props) {
    const state = reactive({
      editComment: {}
    })
    return {
      state,
      deleteComment() {
        router.push({ name: 'ActiveBlog', params: { commentId: props.commentsProp._id } })
        blogsService.deleteComment(props.commentsProp._id)
      },
      editComment() {
        router.push({ name: 'ActiveBlog', params: { commentId: props.commentsProp._id } })
        blogsService.editComment(props.commentsProp._id, state.editComment)
      }
    }
  },
  components: {}
}
</script>

<style scoped>
.button1{
  background-color: crimson;
}
.button2{
background-color: chocolate;
}
.all-comments{
  background-color: rgba(168, 103, 57, 0.774);
}
</style>
