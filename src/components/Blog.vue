<template>
  <div class="blog card border border-warning shadow-lg col-3 m-2 text-light">
    <p>{{ blog.title }}</p>
    <p>{{ blog.creator.name }}</p>
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
background-image: url("https://swall.teahub.io/photos/small/1-13929_nice-wallpapers-hd-12-nice-background.jpg");
background-repeat: no-repeat;
background-size: cover;}
</style>
