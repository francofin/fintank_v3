let ctx = document.getElementById("stock-chart").getContext("2d");


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
