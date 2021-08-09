
const searchTerm1 = "U.S. Politics";
const searchTerm2 = "Dow Jones";
const searchTerm3 = "Economy";
const searchTerm4 = "Inflation";
const searchTerm5 = "Politics";
const searchTerm6 = "Inflation";
const searchTerm7 = "China";
const searchTerm8 = "World Politics";
const searchTerm9 = "Inflation";
const searchTerm10 = "Stock Markets";


const displayNewsArticleBing = function(search_term, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3) {
    if (search_term) {
        //news box 1
        title1.textContent = search_term.value[0].name;
        url_1.setAttribute("href", search_term.value[0].url);
        url_1.setAttribute("target", "_blank");
        des1.textContent = search_term.value[0].description;
        src1.textContent = search_term.value[0].provider[0].name;

        title2.textContent = search_term.value[1].name;
        url_2.setAttribute("href", search_term.value[1].url);
        url_2.setAttribute("target", "_blank");
        des2.textContent = search_term.value[1].description;
        src2.textContent = search_term.value[1].provider[0].name;

        title3.textContent = search_term.value[2].name;
        url_3.setAttribute("href", search_term.value[2].url);
        url_3.setAttribute("target", "_blank");
        src3.textContent = search_term.value[2].provider[0].name;
    }
};

const displayDowArticleBing = function(search_term, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3) {
    if (search_term) {
        //news box 1
        title1.textContent = search_term.value[0].name;
        url_1.setAttribute("href", search_term.value[0].url);
        url_1.setAttribute("target", "_blank");
        des1.textContent = search_term.value[0].description;
        src1.textContent = search_term.value[0].provider[0].name;

        title2.textContent = search_term.value[1].name;
        url_2.setAttribute("href", search_term.value[1].url);
        url_2.setAttribute("target", "_blank");
        des2.textContent = search_term.value[1].description;
        src2.textContent = search_term.value[1].provider[0].name;

        title3.textContent = search_term.value[2].name;
        url_3.setAttribute("href", search_term.value[2].url);
        url_3.setAttribute("target", "_blank");
        src3.textContent = search_term.value[2].provider[0].name;
    }
};

const displayEconomyArticleBing = function(search_term, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3) {
    if (search_term) {
        //news box 1
        title1.textContent = search_term.value[0].name;
        url_1.setAttribute("href", search_term.value[0].url);
        url_1.setAttribute("target", "_blank");
        des1.textContent = search_term.value[0].description;
        src1.textContent = search_term.value[0].provider[0].name;

        title2.textContent = search_term.value[1].name;
        url_2.setAttribute("href", search_term.value[1].url);
        url_2.setAttribute("target", "_blank");
        des2.textContent = search_term.value[1].description;
        src2.textContent = search_term.value[1].provider[0].name;

        title3.textContent = search_term.value[2].name;
        url_3.setAttribute("href", search_term.value[2].url);
        url_3.setAttribute("target", "_blank");
        src3.textContent = search_term.value[2].provider[0].name;
    }
};

const displayNewsCafe = function(search_term, title1, title2, title3, url_1, url_2, url_3, src1, src2, src3, img1, img2, img3) {
    if (search_term) {
        //news box 1
        title1.textContent = search_term[0].title;
        url_1.setAttribute("href", search_term[0].source_url);
        url_1.setAttribute("target", "_blank");
        img1.setAttribute("src", search_term[0].img);
        src1.textContent = search_term[0].source_name;
        //
        title2.textContent = search_term[2].title;
        url_2.setAttribute("href", search_term[2].source_url);
        url_2.setAttribute("target", "_blank");
        img2.setAttribute("src", search_term[2].img);
        src2.textContent = search_term[2].source_name;
        //
        title3.textContent = search_term[2].title;
        url_3.setAttribute("href", search_term[2].source_url);
        url_3.setAttribute("target", "_blank");
        img3.setAttribute("src", search_term[2].img);
        src3.textContent = search_term[2].source_name;
        console.log(search_term[2])
    }
};

const displayNewsImageBing = function(search_term, img1, img2, img3) {
    if (search_term) {
        //news box 1
        img1.setAttribute("src", search_term.value[0].thumbnailUrl);
        img2.setAttribute("src", search_term.value[1].thumbnailUrl);
        img3.setAttribute("src", search_term.value[2].thumbnailUrl);

    }
};

const displayDowJonesImageBing = function(search_term, img1, img2, img3) {
    if (search_term) {
        //news box 1
        img1.setAttribute("src", search_term.value[0].thumbnailUrl);
        img2.setAttribute("src", search_term.value[1].thumbnailUrl);
        img3.setAttribute("src", search_term.value[2].thumbnailUrl);

    }
};

const displayEconomicImageBing = function(search_term, img1, img2, img3) {
    if (search_term) {
        //news box 1
        img1.setAttribute("src", search_term.value[0].thumbnailUrl);
        img2.setAttribute("src", search_term.value[1].thumbnailUrl);
        img3.setAttribute("src", search_term.value[2].thumbnailUrl);

    }
};



const getRawNewsData = function(accessKey1, searchTerm, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/search?q="+searchTerm, {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayNewsArticleBing(data, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3);
         })
      }
  })
};


const getRawDowJonesData = function(accessKey1, searchTerm, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/search?q="+searchTerm, {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayDowArticleBing(data, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3);
         })
      }
  })
};

const getRawEconomyData = function(accessKey1, searchTerm, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/search?q="+searchTerm, {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayEconomyArticleBing(data, title1, title2, title3, url_1, url_2, url_3, des1, des2, src1, src2, src3);
         })
      }
  })
};

const getRawNewsImageData = function(accessKey1, searchTerm, img1, img2, img3) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+searchTerm, {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayNewsImageBing(data, img1, img2, img3);
         })
      }
  })
};

const getRawDowImageData = function(accessKey1, searchTerm, img1, img2, img3) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+searchTerm, {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayDowJonesImageBing(data, img1, img2, img3);
         })
      }
  })
};

const getRawEconomicImageData = function(accessKey1, searchTerm, img1, img2, img3) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+searchTerm, {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayEconomicImageBing(data, img1, img2, img3);
         })
      }
  })
};

const getRawNewsCafe = function(accessKey2, title1, title2, title3, url_1, url_2, url_3, src1, src2, src3, img1, img2, img3) {
  const apiUrl = fetch("https://newscafapi.p.rapidapi.com/apirapid/news/?q=news", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": accessKey2,
        "x-rapidapi-host": "newscafapi.p.rapidapi.com"
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayNewsCafe(data, title1, title2, title3, url_1, url_2, url_3, src1, src2, src3, img1, img2, img3);
         })
      }
  })
};
//
//
// const getRawTrendingData = function(accessKey1) {
//   const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/trendingtopics", {
//       "method": "GET",
//       "headers": {
//           "Ocp-Apim-Subscription-Key": accessKey,
//       }
//   })
//
//   apiUrl.then(function(response) {
//       if(response.ok) {
//          response.json().then(function(data) {
//              console.log("news", data);
//              // displayArticle(data);
//          })
//       }
//   })
// };
//

//
//
// const getRawTechNewsCafe = function(accessKey2) {
//   const apiUrl = fetch("https://newscafapi.p.rapidapi.com/apirapid/news/technology/?q=news", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": accessKey2,
//         "x-rapidapi-host": "newscafapi.p.rapidapi.com"
//       }
//   })
//
//   apiUrl.then(function(response) {
//       if(response.ok) {
//          response.json().then(function(data) {
//              console.log("news", data);
//              // displayArticle(data);
//          })
//       }
//   })
// };



const getNews = function(accessKey1, accessKey2) {
      getRawNewsData(accessKey1, searchTerm1, polnewsTitle1, polnewsTitle2, polnewsTitle3, polurl1, polurl2, polurl3, poldescription1, poldescription2, polsource1, polsource2, polsource3);
      getRawDowJonesData(accessKey1, searchTerm2, downewsTitle1, downewsTitle2, downewsTitle3, dowurl1, dowurl2, dowurl3, dowdescription1, dowdescription2, dowsource1, dowsource2, dowsource3);
      getRawEconomyData(accessKey1, searchTerm3, econewsTitle1, econewsTitle2, econewsTitle3, ecourl1, ecourl2, ecourl3, ecodescription1, ecodescription2, ecosource1, ecosource2, ecosource3);
      getRawNewsImageData(accessKey1, searchTerm1, polimage1, polimage2, polimage3);
      getRawDowImageData(accessKey1, searchTerm2, dowimage1, dowimage2, dowimage3);
      getRawEconomicImageData(accessKey1, searchTerm3, ecoimage1, ecoimage2, ecoimage3);
      getRawNewsCafe(accessKey2, trend1, trend2, trend3, trendurl1, trendurl2, trendurl3, trendsource1, trendsource2, trendsource3, trendimage1, trendimage2, trendimage3);
};



getNews(accessKey, accessKey2);
