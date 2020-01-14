import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-apexcharts';

  // @ViewChild('chartObj') chart: ChartComponent;
  // form: FormGroup;
  // constructor() {}

  // ngOnInit(){
  //   this.form = new FormGroup({
  //     title: new FormControl('Basic Chart'),
  //     type: new FormControl('line'),
  //     height: new FormControl(350),
  //     series: new FormArray([
  //       new FormGroup({
  //         name: new FormControl('Series'),
  //         type: new FormControl('line'),
  //         data: new FormArray([
  //           new FormControl(this.getRandomArbitrary(0, 100)),
  //           new FormControl(this.getRandomArbitrary(0, 100)),
  //           new FormControl(this.getRandomArbitrary(0, 100)),
  //           new FormControl(this.getRandomArbitrary(0, 100))
  //         ])
  //       })
  //     ]),
  //     xaxis: new FormArray([
  //       new FormControl('Jan'),
  //       new FormControl('Feb'),
  //       new FormControl('Mar'),
  //       new FormControl('Apr')
  //     ])
  //   });
  // }

  // private getRandomArbitrary(min, max) {
  //   return Math.random() * (max - min) + min;
  // }

  // @ViewChild('chart') chart: ChartComponent;

  // form: FormGroup;

  // ngOnInit(){
  //   this.form = new FormGroup({
  //     title: new FormControl('Basic Chart'),
  //     type: new FormControl('bar'),
  //     height: new FormControl(350),
  //     series: new FormArray([
  //       new FormGroup({
  //         name: new FormControl('Series'),
  //         // need to comment the next line to make it work
  //         type: new FormControl('bar'),
  //         data: new FormArray([
  //           new FormControl(this.getRandomArbitrary(0, 100)),
  //           new FormControl(this.getRandomArbitrary(0, 100)),
  //           new FormControl(this.getRandomArbitrary(0, 100)),
  //           new FormControl(this.getRandomArbitrary(0, 100))
  //         ])
  //       })
  //     ]),
  //     xaxis: new FormArray([
  //       new FormControl('Jan'),
  //       new FormControl('Feb'),
  //       new FormControl('Mar'),
  //       new FormControl('Apr')
  //     ])
  //   });
  // }

  // private getRandomArbitrary(min, max) {
  //   return Math.random() * (max - min) + min;
  // }

  //area
  @ViewChild('chart')chartComponent: ChartComponent;
  chartData = {
    chart: {type: "area"},
    series: [
      {
        name: "Data",
        data: [
          2771.42,
          2991.21,
          3471.16,
          3681.88,
          2971.32,
          3203.96,
          2754.43,
          3174.13
        ]
      }
    ],
    xaxis: {
      type: "category",
      categories: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  };

  //line
  @ViewChild('chart1')chartComponent1: ChartComponent;
  chartData1 = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis:{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  //bar
  @ViewChild('chart2')chartComponent2: ChartComponent;
  chartData2 = {
    chart: {
      type: 'bar',
      height: 350
    },
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  };

   //Column
   @ViewChild('chart3')chartComponent3: ChartComponent;
   chartData3 = {
    chart:{
        type: 'bar',
        height: 350
    },
     series: [{
              name: 'Net Profit',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            },{
              name: 'Revenue',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            },{
              name: 'Free Cash Flow',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
     title: {
       text: 'Product Trends by Month',
       align: 'left'
     },
     dataLabels: {
       enabled: false
     },
     plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
     },
     stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
     },
     xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
     },
     yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
   };

    //Timeline
    @ViewChild('chart4')chartComponent4: ChartComponent;
    chartData4 = {
      chart: {
        height: 350,
        type: 'rangeBar'
      },
      series: [{
          data: [{
              x: 'Code',
              y: [
                new Date('2019-03-02').getTime(),
                new Date('2019-03-04').getTime()
              ]
          },{
              x: 'Test',
              y: [
                new Date('2019-03-04').getTime(),
                new Date('2019-03-08').getTime()
              ]
          },{
              x: 'Validation',
              y: [
                new Date('2019-03-08').getTime(),
                new Date('2019-03-12').getTime()
              ]
            },{
              x: 'Deployment',
              y: [
                new Date('2019-03-12').getTime(),
                new Date('2019-03-18').getTime()
              ]
            }]
      }],
      plotOptions: {
        bar: {horizontal: true}
      },
      xaxis: {type: 'datetime'}
      };


    //line-labels
    @ViewChild('chart5')chartComponent5: ChartComponent;
    chartData5 = {
      chart: {
        height: 480,
        type: 'line',
        shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
        },
        zoom: {
            enabled: false
        },
        toolbar: { // ←これを指定するとグラフの右上のメニューバーが消える
            show: false
        }
      },
      colors: ['#f63', '#69c'],
      dataLabels: {
          enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      series: [ // ←兩組數組會產生兩組折線
        {
            name: "平均最高気温 - 2017 東京",
            data: [12.1, 23.8, 29.7, 15.9]
        },
        {
            name: "平均最低気温 - 2017 東京",
            data: [2.8, 14.9, 22.3, 8.3]
        }
      ],
      title: {
        text: '東京の2017年の３か月ごと最低と最高の平均気温',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
        },
      },
      markers: {
        style: 'inverted',
        size: 6
      },
      xaxis: {
        categories: ['1〜3月', '4〜6月', '7〜9月', '10〜12月'],
        title: {
            text: '期間'
        }
      },
      yaxis: {
        title: {
            text: '気温'
        },
        min: 0,
        max: 36
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
      };


    //Donut-chart
    @ViewChild('chart6')chartComponent6: ChartComponent;
    chartData6 = {
      chart: {
        type: 'donut', // 圖表類型
      },
      labels: ['Chrome', 'Firefox', 'IE', 'Edge', 'other'],
      series: [67.9, 9.5, 7.7, 5.4, 9.5],
      responsive: [{ //斷點設定
          breakpoint: 575, //575px以下になると・・・
          options: {
              chart: {
                width: 320 //チャートは320pxにして・・・
              },
              legend: {
                position: 'bottom' //項目を下へ・・・
              }
          }
      }]
      };


    //Line-base
    @ViewChild('chart7')chartComponent7: ChartComponent;
    chartData7 = {
        chart: { // 圖表設定
          height: 380,  //高度
          type: 'line',  //  種類
          zoom: {
            enabled: false
          }
      },
      dataLabels: {
          enabled: true  //是否顯示標籤
      },
      stroke: {
          curve: 'straight'  // 曲線筆值或平滑
      },
      series: [{
          name: "15-64歳",  //  圖表系列名稱
          data: [7470, 6990, 6165, 5557, 5219, 4945]  //  圖表數值
      }],
      title: {
          text: '日本の人口推移（15〜64歳）※万人',  //  圖表名稱
          align: 'left'  //  圖表名稱位置(點)
      },
      grid: {
          row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
          },
      },
      yaxis: {  //  Y軸の設定
	      title: {
	        text: '人口（万人）'
	      }
      },
      xaxis: {  //  X軸の設定
        categories: ['2020年', '2030年', '2040年', '2050年', '2060年', '2070年'],
      }
      };

      //2axis
    @ViewChild('chart8')chartComponent8: ChartComponent;
    chartData8 = {
        chart: {
          height: 350,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#FF1654", "#247BA0"],
        series: [{
            name: "Series A",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
          },{
            name: "Series B",
            data: [20, 29, 37, 36, 44, 45, 50, 58]
          }
        ],
        stroke: {
          width: [4, 4]
        },
        plotOptions: {
          bar: {
            columnWidth: "20%"
          }
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
        },
        yaxis: [{
          title: {
            text: "Series A"
          }
        },{
          opposite: true,
          title: {
            text: "Series B"
          }
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
      };

}
