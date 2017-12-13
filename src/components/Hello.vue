<template>
  <div class="hello">
    <h1 v-bind:style="{color: Africa.color}">{{msg}}</h1>
    <div class="Am">
      America
    </div>
    <div class="As">
      Asia
    </div>
    <div class="Eu">
      Europe
    </div>
    <div class="Af">
      Africa
    </div>
    <ul>
      <li><a href="https://github.com/fyc1007261/News-overview" target="_blank">Github Repository</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  methods: {
    add: function () {
      this.msg = this.Africa.message
      this.Africa.color = 'red'
    }
  },
  data () {
    return {
      msg: 'The world is under your eyes!',
      arr: [],
      Africa: {
        number: 0,
        color: 'blue',
        news: [],
        message: '您的商人亚当斯密透露，津巴布韦用大规模杀伤性武器清除了蛮族哨站。'
      },
      America: {
        number: 0,
        color: 'blue',
        news: [],
        message: ''
      },
      Europe: {
        number: 0,
        color: 'blue',
        news: [],
        message: ''
      },
      Asia_n_pacific: {
        number: 0,
        color: 'blue',
        news: [],
        message: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  height: 6vmin;
  width: 20vmin;
  font-size: 4vmin;
}
h1 {
  font-weight: bolder;
  font-size: 6vmin;
}
.hello{
  word-wrap: break-word;
  margin-top: 2vmin;
}
.Am{
  margin-left: 10vmin;
  float: left;
  width: 40vmin;
  height: 60vmin;
  background: aqua;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.As{
  margin-right: 10vmin;
  float: right;
  width: 40vmin;
  height: 60vmin;
  background: lightgrey;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.Eu{
  margin-left: 50vmin;
  margin-right: 50vmin;
  height: 30vmin;
  background:greenyellow;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.Af{
  margin-left: 50vmin;
  margin-right: 50vmin;
  height: 30vmin;
  background:orangered;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
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
