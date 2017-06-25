<template>
  <div id="app">
    <div id="header">
      <nav>
        <div id="brand">OpenLayers Editor</div>
        <a href="#/api">API</a>
        <a href="https://github.com/geops/ole2">Code</a>
        <a href="http://geops.de/blog"></a>
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

a, a:visited {
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
}

#header {
  border-bottom: 2px solid #61849c;
  color: #61849c;
  height: 20px;
  padding: 20px;
  text-align: right;
}

#header a, #header a:visited {
  color: #61849c;
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
