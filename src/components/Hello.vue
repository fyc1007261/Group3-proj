<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="https://github.com/fyc1007261/News-overview" target="_blank">Github Repository</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'The world is in your eyes.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
