<template>
  <div class="update">
    <h1 class="uppage">Update your contents</h1>
    <img alt="icon" class="icn" src="../assets/update.png">
    <form class="grid-container">
      <input type="text" class="grid-item item1" v-model="post.title" placeholder="Type the title here" required>
      <input type="text" class="grid-item item1" v-model="post.author" placeholder="Type the author here" required>
      <input type="file" class="grid-item item2" ref="fileInput" accept="image/*" v-on:change="previewImage">
      <button class="grid-item item3" type="button" v-on:click="triggerChooseImg">Choose Image</button>
     <div>
       <img :src="post.image" class="image-preview">
     </div> 
      <button class="grid-item item4" type="button" v-on:click="updatePost">Update post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Update",
  data () {
    return {
      post: {
        title: '',
        image: null
      }
    }
  },
  methods: {
   triggerChooseImg(){
      this.$refs.fileInput.click()
    },
    previewImage(){
      const imageFile = this.$refs.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.post.image = event.target.result
      }
    fileReader.readAsDataURL(imageFile)
    },
    updatePost() {
      postRef.doc(this.post.id).set({
        title: this.post.title,
        image: this.post.image
      });

      this.$router.push("/");
    }
  }
};
</script>

<style scoped>

.item3{
  background-color: rgb(144, 197, 247);
  color: black;
  border-radius: 12px;
}

.item4{
  background-color: rgb(28, 42, 56);
  color: #ffffff;
  border-radius: 12px;
}

.item4:hover {
  background-color:rgb(25, 52, 78);
  color: white;
  box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

form {
  padding: 2em 1em 2.5em;
}

button.choose-image {
  background-color: var(--primary);
}

input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
}

input[type="file"] {
  display: none;
}

.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
}

.icn{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}

.uppage{
  text-align: center;
  font-size: 40px;
}
</style>
