<template>
  <svg width="1000" height="500"></svg>
</template>

<script>
  import axios from 'axios'
  import * as d3 from 'd3'
  export default {
    data() {
      return {
        value: '125.77.199.30',
        cengshu: 0,
        syData: {
          name: '饭店开发',
          children: [
            {
              name: '饭店开发',
              children: [

              ]
            },
            {
              name: '饭店开发',
              children: [

              ]
            }
          ]
        },
      }
    },
    methods: {
      // suyuanstart: function () {
      //   this.cengshu = 0;
      //   this.syData = [
      //     {
      //       name: '',
      //       children: [

      //       ]
      //     }
      //   ];
      //   ////console.log(this.syData);
      //   this.syData[0].name = this.value;
      //   this.suyuanTree(this.syData)
      //   this.drawChart()
      // },
      // suyuanTree: function (json) {
      //   let that = this;
      //   that.cengshu++;
      //   // console.log(that.cengshu)

      //   for (let n = 0; n < json.length; n++) {
      //     //console.log(that.cengshu % 20)
      //     if (that.cengshu % 20 == 0) {
      //       that.drawChart();
      //       this.spinShow = false;
      //     }
      //     if (that.cengshu == 1) {
      //       //that.suyuan();
      //       this.spinShow = false;
      //     }
      //     if (that.cengshu >= 10) {//控制层数
      //       return;
      //     } else {
      //       let i = null;
      //       i = json[n].name.split(".");
      //       i = i[i.length - 1];
      //       if (!isNaN(i)) {
      //         that.syType = 'ip'
      //       } else {
      //         that.syType = 'domain'
      //       }
      //       that.value = json[n].name;
      //       axios.get('http://192.168.10.31/kjm/index.php' + '?ctrl=originEngine&action=Search' + '&kind=' + that.syType + '&query=' + that.value + '&isFirst=' + that.isFirst)
      //         .then(res => {
      //           ////console.log(res.data.status);
      //           if (res.data.status == 200) {
      //             if (!(res.data.data instanceof Array)) {
      //               ////console.log(res.data.data)
      //               res.data.data = Object.keys(res.data.data).map(function (el) {
      //                 return res.data.data[el]
      //               })
      //               ////console.log(res.data.data)
      //             }
      //           } else if (res.data.status == 400) {
      //             res.data.data = [];
      //           }
      //           that.isFirst = '';
      //           let length = null;
      //           if (res.data.data.length > 10) {
      //             length = 10
      //           } else {
      //             length = res.data.data.length
      //           }
      //           this.obj = [];
      //           for (var i = 0; i < length; i++) {
      //             let m = null;
      //             let name = null;
      //             m = that.value.split(".");
      //             m = m[m.length - 1];
      //             if (!isNaN(m)) {
      //               name = res.data.data[i].subject
      //             } else {
      //               name = res.data.data[i].object
      //             }
      //             name = name.split("=")[1];
      //             this.obj.push({ name: name, children: [] });
      //           }

      //           json[n].children = this.obj;
      //           console.log(that.cengshu);
      //           if (that.cengshu >= 20) {//控制层数
      //             return;
      //           } else {
      //             setTimeout(function () {
      //               that.suyuanTree(json[n].children)
      //             }, 2000)
      //           }
      //           ////console.log(that.syData);
      //           // 
      //         })
      //     }
      //   }
      // },
      /* 绘制图表 */
      xuhuan() {
        this.cengshu++;
        if (this.cengshu == 2) {
          this.drawChart()
        }
        if (this.cengshu >= 3) {
          return
        } else {
          console.log(this.cengshu)
          this.xuhuan()

        }
      },
      drawChart() {
        let svg = d3.select("svg")
        //定义缩放函数  
        var zoom = d3.zoom().scaleExtent([1, 10]).on("zoom", zoomed);
        console.log(d3)
        let width = +svg.attr("width")
        let height = +svg.attr("height")
        var g = svg.append("g").attr("transform", "translate(100,0)")
          .call(zoom);

        let tree = d3.tree()
          .size([height, width - 160])

        let root = d3.hierarchy(this.syData)
        tree(root)

        var link = g.selectAll(".link")
          .data(root.descendants().slice(1))
          .enter().append("path")
          .attr("class", "link")
          .attr("d", function (d) {
            return "M" + d.y + "," + d.x
              + "C" + (d.parent.y + 100) + "," + d.x
              + " " + (d.parent.y + 100) + "," + d.parent.x
              + " " + d.parent.y + "," + d.parent.x;
          });

        let node = g.selectAll(".node")
          .data(root.descendants())
          .enter().append("g")
          .attr("class", function (d) { return "node" + (d.children ? " node--internal" : " node--leaf") })
          .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")"
          })

        node.append("circle")
          .attr("r", 2.5);

        node.append("text")
          .attr("dy", 3)
          .attr("x", function (d) { return d.children ? -8 : 8; })
          .style("text-anchor", function (d) { return d.children ? "end" : "start" })
          .text(function (d) {
            return d.data.name
          })

        svg.selectAll("text")
          .on("click", getData)
        function getData() {
          //这里我使用了jquery,dom操作感觉比较方便
          console.log($(this)[0].textContent);
        }
        function zoomed() {
          g.attr("transform", 
            "translate(" + d3.event.transform.x + ")scale(" + d3.event.transform.k + ")")
        }//d3.event.translate 是平移的坐标值，d3.event.scale 是缩放的值。  
      }
    },
    mounted() {
      this.xuhuan()
    }
  }
</script>

<style>
  .node {
    font: 12px sans-serif;
  }

  .node circle {
    fill: #999;
  }

  .node text {
    font: 10px sans-serif;
  }

  .node--internal circle {
    fill: blue;
  }

  .node--internal text {
    text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
  }

  .link {
    fill: none;
    stroke: #33dddd;
    stroke-opacity: 0.4;
    stroke-width: 1.5px;
  }
</style>