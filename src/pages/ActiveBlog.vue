<template>
  <div class="container-fluid blog img-fluid">
    <div class="row active-blog text-center img-fluid text-light justify-content-center">
      <div class="col">
        <div v-if="blog.creator">
          <img :src="blog.creator.picture" alt="" class="creator">
        </div>
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.body }}</p>
      <!-- v-if="profile.email" -->
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col">
        <form class="form-group" @submit.prevent="createComment">
          <input type="text"
                 class="form-control"
                 aria-describedby="helpId"
                 placeholder="Comment"
                 v-model="state.body"
          >
          <div class="col">
            <button type="submit" class="buttons btn rounded">
              Post Comment
            </button>
          </div>
          <div class="col">
            <button @click="deleteBlog(blogId)" class="buttons btn rounded mt-2">
              Delete Blog
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="row justify-content-center text-center">
      <div class="col">
        <form class="form-group" @submit.prevent="editBlog">
          <textarea v-model="state.editBlog.body" name="" id="" cols="30" rows="1"></textarea>
          <button type="submit" class="buttons btn rounded mt-2">
            Edit Blog
          </button>
        </form>
      </div>
    </div>

    <div class="row justify-content-center text-center text-light  mt-t">
      <div class="col">
        <all-comments v-for="comment in comments" :comments-prop="comment" :key="comment.body" />
      </div>
    </div>
  </div>
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
      editBlog: {}, body: '', newComment: {}, props: ['blogProp']
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
      },
      editBlog() {
        console.log(state.editBlog.body)
        blogsService.editBlog(route.params.blogId, state.editBlog)
      }
    }
  },
  components: { AllComments }
}
</script>

<style scoped>
.blog{
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjvonNIwItmd9potcJpnEXKq_aVuRCKccXkw&usqp=CAU');
  background-repeat: no-repeat;
  background-size: cover;
height: 100vh;
}

.buttons{
  background-color: chocolate;
}
.creator{
  height: 20vh;
}

</style>
