<template>
  <div id="app" :class="subject_name" :style="subject_name">
    <div id="box">
      <div id="logo">
        <img src="../static/img/logo.png" />
      </div>
      <div id="katong">
        <img src="../static/img/katong.gif" />
      </div>
      <div @click='isshow_nav' id="control_nav">
        <span>
          <img :src="isshow_navsrc" />
        </span>
      </div>
      <div @mouseout='huachu_nav' id="nav">
        <ul>
          <li @mouseover='nav_choose(1)' @click='nav_click(1)' :class="ischoose_vue">
            <span>vue</span>
          </li>
          <li @mouseover='nav_choose(2)' @click='nav_click(2)' :class="ischoose_echarts">
            <span>echarts</span>
          </li>
          <li @mouseover='nav_choose(3)' @click='nav_click(3)' :class="ischoose_node">
            <span>node</span>
          </li>
          <li @mouseover='nav_choose(4)' @click='nav_click(4)' :class="ischoose_MongDB">
            <span>MongDB</span>
          </li>
          <li @mouseover='nav_choose(5)' @click='nav_click(5)' :class="ischoose_learmed">
            <span>学习心得</span>
          </li>
          <li @mouseover='nav_choose(6)' @click='nav_click(6)' :class="ischoose_life">
            <span>我的生活</span>
          </li>
        </ul>
      </div>
      <div id="subject">
        <div id="header">
          <div class="subject">
            <span>不忘初心,方得始终</span>
            <span>选择主题</span>
          </div>
          <div class="hide">
            <span @click='hide'>
              <img :src="subject_btn_src" />
            </span>
          </div>
        </div>
        <div id="choose">
          <div class="choose">
            <ul>
              <li>
                <span>
                  <img src="../static/img/blue.jpg" />
                  <b @click='change(1)' @mouseout='yinying(subject)' @mouseover='yinying(1)' :class="yinying_b"></b>
                </span>
              </li>
              <li>
                <span>
                  <img src="../static/img/flower.png" />
                  <b @click='change(2)' @mouseout='yinying(subject)' @mouseover='yinying(2)' :class="yinying_f"></b>
                </span>
              </li>
              <li>
                <span>
                  <img src="../static/img/kafei.jpg" />
                  <b @click='change(3)' @mouseout='yinying(subject)' @mouseover='yinying(3)' :class="yinying_k"></b>
                </span>
              </li>
              <li>
                <span>
                  <img src="../static/img/white.jpg" />
                  <b @click='change(4)' @mouseout='yinying(subject)' @mouseover='yinying(4)' :class="yinying_w"></b>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="content">
        <div class="content">
          <router-view/>
        </div>
        <div id="data_info">
          <div id='info'>
            <p>—————》最新资讯《—————</p>
            <ul>
              <li>111111111111111111111111111111111111</li>
              <li>22222222222222222222222222222222</li>
              <li>33333333333333333333333333333333333</li>
              <li>4444444444444444444444444444444444</li>
              <li>555555555555555555555555555555555555</li>
            </ul>
          </div>
          <div id="leftInfe">
            <p>—————》我的生活《—————</p>
            <ul>
              <li>111111111111111111111111111111111111</li>
              <li>22222222222222222222222222222222</li>
              <li>33333333333333333333333333333333333</li>
              <li>4444444444444444444444444444444444</li>
              <li>555555555555555555555555555555555555</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: 'App',
    data() {
      return {
        yinying_b: 'yinying',
        yinying_f: '',
        yinying_k: 'yinying',
        yinying_w: 'yinying',
        subject: 2,
        subject_name: {
          background: "url('../static/img/flower.png') no-repeat",
          backgroundSize: '100% 100%',
        },
        subject_btn_src: "../static/img/delete.png",
        ischoose_vue: 'choose',
        ischoose_echarts: 'notchoose',
        ischoose_node: 'notchoose',
        ischoose_MongDB: 'notchoose',
        ischoose_learmed: 'notchoose',
        ischoose_life: 'notchoose',
        isshow_navsrc: '../static/img/right.png',
        nav_isshow: false,
        nav_jiyi: 1,
      }
    },
    methods: {
      isshow_nav: function () {
        //console.log(this.nav_isshow);
        if (this.nav_isshow == false) {
          this.nav_isshow = true;
          $('#nav').stop().animate({ left: '4%' });
          this.isshow_navsrc = '../static/img/left.png';
        } else {
          this.nav_isshow = false;
          $('#nav').stop().animate({ left: '-250px' });
          this.isshow_navsrc = '../static/img/right.png';
        }
      },
      nav_choose: function (nav_num) {
        switch (nav_num) {
          case 1:
            this.ischoose_vue = 'choose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'notchoose';
            break;
          case 2:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'choose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'notchoose';
            break;
          case 3:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'choose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'notchoose';
            break;
          case 4:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'choose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'notchoose';
            break;
          case 5:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'choose';
            this.ischoose_life = 'notchoose';
            break;
          case 6:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'choose';
            break;
        }
      },
      nav_click: function (nav_num) {
        this.nav_jiyi = nav_num;
        $('#nav').stop().animate({ left: '-250px' });
        this.isshow_navsrc = '../static/img/right.png';
        switch (nav_num) {
          case 1:
            this.$router.push({
              path: '/vue',
            })
            break;
          case 2:
            this.$router.push({
              path: '/',
            })
            break;
          case 3:
            this.$router.push({
              path: '/node',
            })
            break;
          case 4:
            this.$router.push({
              path: 'MongDB',
            })
            break;
          case 5:
            this.$router.push({
              path: '/study_thought',
            })
            break;
          case 6:
            this.$router.push({
              path: '/lift',
            })
            break;
        }
        this.nav_choose(this.nav_jiyi)
      },
      huachu_nav: function () {
        switch (this.nav_jiyi) {
          case 1:
            this.ischoose_vue = 'choose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'notchoose';
            break;
          case 2:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'choose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'notchoose';
            break;
          case 3:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'choose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'notchoose';
            break;
          case 4:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'choose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'notchoose';
            break;
          case 5:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'choose';
            this.ischoose_life = 'notchoose';
            break;
          case 6:
            this.ischoose_vue = 'notchoose';
            this.ischoose_echarts = 'notchoose';
            this.ischoose_node = 'notchoose';
            this.ischoose_MongDB = 'notchoose';
            this.ischoose_learmed = 'notchoose';
            this.ischoose_life = 'choose';
            break;
        }
      },
      change: function (type) {
        this.subject = type;
        this.yinying(this.subject);
      },
      yinying: function (type) {
        switch (type) {
          case 1:
            this.subject_name = {
              background: "url('../static/img/blue.jpg') 0% 0% / 100% 100% no-repeat",
            };
            this.yinying_b = '';
            this.yinying_f = 'yinying';
            this.yinying_k = 'yinying';
            this.yinying_w = 'yinying';
            break;
          case 2:
            this.subject_name = {
              background: "url('../static/img/flower.png') 0% 0% / 100% 100% no-repeat",
            };
            this.yinying_b = 'yinying';
            this.yinying_f = '';
            this.yinying_k = 'yinying';
            this.yinying_w = 'yinying';
            break;
          case 3:
            this.subject_name = {
              background: "url('../static/img/kafei.jpg') 0% 0% / 100% 100% no-repeat",
            };
            this.yinying_b = 'yinying';
            this.yinying_f = 'yinying';
            this.yinying_k = '';
            this.yinying_w = 'yinying';
            break;
          case 4:
            this.subject_name = {
              background: "url('../static/img/white.jpg') 0% 0% / 100% 100% no-repeat",
            };
            this.yinying_b = 'yinying';
            this.yinying_f = 'yinying';
            this.yinying_k = 'yinying';
            this.yinying_w = '';
            break;
          default:
            break;
        }
      },
      hide: function () {
        if (this.subject_btn_src == '../static/img/downward.png') {
          var that = this;
          $("#subject").stop().animate({ top: '270px' }, function () {
            $("#choose").css({ display: 'flex' });
            $("#subject").stop().animate({ height: '40%' }, function () {
              that.subject_btn_src = '../static/img/delete.png';
            });
          });
        } else {
          var that = this;
          $("#choose").css({ display: 'none' });
          $("#subject").stop().animate({ height: '50px' }, function () {
            $("#subject").stop().animate({ top: '30px' }, function () {
              that.subject_btn_src = '../static/img/downward.png';
            });
          });
        }
      }
    },
    mounted: function () {
      this.nav_choose(this.nav_jiyi)
    }
  }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #box {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #logo {
    height: 100px;
    width: 300px;
    background: none;
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #box #logo img {
    width: 50%;
    height: 100%;
  }

  #katong {
    height: 100px;
    width: 300px;
    background: none;
    position: absolute;
    right: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #box #katong img {
    width: 50%;
    height: 100%;
  }

  #control_nav {
    position: absolute;
    left: 30px;
    cursor: pointer;
    top: 270px;
  }

  #nav {
    height: 40%;
    width: 12%;
    position: absolute;
    background: none;
    top: 100px;
    left: -250px;
    z-index:50
  }

  #nav ul {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 10px 0;
  }

  #nav ul .notchoose {
    display: block;
    height: 16.5%;
    width: 100%;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: kaiti;
    font-size: 20px;
    color: transparent;
    background-color: #ccc;
    text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px, rgba(255, 255, 255, 0.2) 1px 3px 3px;
    -webkit-background-clip: text;
  }

  #nav ul .choose {
    display: block;
    height: 16.5%;
    width: 100%;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: kaiti;
    font-size: 20px;
  }

  #subject {
    height: 40%;
    width: 60%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 30px;
    position: absolute;
    overflow: hidden;
    z-index:50;
  }


  #subject #header {
    height: 22%;
    min-height: 50px;
    width: 100%;
    background: none;
    display: flex;
    justify-content: flex-end;
  }

  #subject #header .subject {
    height: 100%;
    width: 80%;
    background: none;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #subject #header .subject span {
    color: #ccc;
    font-family: kaiti;
    font-size: 30px;
    -webkit-text-stroke: 1.0px #000;
    color: white;
    font-weight: bold;
  }

  #subject #header .hide {
    width: 10%;
    height: 100%;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #subject #header .hide span {
    cursor: pointer;
  }

  #subject #choose {
    height: 78%;
    width: 100%;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #subject #choose .choose {
    height: 80%;
    width: 80%;
    background: none;
  }

  #subject #choose .choose ul {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #subject #choose .choose ul li {
    height: 100%;
    width: 23%;
    float: left;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #subject #choose .choose ul li span {
    height: 50%;
    width: 100%;
    position: relative;
  }

  #subject #choose .choose ul li span b {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    left: 0px;
    right: 0px;
    float: left;
    cursor: pointer;
  }

  #subject #choose .choose ul li span .yinying {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0px;
    right: 0px;
    float: left;
    cursor: pointer;
  }

  #subject #choose .choose ul li span img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    float: left;
  }

  #content {
    width: 84%;
    height: 87%;
    margin-top: 80px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    display: flex;
  }

  #content .content {
    height: 100%;
    width: 75%;
    background: none;
    border-radius: 20px 0 0 20px;
  }

  #content #data_info {
    height: 100%;
    width: 25%;
    background: none;
    border-radius: 0 20px 20px 0;
  }

  #content #data_info #info {
    height: 50%;
    width: 100%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
  }

  #content #data_info #info p {
    height: 60px;
    width: 100%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #ccc;
    font-family: '华文楷体'
  }

  #content #data_info #info ul {
    height: 85%;
    width: 84%;
    background: none;
  }

  #content #data_info #info ul li {
    height: 32px;
    width: 100%;
    line-height: 32px;
    border-bottom: 1px solid #ccc;
    color: #ccc;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 20px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  #content #data_info #info ul li:hover {
    color: #fff;
  }

  #content #data_info #leftInfe {
    height: 50%;
    width: 100%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
  }

  #content #data_info #leftInfe p {
    height: 60px;
    width: 100%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #ccc;
    font-family: '华文楷体'
  }

  #content #data_info #leftInfe ul {
    height: 85%;
    width: 84%;
    background: none;
  }

  #content #data_info #leftInfe ul li {
    height: 32px;
    width: 100%;
    line-height: 32px;
    border-bottom: 1px solid #ccc;
    color: #ccc;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 20px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  #content #data_info #leftInfe ul li:hover {
    color: #fff;
  }
</style>