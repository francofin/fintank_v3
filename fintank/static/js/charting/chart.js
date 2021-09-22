let ctx = document.getElementById("stock-chart").getContext("2d");
let ctx2 = document.getElementById("pe-chart").getContext("2d");
let ctx3 = document.getElementById("ma-chart").getContext("2d");
let ctx4 = document.getElementById("beta-chart").getContext("2d");
let ctx5 = document.getElementById("div-chart").getContext("2d");
let ctx6 = document.getElementById("mcap-chart").getContext("2d");
let ctx7 = document.getElementById("price-chart").getContext("2d");
let ctx8 = document.getElementById("ratings-historical-chart").getContext("2d");

const bubbleChart = function(aboveAverageData, belowAverageData, aboveAverageLabels, belowAverageLabels, stockData, stock, chartFactor, element) {

  const data = {
      datasets:[
        {
          label:"Above Average",
          labels:aboveAverageLabels,
          data: aboveAverageData,
          borderColor: 'rgb(67, 154, 191)',
          backgroundColor: 'rgb(67, 154, 191)',
          pointRadius: 5
        },
        {
          label:"Below Average",
          labels:belowAverageLabels,
          data: belowAverageData,
          borderColor: 'rgb(235, 218, 143)',
          backgroundColor: 'rgb(235, 218, 143)',
          pointRadius: 5
        },
        {
          label:stock,
          labels:stock,
          data: stockData,
          borderColor: 'rgb(160, 240, 144)',
          backgroundColor: 'rgb(160, 240, 144)',
          pointRadius: 5
        },
      ]
  }

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
        tooltip: {
            callbacks: {
                label: function(element) {
                    // console.log(ctx);
                    if (typeof element.dataset.labels == 'string') {
                      let label = element.dataset.labels;
                      label += " ("+ element.parsed.y + ")";
                      return label;
                    }
                    else {
                      let label = element.dataset.labels[element.dataIndex];
                      label += " ("+ element.parsed.y + ")";
                      return label;
                    }
                }
            },
            plugins: {
            title: {
              display: true,
              text: companyName,
              font: {
                  family: 'Work Sans',
                  size: 90,
                  weight: 'bold',
                  lineHeight: 1.2,
                },
            },
          },
        },
        title: {
          display: true,
          text: chartFactor
        }
    }
}


  let chart = new Chart(element, {
    type: "scatter",
    data: data,
    options: options,
  });

console.log(element);

}

const barChartHistroical = function(ratings, stock, element) {

  const data = {
    labels: ['Strong Buy', 'Buy', 'Hold', 'Sell', 'Strong Sell'],
    datasets: [
      {
        label: "Analyst Recommendations for " + stock,
        data: ratings,
        backgroundColor: [
          'rgba(26, 176, 18, 0.5)',
          'rgba(18, 176, 147, 0.5)',
          'rgba(13, 67, 214, 0.5)',
          'rgba(102, 100, 96, 0.5)',
          'rgba(214, 13, 30, 0.5)'
        ],
        borderColor: [
          'rgba(26, 176, 18, 0.5)',
          'rgba(18, 176, 147, 0.5)',
          'rgba(13, 67, 214, 0.5)',
          'rgba(102, 100, 96, 0.5)',
          'rgba(214, 13, 30, 0.5)'
        ],
        borderWidth: 1
      }
    ]
  };

  let options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

    let chart = new Chart(element, {
      type: "bar",
      data: data,
      options: options,
    });

  // console.log(element);
}

const charting = function(dataDates, chartData, stock, companyName) {
  var labels = [];
    for (let i=0; i<dataDates.length; i++) {
      labels.push(new Date(dataDates[i]));
    }

    const totalDuration = 2000;
    const delayBetweenPoints = totalDuration / dataDates.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        },
        ticks: {
                fontSize: 60
            }
      }
    };

  let chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dataDates,
      datasets: [
        {
          data: chartData,
          backgroundColor: "#79AEC8",
          borderColor: "#79AEC8",
          borderWidth: 3,
          radius: 0,
          label: stock,
        }
      ]
    },
    options: {
      animation,
    interaction: {
      intersect: false
    },
      responsive: true,
      plugins: {
      title: {
        display: true,
        text: companyName,
        font: {
            family: 'Work Sans',
            size: 35,
            weight: 'bold',
            lineHeight: 1.2,
          },
      },
    },
      scales:{
        xAxes: [{
          type: 'time',
          distribution: 'linear',
          display:false,
        }],
      },
    }
  });

  console.log(chart);

}




charting(dataDates, chartData, stock, companyName);
bubbleChart(aboveAveragePeData, belowAveragePeData, aboveAveragePeLabels, belowAveragePeLabels, stockPeData, stockPe, "P/E Comparison", ctx2);
bubbleChart(aboveAverageMaData, belowAverageMaData, aboveAverageMaLabels, belowAverageMaLabels, stockMaData, stockMa, "Momentum Comparison", ctx3);
bubbleChart(aboveAverageBetaData, belowAverageBetaData, aboveAverageBetaLabels, belowAverageBetaLabels, stockBetaData, stockBeta, "Beta Comparison", ctx4);
bubbleChart(aboveAverageDivData, belowAverageDivData, aboveAverageDivLabels, belowAverageDivLabels, stockDivData, stockDiv, "Dividend Comparison", ctx5);
bubbleChart(aboveAverageMcapData, belowAverageMcapData, aboveAverageMcapLabels, belowAverageMcapLabels, stockMcapData, stockMcap, "Market Cap Comparison", ctx6);
bubbleChart(aboveAveragePriceData, belowAveragePriceData, aboveAveragePriceLabels, belowAveragePriceLabels, stockPriceData, stockPrice, "Price Comparison", ctx7);
barChartHistroical(historicalRatings, stockName, ctx8)
