<template>
  <iframe :style="{height: iframeHeight + 'px'}" ref="iframe" src="/doc/index.html"></iframe>
</template>

<script>
export default {
  name: 'api',
  data() {
    return {
      iframeHeight: 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.iframeHeight = document.body.clientHeight -
        this.$refs.iframe.offsetTop;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe {
  position: relative;
  border: 0;
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
