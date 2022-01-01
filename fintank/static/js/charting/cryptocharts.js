let ctx = document.getElementById("crypto-chart").getContext("2d");
let ctx1 = document.getElementById("moving-avg-chart").getContext("2d");
let shortWindow = document.getElementById('short-window');
let longWindow = document.getElementById('long-window');
// const recalcButton = document.getElementById('re-calculate');

const movingAverage = function(prices, dates, windowOne, windowTwo) {
  if (!prices || prices.length < windowOne) {
    return [];
  }

  let index = windowOne - 1;
  let index2 = windowTwo - 1;
  const length = prices.length + 1;

  const simpleMovingAveragesWindowOne = [];
  const simpleMovingAveragesWindowTwo = [];

  while (++index < length) {
    const windowSlice = prices.slice(index - windowOne, index);
    const sum = windowSlice.reduce((prev, curr) => prev + curr, 0);
    simpleMovingAveragesWindowOne.push(sum / windowOne);
  }

  while (++index2 < length) {
    const windowSlice = prices.slice(index2 - windowTwo, index2);
    const sum = windowSlice.reduce((prev, curr) => prev + curr, 0);
    simpleMovingAveragesWindowTwo.push(sum / windowTwo);
  }

  let chartDates = dates.slice(windowTwo, prices.length);

  console.log(simpleMovingAveragesWindowOne);
  console.log(simpleMovingAveragesWindowTwo);
  console.log(chartDates);

  return {
    windowOneData: simpleMovingAveragesWindowOne,
    windowTwoData: simpleMovingAveragesWindowTwo,
    myChartDates: chartDates
  };
}


const cryptoCharting = function(dataDates, chartData, crypto, cryptoName) {
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
          label: crypto,
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
        text: cryptoName,
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

const movingAverageCryptoCharting = function(dataDates, chartData, cryptoName) {

  // if(shortWindow !== ""){
  //   let windowOne = parseInt(shortWindow);
  // }
  // else {
     windowOne = 50;;
  // }

  // if(longWindow !== ""){
  //   let windowTwo = parseInt(longWindow);
  // }
  // else {
     windowTwo = 100;
  // }

  let movingAverages = movingAverage(chartData, dataDates, windowOne, windowTwo);
  let movingAverageFirst = movingAverages.windowOneData;
  let movingAveragesSecond = movingAverages.windowTwoData;
  let chartDates = movingAverages.myChartDates;

  var labels = [];
    for (let i=0; i<chartDates.length; i++) {
      labels.push(new Date(chartDates[i]));
    }

    const totalDuration = 2000;
    const delayBetweenPoints = totalDuration / chartDates.length;
    const previousY = (ctx1) => ctx1.index === 0 ? ctx1.chart.scales.y.getPixelForValue(100) : ctx1.chart.getDatasetMeta(ctx1.datasetIndex).data[ctx1.index - 1].getProps(['y'], true).y;
    const animation = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx1) {
          if (ctx1.type !== 'data' || ctx1.xStarted) {
            return 0;
          }
          ctx1.xStarted = true;
          return ctx1.index * delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx1) {
          if (ctx1.type !== 'data' || ctx1.yStarted) {
            return 0;
          }
          ctx1.yStarted = true;
          return ctx1.index * delayBetweenPoints;
        },
        ticks: {
                fontSize: 60
            }
      }
    };

  let config = {
    type: "line",
    data: {
      labels: chartDates,
      datasets: [
        {
          label: windowOne.toString() + " Moving Average",
          data: movingAverageFirst,
          backgroundColor: "#2163d5",
          borderColor: "#2163d5",
          borderWidth: 3,
          radius: 0,
        },
        {
          label: windowTwo.toString() + " Moving Average",
          data: movingAveragesSecond,
          backgroundColor: "#d52121",
          borderColor: "#d52121",
          borderWidth: 3,
          radius: 0,
        },

      ]
    },
    options: {
      // animation,
    interaction: {
      intersect: false
    },
      responsive: true,
      plugins: {
      title: {
        display: true,
        text: cryptoName,
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
  };

  let chart = new Chart(ctx1, config);

  (function(){ // self calling function replaces document.ready()

//adding event listenr to button
document.querySelector('#re-calculate').addEventListener('click',function(){
  let windowOne = shortWindow.value;
  console.log(parseInt(windowOne));
  let windowTwo = longWindow.value;
  movingAverages = movingAverage(chartData, dataDates, windowOne, windowTwo);
  movingAverageFirst = movingAverages.windowOneData;
  movingAveragesSecond = movingAverages.windowTwoData;
  chartDates = movingAverages.myChartDates;
  chart.data.labels = chartDates;
  chart.data.datasets[0].data = movingAverageFirst;
  chart.data.datasets[0].label = windowOne+ " Moving Average";
  chart.data.datasets[1].data = movingAveragesSecond;
  chart.data.datasets[1].label = windowTwo+ " Moving Average";

  chart.update();
	// chart = new Chart(ctx1, config);
  });
})();

  console.log(chart);
}

cryptoCharting(cryptoDates, cryptoData, cryptoSymbol, cryptoFullName);
movingAverageCryptoCharting(allDates, allPrices, cryptoFullName);
