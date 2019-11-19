<template>

    <nav>
        <h2>Menu</h2>
<ul>
    <li><a href="">Home</a></li>
    <li><a href="">about</a></li>
    <li><a href="">contact</a></li>
</ul>
    </nav>
</template>

<script>
    export default {
        name:'Navbar',
        data() {
            return {
               
            }
        },
    }
</script>

<style  scoped>
nav{
    text-align: center;
}
ul{
    padding: 0
}
li{
display: inline-block;
margin: 8px
}

</style>