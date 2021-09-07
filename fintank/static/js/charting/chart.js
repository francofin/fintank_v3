let ctx = document.getElementById("stock-chart").getContext("2d");
let ctx2 = document.getElementById("pe-chart").getContext("2d");


const bubbleChart = function(aboveAverageData, belowAverageData, aboveAverageLabels, belowAverageLabels, stockData, stock, chartFactor, element) {

  const data = {
      datasets:[
        {
          label:"Above Average",
          labels:aboveAverageLabels,
          data: aboveAverageData,
          borderColor: 'rgb(67, 154, 191)',
          backgroundColor: 'rgb(67, 154, 191)'
        },
        {
          label:"Below Average",
          labels:belowAverageLabels,
          data: belowAverageData,
          borderColor: 'rgb(235, 218, 143)',
          backgroundColor: 'rgb(235, 218, 143)'
        },
        {
          label:stock,
          data: stockData,
          borderColor: 'rgb(160, 240, 144)',
          backgroundColor: 'rgb(160, 240, 144)'
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
                    let label = element.dataset.labels[element.dataIndex];
                    label += " ("+ element.parsed.y + ")";
                    return label;
                }
            }
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
      }
    }
  });

  console.log(chart);

}




charting(dataDates, chartData, stock, companyName);
bubbleChart(aboveAverageData, belowAverageData, aboveAverageLabels, belowAverageLabels, stockData, stock, "P/E Comparison", ctx2);
