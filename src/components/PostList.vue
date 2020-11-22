<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" />
      <h1>{{ post.title }}</h1>
      <h2>{{ post.author }}</h2>
      <button class="btn" @click="deletee(post.id)">Delete</button>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    deletee(id)
    {
      postRef.doc(id).delete();
       
    }
    },
  firestore: {
    posts: postRef
  }
};
</script>

<style scoped>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 50px;
}
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}
@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 25% 25% 25% 25%;
  }
}
.grid-container article {
  text-align: center;
  padding: 5px;
  max-width: 200px;
}
.grid-container img {
  max-width: 200px;
  width: 100%;
}
.grid-container h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}


h2{
  font-size: 18px;
  font-weight: 400px;
}

.btn{
  background-color: rgb(250, 233, 233);
    color: rgb(0, 0, 0);
    border: 0px solid rgb(134, 12, 204);
    font-size: 18px;
    width: 200px;
    padding: 8px;
    border-radius: 12px;
    margin-bottom: 20px;
}

</style>