<template>
  <div>
    <h2>Profile for {{userId}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.user_id
    };
  },
  methods: {
      updateId() {
          this.userId=this.$route.params.user_id
      }
  },
  watch: {
     $route:'updateId'
  },
};
</script>

<style lang="scss" scoped>
</style>