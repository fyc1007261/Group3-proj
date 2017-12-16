<template>
  <div class="hello">
    <h1 v-bind:style="{color: 'darkslategrey'}">{{msg}}</h1>
    <div class="Am">
      <button class="leftBtn1" @click="lastAmMsg()"><</button>
      <button class="rightBtn1" @click="nextAmMsg()">></button>
      <h2 v-bind:style="{color: America.color}">
        America
      </h2>
      <br>
      {{America.message}}
    </div>
    <div class="As">
      <button class="leftBtn1" @click="lastAsMsg()"><</button>
      <button class="rightBtn1" @click="nextAsMsg()">></button>
      <h2 v-bind:style="{color: Asia.color}">
        Asia & Pacific
      </h2>
      <br>
      {{Asia.message}}
    </div>
    <div class="Eu">
      <button class="leftBtn2" @click="lastEuMsg()"><</button>
      <button class="rightBtn2" @click="nextEuMsg()">></button>
      <h2 v-bind:style="{color: Europe.color}">
        Europe
      </h2>
      {{Europe.message}}
    </div>
    <div class="Af">
      <button class="leftBtn2" @click="lastAfMsg()"><</button>
      <button class="rightBtn2" @click="nextAfMsg()">></button>
      <h2 v-bind:style="{color: Africa.color}">
        Africa
      </h2>
      {{Africa.message}}
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
    lastAmMsg: function () {
      this.America.pos--
      if (this.America.pos < 0) {
        this.America.pos = this.America.news.length - 1
      }
      this.America.message = this.America.news[this.America.pos]
    },
    nextAmMsg: function () {
      this.America.pos++
      if (this.America.pos > this.America.news.length - 1) {
        this.America.pos = 0
      }
      this.America.message = this.America.news[this.America.pos]
    },
    lastAsMsg: function () {
      this.Asia.pos--
      if (this.Asia.pos < 0) {
        this.Asia.pos = this.Asia.news.length - 1
      }
      this.Asia.message = this.Asia.news[this.Asia.pos]
    },
    nextAsMsg: function () {
      this.Asia.pos++
      if (this.Asia.pos > this.Asia.news.length - 1) {
        this.Asia.pos = 0
      }
      this.Asia.message = this.Asia.news[this.Asia.pos]
    }
  },
  data () {
    return {
      msg: 'The world is under your eyes!',
      arr: [],
      Africa: {
        pos: 0,
        number: 0,
        color: 'blue',
        news: ['这里是非洲'],
        message: '这里是非洲'
      },
      America: {
        pos: 0,
        number: 0,
        color: 'blue',
        news: ['这是第一条新闻', '这是第二二二二二条新闻'],
        message: '这是第一条新闻。'
      },
      Europe: {
        pos: 0,
        number: 0,
        color: 'blue',
        news: ['这里是欧洲'],
        message: '这里是欧洲'
      },
      Asia: {
        pos: 0,
        number: 0,
        color: 'blue',
        news: ['这里是亚洲'],
        message: '这里是亚洲'
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
  font-size:6vmin;
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
  word-wrap: break-word;
  margin-top: 2vmin;
}
.Am{
  margin-left: 10vmin;
  float: left;
  margin-left: 10vmin;
  width: 40vmin;
  height: 70vmin;
  background: aqua;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.As{
  margin-right: 10vmin;
  float: right;
  margin-right: 10vmin;
  width: 40vmin;
  height: 70vmin;
  background: lightgrey;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.Eu{
  margin-left: 50vmin;
  margin-right: 50vmin;
  height: 35vmin;
  background:greenyellow;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.Af{
  margin-left: 50vmin;
  margin-right: 50vmin;
  height: 35vmin;
  background:orangered;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}

ul {
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
  margin-top: 25vmin;
  width: 5vmin;
  height: 6vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
  vertical-align: center;
}
.rightBtn1{
  float: right;
  margin-top: 25vmin;
  width: 5vmin;
  height: 6vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
.leftBtn2{
  float: left;
  margin-top: 10vmin;
  width: 5vmin;
  height: 6vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
  vertical-align: center;
}
.rightBtn2{
  float: right;
  margin-top: 10vmin;
  width: 5vmin;
  height: 6vmin;
  filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6;
}
</style>
