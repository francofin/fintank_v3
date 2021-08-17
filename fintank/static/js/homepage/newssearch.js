const searchTerm1 = "World Issues";
const searchTerm2 = "Dow Jones";
const searchTerm3 = "Economy";
const searchTerm4 = "Inflation";
const searchTerm5 = "Politics";
const searchTerm6 = "Inflation";
const searchTerm7 = "China";
const searchTerm8 = "World Politics";
const searchTerm9 = "Inflation";
const searchTerm10 = "Stock Markets";


const displayNewsArticleBing = function(search_term, title1, title2, title3, title4, title5, title6, title7, title8, title9, url1, url2, url3, url4, url5, url6, url7, url8, url9, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, img1, img2, img3, img4, img5, img6, img7, img8, img9) {
    if (search_term) {
        //news box 1

        let newsList = [];
        for (var i = 0; i<search_term.value.length; i++) {
          if (search_term.value[i].image) {
            newsList.push(search_term.value[i])
          }
        }

        title1.textContent = newsList[0].name;
        url1.setAttribute("href", newsList[0].url);
        url1.setAttribute("target", "_blank");
        img1.setAttribute("src", newsList[0].image.thumbnail.contentUrl);
        des1.textContent = newsList[0].description.slice(0,150)+"...";
        src1.textContent = search_term.value[0].provider[0].name;

        title2.textContent = newsList[1].name;
        url2.setAttribute("href", newsList[1].url);
        url2.setAttribute("target", "_blank");
        img2.setAttribute("src", newsList[1].image.thumbnail.contentUrl);
        des2.textContent = newsList[1].description.slice(0,150)+"...";
        src2.textContent = search_term.value[1].provider[0].name;

        title3.textContent = newsList[2].name;
        url3.setAttribute("href", newsList[2].url);
        url3.setAttribute("target", "_blank");
        img3.setAttribute("src", newsList[2].image.thumbnail.contentUrl);
        des3.textContent = newsList[2].description.slice(0,150)+"...";
        src3.textContent = search_term.value[2].provider[0].name;

        title4.textContent = newsList[3].name;
        url4.setAttribute("href", newsList[3].url);
        url4.setAttribute("target", "_blank");
        img4.setAttribute("src", newsList[3].image.thumbnail.contentUrl);
        des4.textContent = newsList[3].description.slice(0,150)+"...";
        src4.textContent = search_term.value[3].provider[0].name;

        title5.textContent = newsList[4].name;
        url5.setAttribute("href", newsList[4].url);
        url5.setAttribute("target", "_blank");
        img5.setAttribute("src", newsList[4].image.thumbnail.contentUrl);
        des5.textContent = newsList[4].description.slice(0,150)+"...";
        src5.textContent = search_term.value[4].provider[0].name;

        title6.textContent = newsList[5].name;
        url6.setAttribute("href", newsList[5].url);
        url6.setAttribute("target", "_blank");
        img6.setAttribute("src", newsList[5].image.thumbnail.contentUrl);
        des6.textContent = newsList[5].description.slice(0,150)+"...";
        src6.textContent = search_term.value[5].provider[0].name;

        title7.textContent = newsList[6].name;
        url7.setAttribute("href", newsList[6].url);
        url7.setAttribute("target", "_blank");
        img7.setAttribute("src", newsList[6].image.thumbnail.contentUrl);
        des7.textContent = newsList[6].description.slice(0,150)+"...";
        src7.textContent = search_term.value[6].provider[0].name;

        title8.textContent = newsList[7].name;
        url8.setAttribute("href", newsList[7].url);
        url8.setAttribute("target", "_blank");
        img8.setAttribute("src", newsList[7].image.thumbnail.contentUrl);
        des8.textContent = newsList[7].description.slice(0,150)+"...";
        src8.textContent = search_term.value[7].provider[0].name;

        title9.textContent = newsList[8].name;
        url9.setAttribute("href", newsList[8].url);
        url9.setAttribute("target", "_blank");
        img9.setAttribute("src", newsList[8].image.thumbnail.contentUrl);
        des9.textContent = newsList[8].description.slice(0,150)+"...";
        src9.textContent = search_term.value[8].provider[0].name;


        console.log("news article", newsList[0].description.slice(0,300));
    }
};


const displayStockArticleFmp = function(search_term, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7, symbol8, symbol9, symbol10, symbol11, symbol12, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, des1, des2, des3, des4, des5, des6, des7, des8, des9, des10, des11, des12, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12) {
    if (search_term) {
        //news box 1

        let newsList = [];
        for (var i = 0; i<search_term.length; i++) {
          if (search_term[i].image) {
            newsList.push(search_term[i])
          }
        }

        title1.textContent = newsList[0].title.slice(0,70)+" ...";
        url1.setAttribute("href", newsList[0].url);
        url1.setAttribute("target", "_blank");
        img1.setAttribute("src", newsList[0].image);
        des1.textContent = newsList[0].site;
        symbol1.textContent = newsList[0].symbol;
        //
        title2.textContent = newsList[1].title.slice(0,70)+" ...";
        url2.setAttribute("href", newsList[1].url);
        url2.setAttribute("target", "_blank");
        img2.setAttribute("src", newsList[1].image);
        des2.textContent = newsList[1].site;
        symbol2.textContent = newsList[1].symbol;
        //
        title3.textContent = newsList[2].title.slice(0,70)+" ...";
        url3.setAttribute("href", newsList[2].url);
        url3.setAttribute("target", "_blank");
        img3.setAttribute("src", newsList[2].image);
        des3.textContent = newsList[2].site;
        symbol3.textContent = newsList[2].symbol;
        //
        title4.textContent = newsList[3].title.slice(0,70)+" ...";
        url4.setAttribute("href", newsList[3].url);
        url4.setAttribute("target", "_blank");
        img4.setAttribute("src", newsList[3].image);
        des4.textContent = newsList[3].site;
        symbol4.textContent = newsList[3].symbol;
        //
        title5.textContent = newsList[4].title.slice(0,70)+" ...";
        url5.setAttribute("href", newsList[4].url);
        url5.setAttribute("target", "_blank");
        img5.setAttribute("src", newsList[4].image);
        des5.textContent = newsList[4].site;
        symbol5.textContent = newsList[4].symbol;
        //
        title6.textContent = newsList[5].title.slice(0,70)+" ...";
        url6.setAttribute("href", newsList[5].url);
        url6.setAttribute("target", "_blank");
        img6.setAttribute("src", newsList[5].image);
        des6.textContent = newsList[5].site;
        symbol6.textContent = newsList[5].symbol;
        //
        title7.textContent = newsList[6].title.slice(0,70)+" ...";
        url7.setAttribute("href", newsList[6].url);
        url7.setAttribute("target", "_blank");
        img7.setAttribute("src", newsList[6].image);
        des7.textContent = newsList[6].site;
        symbol7.textContent = newsList[6].symbol;
        //
        title8.textContent = newsList[7].title.slice(0,70)+" ...";
        url8.setAttribute("href", newsList[7].url);
        url8.setAttribute("target", "_blank");
        img8.setAttribute("src", newsList[7].image);
        des8.textContent = newsList[7].site;
        symbol8.textContent = newsList[7].symbol;
        //
        title9.textContent = newsList[8].title.slice(0,70)+" ...";
        url9.setAttribute("href", newsList[8].url);
        url9.setAttribute("target", "_blank");
        img9.setAttribute("src", newsList[8].image);
        des9.textContent = newsList[8].site;
        symbol9.textContent = newsList[8].symbol2

        title10.textContent = newsList[9].title.slice(0,70)+" ...";
        url10.setAttribute("href", newsList[9].url);
        url10.setAttribute("target", "_blank");
        img10.setAttribute("src", newsList[9].image);
        des10.textContent = newsList[9].site
        symbol10.textContent = newsList[9].symbol

        title11.textContent = newsList[10].title.slice(0,70)+" ...";
        url11.setAttribute("href", newsList[10].url);
        url11.setAttribute("target", "_blank");
        img11.setAttribute("src", newsList[10].image);
        des11.textContent = newsList[10].site;
        symbol11.textContent = newsList[10].symbol

        title12.textContent = newsList[11].title.slice(0,70)+" ...";
        url12.setAttribute("href", newsList[11].url);
        url12.setAttribute("target", "_blank");
        img12.setAttribute("src", newsList[11].image);
        des12.textContent = newsList[11].site;
        symbol12.textContent = newsList[11].symbol


        // console.log("news article", newsList[0].image);
    }
};


const displayEconomyArticleBing = function(search_term, title1, title2, title3,title4, title5, title6, title7, url_1, url_2, url_3, url_4, url_5, url_6, url_7, src1, src2, src3, src4, src5, src6, src7) {
    if (search_term) {
        //news box 1
        title1.textContent = search_term.value[0].name;
        url_1.setAttribute("href", search_term.value[0].url);
        url_1.setAttribute("target", "_blank");
        src1.textContent = search_term.value[0].provider[0].name;

        title2.textContent = search_term.value[1].name;
        url_2.setAttribute("href", search_term.value[1].url);
        url_2.setAttribute("target", "_blank");
        src2.textContent = search_term.value[1].provider[0].name;

        title3.textContent = search_term.value[2].name;
        url_3.setAttribute("href", search_term.value[2].url);
        url_3.setAttribute("target", "_blank");
        src3.textContent = search_term.value[2].provider[0].name;

        title4.textContent = search_term.value[3].name;
        url_4.setAttribute("href", search_term.value[3].url);
        url_4.setAttribute("target", "_blank");
        src4.textContent = search_term.value[3].provider[0].name;

        title5.textContent = search_term.value[4].name;
        url_5.setAttribute("href", search_term.value[4].url);
        url_5.setAttribute("target", "_blank");
        src5.textContent = search_term.value[4].provider[0].name;

        title6.textContent = search_term.value[5].name;
        url_6.setAttribute("href", search_term.value[5].url);
        url_6.setAttribute("target", "_blank");
        src6.textContent = search_term.value[5].provider[0].name;

        title7.textContent = search_term.value[6].name;
        url_7.setAttribute("href", search_term.value[6].url);
        url_7.setAttribute("target", "_blank");
        src7.textContent = search_term.value[6].provider[0].name;
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
        // console.log(search_term[2])
    }
};


const displayTrendingNews = function(search_term, title1, title2, url1, url2, src1, src2, img1, img2, des1) {
    if (search_term) {
        //news box 1
        title1.textContent = search_term.value[0].name;
        url1.setAttribute("href", search_term.value[0].url);
        url1.setAttribute("target", "_blank");
        img1.setAttribute("src", search_term.value[0].image.thumbnail.contentUrl);
        src1.textContent = search_term.value[0].provider[0].name;
        des1.textContent = search_term.value[0].description;
        //
        title2.textContent = search_term.value[1].name;
        url2.setAttribute("href", search_term.value[1].url);
        url2.setAttribute("target", "_blank");
        img2.setAttribute("src", search_term.value[0].image.thumbnail.contentUrl);
        src2.textContent = search_term.value[1].provider[0].name;

        // //
        // title3.textContent = search_term[2].title;
        // url_3.setAttribute("href", search_term[2].source_url);
        // url_3.setAttribute("target", "_blank");
        // img3.setAttribute("src", search_term[2].img);
        // src3.textContent = search_term[2].source_name;
        // console.log("trending", search_term.value[1].image.thumbnail);
    }
};

// const displayNewsImageBing = function(search_term, img1, img2, img3) {
//     if (search_term) {
//         //news box 1
//         img1.setAttribute("src", search_term.value[0].thumbnailUrl);
//         img2.setAttribute("src", search_term.value[1].thumbnailUrl);
//         img3.setAttribute("src", search_term.value[2].thumbnailUrl);
//
//         console.log("images", search_term);
//
//     }
// };


const displayEconomicImageBing = function(search_term, img1, img2, img3, img4, img5, img6, img7) {
    if (search_term) {
        //news box 1
        img1.setAttribute("src", search_term.value[0].thumbnailUrl);
        img2.setAttribute("src", search_term.value[1].thumbnailUrl);
        img3.setAttribute("src", search_term.value[2].thumbnailUrl);
        img4.setAttribute("src", search_term.value[3].thumbnailUrl);
        img5.setAttribute("src", search_term.value[4].thumbnailUrl);
        img6.setAttribute("src", search_term.value[5].thumbnailUrl);
        img7.setAttribute("src", search_term.value[6].thumbnailUrl);
        console.log("ecoimg", search_term);

    }
};



const getRawNewsData = function(accessKey, title1, title2, title3, title4, title5, title6, title7, title8, title9, url1, url2, url3, url4, url5, url6, url7, url8, url9, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, img1, img2, img3, img4, img5, img6, img7, img8, img9) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=world+news&count=50&mkt=en-us", {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
               displayNewsArticleBing(data, title1, title2, title3, title4, title5, title6, title7, title8, title9, url1, url2, url3, url4, url5, url6, url7, url8, url9, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, img1, img2, img3, img4, img5, img6, img7, img8, img9);
           })
        }
    })
};


const getRawEconomyData = function(accessKey, searchTerm, search_term, title1, title2, title3,title4, title5, title6, title7, url_1, url_2, url_3, url_4, url_5, url_6, url_7, src1, src2, src3, src4, src5, src6, src7) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/search?q="+searchTerm+"&count=50&mkt=en-us", {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayEconomyArticleBing(data, search_term, title1, title2, title3,title4, title5, title6, title7, url_1, url_2, url_3, url_4, url_5, url_6, url_7, src1, src2, src3, src4, src5, src6, src7);
         })
      }
  })
};

// const getRawNewsImageData = function(accessKey, searchTerm, img1, img2, img3) {
//   const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+searchTerm, {
//       "method": "GET",
//       "headers": {
//           "Ocp-Apim-Subscription-Key": accessKey,
//       }
//   })
//
//   apiUrl.then(function(response) {
//       if(response.ok) {
//          response.json().then(function(data) {
//              displayNewsImageBing(data, img1, img2, img3);
//          })
//       }
//   })
// };

// const getRawDowImageData = function(accessKey, searchTerm, img1, img2, img3) {
//   const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+searchTerm, {
//       "method": "GET",
//       "headers": {
//           "Ocp-Apim-Subscription-Key": accessKey,
//       }
//   })
//
//   apiUrl.then(function(response) {
//       if(response.ok) {
//          response.json().then(function(data) {
//              displayDowJonesImageBing(data, img1, img2, img3);
//          })
//       }
//   })
// };

const getRawEconomicImageData = function(accessKey, searchTerm, img1, img2, img3, img4, img5, img6, img7) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+searchTerm, {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             displayEconomicImageBing(data, img1, img2, img3, img4, img5, img6, img7);
         })
      }
  })
};

const getRawNewsCafe = function(accessKey, title1, title2, title3, url_1, url_2, url_3, src1, src2, src3, img1, img2, img3) {
  const apiUrl = fetch("https://newscafapi.p.rapidapi.com/apirapid/news/world/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": accessKey,
        "x-rapidapi-host": "newscafapi.p.rapidapi.com"
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
           console.log("news cafe", data);
             displayNewsCafe(data, title1, title2, title3, url_1, url_2, url_3, src1, src2, src3, img1, img2, img3);
         })
      }
  })
};


// const getRawTrendingData = function(accessKey, title1, title2, url1, url2, src1, src2, img1, img2, des1) {
//   const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news?category=World&mkt=en-us", {
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
//              displayTrendingNews(data, title1, title2, url1, url2, src1, src2, img1, img2, des1);
//          })
//       }
//   })
// };

const getRawFmpNewsData = function(accessKey, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7, symbol8, symbol9, symbol10, symbol11, symbol12, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, des1, des2, des3, des4, des5, des6, des7, des8, des9, des10, des11, des12, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12) {
  const apiUrl = fetch("https://fmpcloud.io/api/v3/stock_news?limit=100&apikey="+accessKey, {
      "method": "GET",
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
             console.log("fmp", data[0].image);
             displayStockArticleFmp(data, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7, symbol8, symbol9, symbol10, symbol11, symbol12, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, des1, des2, des3, des4, des5, des6, des7, des8, des9, des10, des11, des12, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12);
         })
      }
  })
};
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



const getNews = function(accessKey1, accessKey2, accessKey3) {
      getRawNewsData(accessKey1, newstitle1, newstitle2, newstitle3, newstitle4, newstitle5, newstitle6, newstitle7, newstitle8, newstitle9, newsurl1, newsurl2, newsurl3, newsurl4, newsurl5, newsurl6, newsurl7, newsurl8, newsurl9, newsdes1, newsdes2, newsdes3, newsdes4, newsdes5, newsdes6, newsdes7, newsdes8,
        newsdes9, newssrc1, newssrc2, newssrc3, newssrc4, newssrc5, newssrc6, newssrc7, newssrc8, newssrc9, newsimg1, newsimg2, newsimg3, newsimg4, newsimg5, newsimg6, newsimg7, newsimg8, newsimg9);
      getRawEconomyData(accessKey1, searchTerm3, econewsTitle1, econewsTitle2, econewsTitle3, econewsTitle4, econewsTitle5, econewsTitle6, econewsTitle7, ecourl1, ecourl2, ecourl3, ecourl4, ecourl5, ecourl6, ecourl7, ecosource1, ecosource2, ecosource3, ecosource4, ecosource5, ecosource6, ecosource7);
      // getRawDowImageData(accessKey1, searchTerm2, dowimage1, dowimage2, dowimage3);
      getRawEconomicImageData(accessKey1, searchTerm3, ecoimage1, ecoimage2, ecoimage3, ecoimage4, ecoimage5, ecoimage6, ecoimage7);
      getRawNewsCafe(accessKey2, newscafe1, newscafe2, newscafe3, newscafeurl1, newscafeurl2, newscafeurl3, newscafesrc1, newscafesrc2, newscafesrc3, newscafeimg1, newscafeimg2, newscafeimg3);
      // getRawTrendingData(accessKey1, bingtrend1, bingtrend2, bingtrendurl1, bingtrendurl2, bingtrendsrc1, bingtrendsrc2, bingtrendimg1, bingtrendimg2, bingtrenddes1);
      getRawFmpNewsData(accessKey3, fmptitle1, fmptitle2, fmptitle3, fmptitle4, fmptitle5, fmptitle6, fmptitle7, fmptitle8, fmptitle9, fmptitle10, fmptitle11, fmptitle12, fmpsymbol1, fmpsymbol2, fmpsymbol3, fmpsymbol4, fmpsymbol5, fmpsymbol6, fmpsymbol7, fmpsymbol8, fmpsymbol9, fmpsymbol10, fmpsymbol11, fmpsymbol12, fmpurl1, fmpurl2, fmpurl3, fmpurl4, fmpurl5, fmpurl6, fmpurl7, fmpurl8, fmpurl9, fmpurl10, fmpurl11, fmpurl12, fmpdes1, fmpdes2, fmpdes3, fmpdes4, fmpdes5, fmpdes6, fmpdes7, fmpdes8, fmpdes9, fmpdes10, fmpdes11, fmpdes12, fmpimage1, fmpimage2, fmpimage3, fmpimage4, fmpimage5, fmpimage6, fmpimage7, fmpimage8, fmpimage9, fmpimage10, fmpimage11, fmpimage12);

};



getNews(accessKey, accessKey2, accessKey3);
