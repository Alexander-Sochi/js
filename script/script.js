var options = {
  series: [{
    name: 'PRODUCT 1',
    data: [44, 55, 41, 37, 22, 43, 40]
  }, {
    name: 'PRODUCT 2',
    data: [53,1, 33, 52, 50, 43, 32]
  }, {
    name: 'PRODUCT 3',
    data: [43,55,43, 37, 33, 43, 29]
  }, {
    name: 'PRODUCT 4',
    data: [53,32, 33, 52, 43, 43, 32]
  }, {
    name: 'PRODUCT 5',
    data: [44, 55, 41, 37, 22, 43, 40]
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,

  },
  colors: ['#212', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
  // line
  // area
  // bar
  // pie
  // donut
  // radialBar
  // scatter
  // bubble
  // heatmap
  // candlestick
  // boxPlot
  // radar
  // polarArea
  // rangeBar
  // rangeArea
  // treemap

  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'top',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  xaxis: {
    labels: {
      formatter: function (value) {
        return value;
      }
    }
  },
  xaxis: {
    categories: ['208к', '209к', '210к', '211к', '212к', '213к',
      '214к',
    ],
  },
  // fill: {
  //   type: 'gradient',
  //   gradient: {
  //     shade: 'light',
  //     type: "diagonal1",
  //     shadeIntensity: 0.6,
  //     gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
  //     inverseColors: true,
  //     opacityFrom: 1,
  //     opacityTo: 1,
  //     stops: [0, 50,75, 100],
  //     colorStops: [ 
  //       [
  //         {
  //           offset: 0,
  //           color: '#eee',
  //           opacity: 1
  //         },
  //         {
  //           offset: 0.6,
  //           color: 'green',
  //           opacity: 50
  //         },
  //         {
  //           offset: 100,
  //           color: 'red',
  //           opacity: 1
  //         }
  //       ],
  //       [
  //         {
  //           offset: 0,
  //           color: '#999',
  //           opacity: 1
  //         },
  //         {
  //           offset: 50,
  //           color: 'blue',
  //           opacity: 0.75
  //         },
  //         {
  //           offset: 100,
  //           color: '#ddd',
  //           opacity: 1
  //         }
  //       ]
  //     ]
  //   }
  // },
  legend: {
    position: 'top',
    offsetX: -200,
    offsetY: 0
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();