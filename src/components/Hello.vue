<template>
  <div class="hello">
    <h1 v-bind:style="{color: Africa.color}">{{msg}}</h1>
    <button @click="add()">获取新闻</button>
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
