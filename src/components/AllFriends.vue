<template>
  <div id="all-friends">
    <h2>All friends</h2>
    <div v-for="(friend,index) in friends" :key="index">
        <span @click="unFriend(friend.name)">{{friend.name | snippet}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'AllFriends',
    props: {
        friends: {
            type: Array,
        },
    },
    methods: {
        unFriend(name) {
            this.$emit('delete',{name})
        }
    },
};
</script>

<style lang="scss" scoped>
</style>