<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/update">Update</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'EB Garamond', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

#nav {
  padding: 20px;
  text-align: right;
  background-color: rgb(194, 134, 250) ;
  text-align: right;
  text-decoration: none;
  font-size: 18px;
}

#nav a {
  font-weight: bold;
  color: #181718;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #b94252;
  text-decoration: none;
}

h1{
  font-size: 18px;
  font-weight: 800;
  color: rgb(39, 38, 46);
}

h2{
  font-size: 16px;
  font-weight: 800;
  color: rgb(58, 57, 61);
}
</style>
