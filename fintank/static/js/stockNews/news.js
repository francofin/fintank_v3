let parentEl = document.getElementById('news-articles');
let parentEl2 = document.getElementById('news-articles2');
let parentEl3 = document.getElementById('news-articles3');

const createElements = function(articleImage, tagText, text, authorText, authorDate) {
  const column = document.createElement('div');
  column.classList.add("col-12", "col-md-6", "col-lg-4")

  const blog = document.createElement('div');
  blog.classList.add("single-blog-post", "post-style-3", "mt-50", "wow", "fadeInUpBig")

  const postThumb = document.createElement('div');
  postThumb.classList.add("post-thumbnail")

  const image = document.createElement('img');
  image.setAttribute("src",articleImage);

  const postContent = document.createElement('div');
  postContent.classList.add("post-content", "d-flex", "align-items-center", "justify-content-between");

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

const displayNewsArticles = function(data) {
  let newsItemsRowOne = [];
  let newsItemsRowTwo = [];
  let newsItemsRowThree = [];
  let allArticles;

  if(data.length >= 9) {
     allArticles = data.slice(0,9)
  }
  else {
     allArticles = data
  }

  console.log(allArticles)
    let i =0;
    while (i < allArticles.length){
      let image1 = allArticles[i]['image']
      let tagtext1 = allArticles[i]['symbol']
      let text1 = allArticles[i]['title']
      let author1 = allArticles[i]['site']
      let rawdate1 = allArticles[i]['publishedDate'].split(" ")
      let date1 = rawdate1[0]
      let element1 = createElements(image1, tagtext1, text1, author1, date1)
      newsItemsRowOne.push(element1);

      let image2 = allArticles[i+1]['image']
      let tagtext2 = allArticles[i+1]['symbol']
      let text2 = allArticles[i+1]['title']
      let author2 = allArticles[i+1]['site']
      let rawdate2 = allArticles[i+1]['publishedDate'].split(" ")
      let date2 = rawdate2[0]
      let element2 = createElements(image2, tagtext2, text2, author2, date2)
      newsItemsRowTwo.push(element2);

      let image3 = allArticles[i+2]['image']
      let tagtext3 = allArticles[i+2]['symbol']
      let text3 = allArticles[i+2]['title']
      let author3 = allArticles[i+2]['site']
      let rawdate3 = allArticles[i+2]['publishedDate'].split(" ")
      let date3 = rawdate3[0]
      let element3 = createElements(image3, tagtext3, text3, author3, date3)
      newsItemsRowThree.push(element3);

      i+=3;
    }

    for (let i=0; i<newsItemsRowOne.length; i++) {
      parentEl.append(newsItemsRowOne[i]);
    }

    for (let i=0; i<newsItemsRowTwo.length; i++) {
      parentEl2.append(newsItemsRowTwo[i]);
    }

    for (let i=0; i<newsItemsRowThree.length; i++) {
      parentEl3.append(newsItemsRowThree[i]);
    }

    console.log(newsItemsRowOne[0]);
    console.log(newsItemsRowTwo);
    console.log(newsItemsRowThree);



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
             if (data.length>=9) {
               displayNewsArticles(data);
             }
             else {
               // do something else
             }
         })
      }
  })
};


getNewsArticles(stock, apiKey);
