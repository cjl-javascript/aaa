<template>
  <div class="echarts">
		 <div class="header">
      <img src="../assets/img/back.png" @click="goback" />
      <span>图表</span>
      <img src="../assets/img/like.png" />
    </div>
    <h3>Echarts</h3>
    <p>x</p>
    <p>x</p>
    <p>x</p>
    <div id="echarts" style="height:300px;width:100%"></div>
    <div id="echarts2" style="height:300px;width:100%"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts"));

    // 显示标题，图例和空的坐标轴
    myChart.setOption({
      title: {
        text: "加载中..."
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: []
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: []
        }
      ]
    });

    //读取数据
    myChart.showLoading();
    axios({
      url: "/echarts2.json"
    }).then(res => {
      myChart.hideLoading();
      myChart.setOption({
        title: {
          text: "衣服销量"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function (pos, params, el, elRect, size) {
                var obj = {top: 10};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            },
            extraCssText: 'width: 170px'
        },
        legend: {
          data: ["销量", "投诉"]
        },
        xAxis: {
          data: res.data.xAxis
        },
        yAxis: {},
        series: res.data.series
      });
    });

    myChart.on("click", params => {
      console.log("click", params.name);
      window.open(
        "https://www.baidu.com/s?wd=" + encodeURIComponent(params.name)
      );
    });

    // 基于准备好的dom，初始化echarts实例
    var myChart2 = echarts.init(document.getElementById("echarts2"));
    myChart2.setOption({
      backgroundColor: "#2c343c",

      title: {
        text: "Customized Pie",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc"
        }
      },

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 274, name: "联盟广告" },
            { value: 235, name: "视频广告" },
            { value: 400, name: "搜索引擎" }
          ].sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            normal: {
              textStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },

          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function(idx) {
            return Math.random() * 200;
          }
        }
      ]
    });
	},
	methods: {
	goback(){
		this.$router.go(-1);
	}
}

}
</script>

<style scoped>
.header {
  width: 100%;
  height: 1.33rem;
  background-color: #d43d3d;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
}
.header img {
  width: 25px;
  height: 25px;
  padding: 0 0.19rem;
}
</style>

