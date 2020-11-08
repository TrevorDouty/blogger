<template>
  <div class="about text-center container-fluid">
    <h1>My Blogs{{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div class="row">
      <form class="form-group" @submit.prevent="createBlog">
        <input type="text"
               class="form-control"
               aria-describedby="helpId"
               placeholder="Title"
               v-model="state.newBlog.title"
        >

        <input
          type="text"
          class="form-control"
          aria-describedby="helpId"
          placeholder="Blog Body"
          v-model="state.newBlog.body"
        >
        <button type="submit">
          Post
        </button>
      </form>
    </div>
    <my-blog class="row card" v-for="blog in blogs" :my-blog-prop="blog" :key="blog._id" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import MyBlog from '../components/MyBlog'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({
      newBlog: {}
    })
    onMounted(() => { blogsService.getMyBlogs() })
    return {
      state,
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.myblogs),
      createBlog() {
        console.log(state.newBlog.title, state.newBlog.body)
        blogsService.createBlog(state.newBlog)
      }

    }
  },
  components: { MyBlog }
}

</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
