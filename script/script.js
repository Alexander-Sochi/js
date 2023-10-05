
      
        var options = {
            series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43, 21, 49]
          }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27, 33, 12]
          }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14, 15, 13]
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
            categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
              '2012 Q3', '2012 Q4'
            ],
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "diagonal1",
              shadeIntensity: 0.6,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50,75, 100],
              colorStops: [ 
                [
                  {
                    offset: 0,
                    color: '#eee',
                    opacity: 1
                  },
                  {
                    offset: 0.6,
                    color: 'green',
                    opacity: 50
                  },
                  {
                    offset: 100,
                    color: 'red',
                    opacity: 1
                  }
                ],
                [
                  {
                    offset: 0,
                    color: '#999',
                    opacity: 1
                  },
                  {
                    offset: 50,
                    color: 'blue',
                    opacity: 0.75
                  },
                  {
                    offset: 100,
                    color: '#ddd',
                    opacity: 1
                  }
                ]
              ]
            }
          },
          legend: {
            position: 'top',
            offsetX: -300,
            offsetY: 0
          },
          };
  
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();