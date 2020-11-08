<template>
  <div class="all-comments">
    <h5>{{ commentsProp.creatorEmail }}</h5>
    <h3>{{ commentsProp.body }}</h3>
  </div>
</template>

<script>
export default {
  name: 'AllComments',
  props: ['commentsProp'],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
