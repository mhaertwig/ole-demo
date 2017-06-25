<template>
  <div id="app">
    <div id="header">
      <nav>
        <div id="brand">OpenLayers Editor</div>
        <a href="#/example">Demo</a>
        <a href="#/api">API</a>
        <a target="_blank" href="https://github.com/geops/ole2">Code</a>
        <a target="_blank" href="http://geops.de/blog"></a>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
}

body, html {
  height: 100%;
  overflow: hidden;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#header {
  border-bottom: 2px solid #61849c;
  color: #61849c;
  height: 20px;
  padding: 20px;
  text-align: right;
}

#header a {
  color: #61849c;
  margin-right: 20px;
}

#header a:last-child {
    margin-right: 0;
}

#brand {
  font-size: 20px;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  left: 10px;
  position: absolute;
  top: 0;
}
</style>
