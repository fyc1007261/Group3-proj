<template>
  <div class="hello">

    <div class="textFrame">
      <button class="leftBtn1" @click="lastAmMsg()"><</button>
      <button class="rightBtn1" @click="nextAmMsg()">></button>
      <h2 v-bind:style="{}">
        News
      </h2>
      {{message}}
    </div>
    <div class="title">The world is in your eyes.</div>
    <button class="AMB" @click="createNews('Am','Hello world!')">America</button>
    <button class="ASB">Asia & Pacific</button>
    <button class="EUB">Europe</button>
    <br>
    <button class="AFB">Africa</button>
    <button class="PUB">Publish my news</button>
  <br>
    <ul>
      <li style="float: left"><a href="https://github.com/fyc1007261/News-overview" target="_blank">Github Repository</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Hello',
  methods: {
    createNews: function (r, c, h) {
      let news = Object()
      news.region = r   // region should be 'Af', 'Am', 'As' or 'Eu'.
      news.content = c  // the content of the news.
      news.heat = h // the heat of the news
      this.newsArr.push(news)
      this.message = c
    },
    init: function () {
      this.createNews('Af', 'News from Africa', 30)
      this.createNews('As', 'News from Asia', 70)
      this.createNews('Eu', 'News from Europe', 70)
      this.createNews('Am', 'News from America', 100)
    },
    Am_click: function () {
      if (this.inited === 0) {
        this.init()
      }

    }
  },
  data () {
    return {
      inited: 0, // 0 of not initialized.
      g_region: 0, // region should be 'Af', 'Am', 'As' or 'Eu' after initialized.
      message: 'The world is in your eyes!',
      newsArr: []
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
  font-size:6vmin;
  margin-bottom: 2vmin;
}
h2{
  margin: 0;
  font-weight: bolder;
  font-size: 4vmin;
}
p{
  font-weight: bolder;
  font-size: 4vmin;
}
.hello{
  float: left;
  width:200vmin;
  margin-top: 0;
  word-wrap: break-word;
}
.textFrame{
  margin-top:3vmin;
  margin-left: 3vmin;
  float: left;
  width: 40vmin;
  height: 90vmin;
  background: rgba(222,222,221,0.3);
}
ul {
  float: bottom;
  margin-top: 1vmin;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
a {
  color: #42b983;
}
.leftBtn1{
  float: left;
  margin-top:32vmin;
  width: 5vmin;
  height: 6vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
  vertical-align: center;
}
.rightBtn1{
  float: right;
  margin-top: 32vmin;
  width: 5vmin;
  height: 6vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}

.AMB{
  text-align: center;
  background: none;
  border: 0;
  float: left;
  margin-left: 0;
  margin-top: 10vmin;
  width: 40vmin;
  height: 60vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.EUB{
  background: none;
  border: 0;
  float: left;
  margin-left: 7vmin;
  margin-top: 10vmin;
  width: 25vmin;
  height: 15vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.ASB{
  margin-top: 10vmin;
  background: none;
  border: 0;
  float: right;
  margin-right: 35vmin;
  width:45vmin;
  height:60vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.AFB{
  background: none;
  border: 0;
  float: bottom;
  margin-left: 3vmin;
  width: 28vmin;
  height: 40vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.PUB{
  float: left;
  border:0;
  background-color: aqua;
  margin-left: 1vmin;
  width:40vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.title{
  float:top;
  margin-left: 50vmin;
  width: 100vmin;
  vertical-align: top;
  text-align: center;
  font-size: 7vmin;
  color: darkslategrey;
}
</style>
