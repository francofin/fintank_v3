let parentEl = document.getElementById('news-articles');

const createElements = function(data, articleImage, tagText, text, authorText, authorDate) {
  const column = document.createElement('div');
  column.classList.add("col-12", "col-md-6", "col-lg-4")

  const blog = document.createElement('div');
  blog.classList.add("single-blog-post", "post-style-3", "mt-50", "wow fadeInUpBig")

  const postThumb = document.createElement('div');
  postThumb.classList.add("post-thumbnail")

  const image = document.createElement('img');
  image.setAttribute("src",articleImage);

  const postContent = document.createElement('div');
  postContent.ClassList.add("post-content", "d-flex", "align-items-center", "justify-content-between");

  const postTag = document.createElement('div');
  postTag.classList.add("post-tag");
  postTag.innerText = tagText;

  const headline = document.createElement('a');
  headline.classList.add("headline");
  headline.innerText = text;

  const postMeta = document.createElement('div');
  postMeta.classList.add("post-meta");

  const metaText = document.createElement('p');
  const metaAuthor = document.createElement('a');
  metaAuthor.classList.add("post-author");
  metaAuthor.innerText = authorText;

  const metaDate = document.createElement('a');
  metaDate.classList.add("post-date");
  metaDate.innertext = authorDate;

  metaText.append(metaAuthor);
  metaText.append(metaDate);

  postMeta.append(metaText);

  postContent.append(postTag);
  postContent.append(headline);
  postContent.append(postMeta);

  postThumb.append(image);
  postThumb.append(postContent);

  blog.append(postThumb);
  column.append(blog);


  return column;

};

const displayNewsArticles = funtion(parentNode, data) {
  let newsItemsRowOne = [];

  if(data.length > 9) {
    let allArticles = data[0:9]
  }
  else {
    let allArticles = data
  }

    for (var i=0; i<allArticles.length; i++) {
      createElements()
    }

}

const getNewsArticles = function(stock, apiKey) {
  if (stock.includes(".")) {
    let stockData = stock.split(".")
    let stockName = stockData[0]
    console.log(stockName)

  }
  else {
    let stockName = stock
  }

  const apiUrl = fetch("https://fmpcloud.io/api/v3/stock_news?tickers="+stockName+"&limit=100&apikey="+apiKey, {
    "method": "GET",
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             console.log("fmp", data);
         })
      }
  })
};


getNewsArticles(stock, apiKey);
