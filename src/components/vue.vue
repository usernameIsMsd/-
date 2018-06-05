<template>
    <div id="box">
        <div class="vue_label">
            <div class="vue_label_left">
                <div id="label_left">
                    <p class="vue_label">
                        <span>vue实用教程</span>
                    </p>
                    <div id="huak1" class="label_left">
                        <ul class="nav">
                            <li v-for='list in myData'>
                                <p class="label">
                                    <span v-text='list.label'></span>
                                    <span v-text='list.time'></span>
                                </p>
                                <div>
                                    <span v-text='list.resume'></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="vue_label_right">
                <div id="label_right">
                    <div id="huak2" class="label_right">
                        <ul class="nav">
                            <li>
                                <p class="label">vue基础课程</p>
                                <div>
                                    <span>很高兴你能来学习这套Vue2.0视频课程，现在越来越多的小公司开始使用Vue来作为前端开发框架了，而且Vue的生态也越来越好，无论你是前端的老手还是新手，都有必要认真并系统的学习，有可能的话尽量在工作中使用它了。</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'vue',
        data() {
            return {
                myData: [],
            }
        },
        methods: {
            getData: function () {
                axios.get('http://localhost:3000/getVueLabel')
                    .then(res => {
                        console.log(res.data);
                        this.myData=res.data;
                    })
            }
        },
        mounted: function () {
            this.getData();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #box {
        height: 100%;
        width: 100%;
        background: none;
        display: flex;
        justify-content: flex-end;
    }

    .vue_label {
        height: 100%;
        width: 96%;
        background: none;
        display: flex;
        align-items: center;
    }

    .vue_label .vue_label_left {
        height: 90%;
        width: 50%;
        background: none;
        border-right: 1px dashed #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .vue_label .vue_label_right {
        height: 90%;
        width: 50%;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .vue_label .vue_label_right #label_right,
    .vue_label .vue_label_left #label_left {
        height: 94%;
        width: 90%;
        background: none;
    }

    .vue_label .vue_label_right #label_right .vue_label,
    .vue_label .vue_label_left #label_left .vue_label {
        height: 8%;
        width: 100%;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: #ccc;
        font-family: '华文楷体'
    }

    .vue_label .vue_label_right #label_right #huak2,
    .vue_label .vue_label_left #label_left #huak1 {
        height: 92%;
        width: 100%;
        background: none;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow: scroll;
    }

    .vue_label .vue_label_right #label_right #huak2 {
        height: 100%;

    }

    .vue_label .vue_label_right .label_right ul,
    .vue_label .vue_label_left .label_left ul {
        height: 100%;
        width: 90%;
        background: none;
    }

    .vue_label .vue_label_right .label_right ul li,
    .vue_label .vue_label_left .label_left ul li {
        min-height: 60px;
        width: 100%;
        background: none;
        list-style: none;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
        padding-bottom: 15px;
        margin-bottom: 15px;
    }

    .vue_label .vue_label_right .label_right ul li p,
    .vue_label .vue_label_left .label_left ul li p {
        height: 25px;
        width: 100%;
        background: none;
        font-size: 15px;
        color: #ffffff;
        font-family: '华文楷体';
        font-weight: 600;
        display: flex;
        justify-content: space-between;
    }

    .vue_label .vue_label_right .label_right ul li p span:nth-of-type(2),
    .vue_label .vue_label_left .label_left ul li p span:nth-of-type(2) {
        background: none;
        font-size: 14px;
        color: #ffffff;
        font-family: '华文楷体';
        line-height: 25px;
    }

    .vue_label .vue_label_right .label_right ul li div,
    .vue_label .vue_label_left .label_left ul li div {
        height: 70%;
        width: 100%;
        background: none;
        font-size: 12.5px;
        color: #ccc;
        font-family: Verdana !important;
        text-indent: 25px
    }



    /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/

    #huak2::-webkit-scrollbar,
    #huak1::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background-color: #f5f5f5;
        border-radius: 2px;
    }

    /*定义滚动条的轨道，内阴影及圆角*/

    #huak2::-webkit-scrollbar-track,
    #huak1::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    /*定义滑块，内阴影及圆角*/

    #huak2::-webkit-scrollbar-thumb,
    #huak1::-webkit-scrollbar-thumb {
        /*width: 10px;*/
        height: 20px;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #409EFF;
    }
</style>