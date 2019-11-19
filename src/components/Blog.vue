<template>
  <div id="blogs">
    <h2>Your Blogs</h2>
    <input type="text" v-model="searchTerm">
    <div v-for="post in filterBlogs" :key="post.id">
        <h3>{{post.title}}</h3>
        <p>{{post.body | snippet}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

    data() {
        return {
            posts: [],
            searchTerm:''
        }
    },

    computed: {
        filterBlogs() {
            return this.posts.filter(post=>{
                return post.title.match(this.searchTerm)
            })
        }
    },

    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(results=>this.posts=results.data)
    }
};
</script>

<style lang="scss" scoped>
</style>