const fs = require("fs");

(async () => {
  const gotquestions = require("./src");
 // const data = await gotquestions.fetchDataByUrl("https://www.gotquestions.org/buddhism.html");
  //console.log(data.error);
  const data = await gotquestions.fetchDataByQuery("Jerereresus");
  console.log(data);
 // const data2 = await gotquestions.search("o204t042i0ghism");
  //console.log(data2)
  //console.log(aTag);
  /*let aTag = data2(".result_title").children()[1];

  console.log(aTag.attribs.href)*/
  //console.log(data2);
  //fs.writeFileSync("GottHilfMirBitte.txt", data2.html());
/*
  const data3 = await gotquestions.fetchDataByUrl(data2[0].href);
  console.log(data3)
*/
//console.log(await gotquestions.fetchDataByQuery("buddhism", 4))
})();