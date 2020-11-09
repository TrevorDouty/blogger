<template>
  <div class="all-comments">
    <h5>{{ commentsProp.creatorEmail }}</h5>
    <h3>{{ commentsProp.body }}</h3>
    <button @click="deleteComment">
      Delete
    </button>
    <button>
      Edit
    </button>
  </div>
</template>

<script>
import { blogsService } from '../services/BlogsService'
import router from '../router'
export default {
  name: 'AllComments',
  props: ['commentsProp'],
  setup(props) {
    return {
      deleteComment() {
        router.push({ name: 'ActiveBlog', params: { commentId: props.commentsProp._id } })
        blogsService.deleteComment(props.commentsProp._id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
