search_term = "Lifestyle"
search_term3 = "health"



const displayTechArticleBing = function(search_term, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title15, title16, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, src10, src11,
  src12, src13, src14, src15, src16, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16) {
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

        title9.textContent = newsList[8].name;
        url9.setAttribute("href", newsList[8].url);
        url9.setAttribute("target", "_blank");
        img9.setAttribute("src", newsList[8].image.thumbnail.contentUrl);
        des9.textContent = newsList[8].description.slice(0,150)+"...";
        src9.textContent = search_term.value[8].provider[0].name;

        title10.textContent = newsList[9].name;
        url10.setAttribute("href", newsList[9].url);
        url10.setAttribute("target", "_blank");
        img10.setAttribute("src", newsList[9].image.thumbnail.contentUrl);
        src10.textContent = search_term.value[9].provider[0].name;

        title11.textContent = newsList[10].name;
        url11.setAttribute("href", newsList[10].url);
        url11.setAttribute("target", "_blank");
        img11.setAttribute("src", newsList[10].image.thumbnail.contentUrl);
        src11.textContent = search_term.value[10].provider[0].name;

        title12.textContent = newsList[11].name;
        url12.setAttribute("href", newsList[11].url);
        url12.setAttribute("target", "_blank");
        img12.setAttribute("src", newsList[11].image.thumbnail.contentUrl);
        src12.textContent = search_term.value[11].provider[0].name;

        title13.textContent = newsList[12].name;
        url13.setAttribute("href", newsList[12].url);
        url13.setAttribute("target", "_blank");
        img13.setAttribute("src", newsList[12].image.thumbnail.contentUrl);
        src13.textContent = search_term.value[12].provider[0].name;

        title14.textContent = newsList[13].name;
        url14.setAttribute("href", newsList[13].url);
        url14.setAttribute("target", "_blank");
        img14.setAttribute("src", newsList[13].image.thumbnail.contentUrl);
        src14.textContent = search_term.value[13].provider[0].name;

        title15.textContent = newsList[14].name;
        url15.setAttribute("href", newsList[14].url);
        url15.setAttribute("target", "_blank");
        img15.setAttribute("src", newsList[14].image.thumbnail.contentUrl);
        src15.textContent = search_term.value[14].provider[0].name;

        title16.textContent = newsList[15].name;
        url16.setAttribute("href", newsList[15].url);
        url16.setAttribute("target", "_blank");
        img16.setAttribute("src", newsList[15].image.thumbnail.contentUrl);
        src16.textContent = search_term.value[15].provider[0].name;

    }
};

const displayTrendingArticleBing = function(search_term, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title15, title16, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16, des1, des2, des3, des4, des5, des6, des7, des8, des9, des10, des11, des12, src1, src2, src3, src4, src5, src6, src7, src8, src9, src10, src11,
  src12, src13, src14, src15, src16, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16) {
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
        des1.textContent = newsList[0].description.slice(0,30)+"...";
        src1.textContent = search_term.value[0].provider[0].name;

        title2.textContent = newsList[1].name;
        url2.setAttribute("href", newsList[1].url);
        url2.setAttribute("target", "_blank");
        img2.setAttribute("src", newsList[1].image.thumbnail.contentUrl);
        des2.textContent = newsList[1].description.slice(0,30)+"...";
        src2.textContent = search_term.value[1].provider[0].name;

        title3.textContent = newsList[2].name;
        url3.setAttribute("href", newsList[2].url);
        url3.setAttribute("target", "_blank");
        img3.setAttribute("src", newsList[2].image.thumbnail.contentUrl);
        des3.textContent = newsList[2].description.slice(0,30)+"...";
        src3.textContent = search_term.value[2].provider[0].name;

        title4.textContent = newsList[3].name;
        url4.setAttribute("href", newsList[3].url);
        url4.setAttribute("target", "_blank");
        img4.setAttribute("src", newsList[3].image.thumbnail.contentUrl);
        des4.textContent = newsList[3].description.slice(0,30)+"...";
        src4.textContent = search_term.value[3].provider[0].name;

        title5.textContent = newsList[4].name;
        url5.setAttribute("href", newsList[4].url);
        url5.setAttribute("target", "_blank");
        img5.setAttribute("src", newsList[4].image.thumbnail.contentUrl);
        des5.textContent = newsList[4].description.slice(0,30)+"...";
        src5.textContent = search_term.value[4].provider[0].name;

        title6.textContent = newsList[5].name;
        url6.setAttribute("href", newsList[5].url);
        url6.setAttribute("target", "_blank");
        img6.setAttribute("src", newsList[5].image.thumbnail.contentUrl);
        des6.textContent = newsList[5].description.slice(0,30)+"...";
        src6.textContent = search_term.value[5].provider[0].name;

        title7.textContent = newsList[6].name;
        url7.setAttribute("href", newsList[6].url);
        url7.setAttribute("target", "_blank");
        img7.setAttribute("src", newsList[6].image.thumbnail.contentUrl);
        des7.textContent = newsList[6].description.slice(0,30)+"...";
        src7.textContent = search_term.value[6].provider[0].name;

        title8.textContent = newsList[7].name;
        url8.setAttribute("href", newsList[7].url);
        url8.setAttribute("target", "_blank");
        img8.setAttribute("src", newsList[7].image.thumbnail.contentUrl);
        des8.textContent = newsList[7].description.slice(0,30)+"...";
        src8.textContent = search_term.value[7].provider[0].name;

        title9.textContent = newsList[8].name;
        url9.setAttribute("href", newsList[8].url);
        url9.setAttribute("target", "_blank");
        img9.setAttribute("src", newsList[8].image.thumbnail.contentUrl);
        des9.textContent = newsList[8].description.slice(0,30)+"...";
        src9.textContent = search_term.value[8].provider[0].name;

        title9.textContent = newsList[8].name;
        url9.setAttribute("href", newsList[8].url);
        url9.setAttribute("target", "_blank");
        img9.setAttribute("src", newsList[8].image.thumbnail.contentUrl);
        des9.textContent = newsList[8].description.slice(0,30)+"...";
        src9.textContent = search_term.value[8].provider[0].name;

        title10.textContent = newsList[9].name;
        url10.setAttribute("href", newsList[9].url);
        url10.setAttribute("target", "_blank");
        img10.setAttribute("src", newsList[9].image.thumbnail.contentUrl);
        des10.textContent = newsList[9].description.slice(0,30)+"...";
        src10.textContent = search_term.value[9].provider[0].name;

        title11.textContent = newsList[10].name;
        url11.setAttribute("href", newsList[10].url);
        url11.setAttribute("target", "_blank");
        img11.setAttribute("src", newsList[10].image.thumbnail.contentUrl);
        des11.textContent = newsList[10].description.slice(0,30)+"...";
        src11.textContent = search_term.value[10].provider[0].name;

        title12.textContent = newsList[11].name;
        url12.setAttribute("href", newsList[11].url);
        url12.setAttribute("target", "_blank");
        img12.setAttribute("src", newsList[11].image.thumbnail.contentUrl);
        des12.textContent = newsList[11].description.slice(0,30)+"...";
        src12.textContent = search_term.value[11].provider[0].name;

        title13.textContent = newsList[12].name;
        url13.setAttribute("href", newsList[12].url);
        url13.setAttribute("target", "_blank");
        img13.setAttribute("src", newsList[12].image.thumbnail.contentUrl);
        src13.textContent = search_term.value[12].provider[0].name;

        title14.textContent = newsList[13].name;
        url14.setAttribute("href", newsList[13].url);
        url14.setAttribute("target", "_blank");
        img14.setAttribute("src", newsList[13].image.thumbnail.contentUrl);
        src14.textContent = search_term.value[13].provider[0].name;

        title15.textContent = newsList[14].name;
        url15.setAttribute("href", newsList[14].url);
        url15.setAttribute("target", "_blank");
        img15.setAttribute("src", newsList[14].image.thumbnail.contentUrl);
        src15.textContent = search_term.value[14].provider[0].name;

        title16.textContent = newsList[15].name;
        url16.setAttribute("href", newsList[15].url);
        url16.setAttribute("target", "_blank");
        img16.setAttribute("src", newsList[15].image.thumbnail.contentUrl);
        src16.textContent = search_term.value[15].provider[0].name;

    }
};


const displaySocialArticleBing = function(search_term, title1, title2, title3, title4, title5, title6, title7, title8, title9, url1, url2, url3, url4, url5, url6, url7, url8, url9, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, img1, img2, img3, img4, img5, img6, img7, img8, img9) {
    if (search_term) {
        //news box 1

        let newsList = [];
        for (var i = 0; i<search_term.value.length; i++) {
          if (search_term.value[i].image.url) {
            newsList.push(search_term.value[i])
          }
        }

        title1.textContent = newsList[0].name;
        url1.setAttribute("href", newsList[0].webSearchUrl);
        url1.setAttribute("target", "_blank");
        img1.setAttribute("src", newsList[0].image.url);
        des1.textContent = newsList[0].query.text;
        src1.textContent = newsList[8].image.provider[0].name;

        title2.textContent = newsList[1].name;
        url2.setAttribute("href", newsList[1].webSearchUrl);
        url2.setAttribute("target", "_blank");
        img2.setAttribute("src", newsList[1].image.url);
        des2.textContent = newsList[1].query.text;
        src2.textContent = newsList[1].image.provider[0].name;

        title3.textContent = newsList[2].name;
        url3.setAttribute("href", newsList[2].webSearchUrl);
        url3.setAttribute("target", "_blank");
        img3.setAttribute("src", newsList[2].image.url);
        des3.textContent = newsList[2].query.text;
        src3.textContent = newsList[2].image.provider[0].name;

        title4.textContent = newsList[3].name;
        url4.setAttribute("href", newsList[3].webSearchUrl);
        url4.setAttribute("target", "_blank");
        img4.setAttribute("src", newsList[3].image.url);
        des4.textContent = newsList[3].query.text;
        src4.textContent = newsList[3].image.provider[0].name;

        title5.textContent = newsList[4].name;
        url5.setAttribute("href", newsList[4].webSearchUrl);
        url5.setAttribute("target", "_blank");
        img5.setAttribute("src", newsList[4].image.url);
        des5.textContent = newsList[4].query.text;
        src5.textContent = newsList[4].image.provider[0].name;

        title6.textContent = newsList[5].name;
        url6.setAttribute("href", newsList[5].webSearchUrl);
        url6.setAttribute("target", "_blank");
        img6.setAttribute("src", newsList[5].image.url);
        des6.textContent = newsList[5].query.text;
        src6.textContent = newsList[5].image.provider[0].name

        title7.textContent = newsList[6].name;
        url7.setAttribute("href", newsList[6].webSearchUrl);
        url7.setAttribute("target", "_blank");
        img7.setAttribute("src", newsList[6].image.url);
        des7.textContent = newsList[6].query.text;
        src7.textContent = newsList[7].image.provider[0].name;

        title8.textContent = newsList[7].name;
        url8.setAttribute("href", newsList[7].webSearchUrl);
        url8.setAttribute("target", "_blank");
        img8.setAttribute("src", newsList[7].image.url);
        des8.textContent = newsList[7].query.text;
        src8.textContent = newsList[7].image.provider[0].name;

        title9.textContent = newsList[8].name;
        url9.setAttribute("href", newsList[8].webSearchUrl);
        url9.setAttribute("target", "_blank");
        img9.setAttribute("src", newsList[8].image.url);
        des9.textContent = newsList[8].query.text;
        src9.textContent = newsList[8].image.provider[0].name;

    }
};





const getRawTechData = function(accessKey, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title14, title16, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, src10, src11,
  src12, src13, src14, src15, src16, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news?category=ScienceAndTechnology&count=50&mkt=en-us", {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
               displayTechArticleBing(data, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title14, title16, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, src10, src11,
                 src12, src13, src14, src15, src16, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16);
           })
        }
    })
};


const getRawsocialhData = function(accessKey, title1, title2, title3, title4, title5, title6, title7, title8, title9, url1, url2, url3, url4, url5, url6, url7, url8, url9, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, img1, img2, img3, img4, img5, img6, img7, img8, img9) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/trendingtopics?mkt=en-us", {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
           console.log("social", data);
               displaySocialArticleBing(data, title1, title2, title3, title4, title5, title6, title7, title8, title9, url1, url2, url3, url4, url5, url6, url7, url8, url9, des1, des2, des3, des4, des5, des6, des7, des8, des9, src1, src2, src3, src4, src5, src6, src7, src8, src9, img1, img2, img3, img4, img5, img6, img7, img8, img9);
           })
        }
    })
};


const getRawTrendingData = function(accessKey, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title15, title16, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16, des1, des2, des3, des4, des5, des6, des7, des8, des9, des10, des11, des12, src1, src2, src3, src4, src5, src6, src7, src8, src9, src10, src11,
  src12, src13, src14, src15, src16, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16) {
  const apiUrl = fetch("https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=&count=50&mkt=en-us", {
      "method": "GET",
      "headers": {
          "Ocp-Apim-Subscription-Key": accessKey,
      }
  })

  apiUrl.then(function(response) {
      if(response.ok) {
         response.json().then(function(data) {
               displayTrendingArticleBing(data, title1, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title15, title16, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16, des1, des2, des3, des4, des5, des6, des7, des8, des9, des10, des11, des12, src1, src2, src3, src4, src5, src6, src7, src8, src9, src10, src11,
                 src12, src13, src14, src15, src16, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16);
           })
        }
    })
};



const getNews = function(accessKey1, accessKey2) {
      getRawTechData(accessKey1, newstitle1, newstitle2, newstitle3, newstitle4, newstitle5, newstitle6, newstitle7, newstitle8, newstitle9, newstitle10, newstitle11, newstitle12, newstitle13, newstitle14, newstitle15, newstitle16,
        newsurl1, newsurl2, newsurl3, newsurl4, newsurl5, newsurl6, newsurl7, newsurl8, newsurl9, newsurl10, newsurl11, newsurl12, newsurl13, newsurl14, newsurl15, newsurl16, newsdes1, newsdes2, newsdes3, newsdes4, newsdes5, newsdes6, newsdes7, newsdes8,
        newsdes9, newssrc1, newssrc2, newssrc3, newssrc4, newssrc5, newssrc6, newssrc7, newssrc8, newssrc9, newssrc10, newssrc11, newssrc12, newssrc13, newssrc14, newssrc15, newssrc16,
        newsimg1, newsimg2, newsimg3, newsimg4, newsimg5, newsimg6, newsimg7, newsimg8, newsimg9, newsimg10, newsimg11, newsimg12, newsimg13, newsimg14, newsimg15, newsimg16);
        getRawTrendingData(accessKey1, trendtitle1, trendtitle2,trendtitle3, trendtitle4, trendtitle5, trendtitle6, trendtitle7, trendtitle8, trendtitle9, trendtitle10, trendtitle11, trendtitle12, trendtitle13, trendtitle14, trendtitle15, trendtitle16,
        trendurl1,trendurl2, trendurl3, trendurl4, trendurl5, trendurl6, trendurl7, trendurl8, trendurl9, trendurl10, trendurl11,trendurl12, trendurl13, trendurl14, trendurl15, trendurl16, trenddes1, trenddes2, trenddes3,trenddes4, trenddes5, trenddes6, trenddes7, trenddes8, trenddes9, trenddes10, trenddes11, trenddes12,
        trendsrc1, trendsrc2, trendsrc3, trendsrc4, trendsrc5, trendsrc6, trendsrc7, trendsrc8, trendsrc9, trendsrc10, trendsrc11, trendsrc12, trendsrc13, trendsrc14, trendsrc15, trendsrc16, trendimg1, trendimg2, trendimg3, trendimg4, trendimg5, trendimg6, trendimg7, trendimg8, trendimg9, trendimg10, trendimg11, trendimg12, trendimg13,
        trendimg14,trendimg15, trendimg16);
        getRawsocialhData(accessKey1, soctitle1, soctitle2, soctitle3, soctitle4, soctitle5, soctitle6, soctitle7, soctitle8, soctitle9, socurl1,socurl2, socurl3, socurl4, socurl5,socurl6, socurl7, socurl8, socurl9, socdes1,socdes1, socdes3, socdes4, socdes5, socdes6, socdes7, socdes8, socdes9,
        socsrc1, socsrc2, socsrc3, socsrc4, socsrc5, socsrc6, socsrc7, socsrc8, socsrc9, socimg1,socimg2,socimg3,socimg4, socimg5, socimg6,socimg7, socimg8, socimg9)
};


getNews(accessKey, accessKey2)
