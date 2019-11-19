<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'home'}">Home</router-link> 
      <router-link :to="{name:'about'}">About</router-link>
      <router-link :to="{name:'Blogs'}">Blogs</router-link>
    </div>
    <h2>User profile</h2>
    <ul>
      <li v-for="(id,index) in userIds" :key="index">
        <router-link :to="{name:'ViewProfile',params:{user_id:id}}">
          <span>profile {{id}}</span>
        </router-link>
      </li>
    </ul>
    <h2>Navigation Controls</h2>
    <ul>
      <li><button @click="goBack">Go Back</button></li>
      <li><button @click="goHome">Go Home</button></li>
      <li><button @click="goForward">Go Forward</button></li>
    </ul>
    <router-view/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      userIds: ['1','2','3','4']
    }
  },
  methods: {
    goHome() {
      this.$router.push({name:'home'})
    },
    goBack(){
      this.$router.go(-1)
    },
    goForward(){
      this.$router.go(1)
    }
  },
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li,a{
  display: inline-block;
  margin: 10px;
}
</style>
