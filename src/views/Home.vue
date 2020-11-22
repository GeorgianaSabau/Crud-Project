<template>
  <div class="home">
    <!--<div class="img">
    <img alt="Vue logo" class="logo" src="../assets/reading.jpg" />
    </div>-->
    <post-list class="posts"> </post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "Home",
  components: {
    PostList
  }
};
</script>

<style scoped>
/*
.logo{
  width: 800px;
  margin-top:10px;
  margin-left: 350px;
}

.img{
  background-color: black;
}*/

.posts{
  margin-top: 50px;
}
</style>
