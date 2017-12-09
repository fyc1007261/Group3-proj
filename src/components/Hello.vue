<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <button id="hello!"  @click="add()"></button>
    <ul>
      <li><a href="https://github.com/fyc1007261/News-overview" target="_blank">Github Repository</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  methods : {
      add :function (){
        this.msg = 'wa!'
      }
  },
  data () {
    return {
      msg: 'The world is under your eyes!'
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bolder;
  font-size: 6vmin;

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
