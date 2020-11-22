<template>
  <div class="create">
    <h1 class="uppage">Add new content</h1>
    <img alt="icon" class="icn" src="../assets/create.png">
    <form class="grid-container">
      <input type="text" class="grid-item item1" v-model="post.title" placeholder="Type the title here" required>
      <input type="text" class="grid-item item1" v-model="post.author" placeholder="Type the author here" required>
      <input type="file" class="grid-item item2" ref="fileInput" accept="image/*" v-on:change="previewImage">
      <button class="grid-item item3" type="button" v-on:click="triggerChooseImg">Choose Image</button>
     <div>
       <img :src="post.image" class="image-preview">
     </div> 
     <button type="button" class="grid-item item4" v-on:click="createPost">Create Post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
  name: 'Create',
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
    createPost () {
      postRef.add(this.post)
      this.$router.push('/')
    }
    }
  }

</script>


<style>
.item3{
    padding: 15px;
    background-color: rgb(245, 100, 197);
    color: rgb(0, 0, 0);
    border: 0px solid #fff;
    font-size: 18px;
    width: 300px;
    align-content: center;
    margin: auto;
    border-radius: 10px;
}

.item1{
    padding: 15px;
    width: 300px;


}
.item2{
   margin: auto; 
    padding: 5px;
    color: rgb(59, 59, 59);
    border: 0px solid #fff;
    font-size: 18px;
    width: 100px;

}

.item4{
     margin: auto; 
    padding: 15px;
    background-color: rgb(245, 100, 197);
    color: rgb(0, 0, 0);
    border: 0px solid #fff;
    font-size: 18px;
    width: 300px;
    border-radius: 10px;
}

.grid-container {
  display: grid;
  grid-gap: 10px;
  padding: 100px;
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