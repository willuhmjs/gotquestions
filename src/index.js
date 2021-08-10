const cheerio = require("cheerio");
const fetch = require("node-fetch");

function throwError(errorStack) {
  const errorBool = true;
  return {
    error: errorBool,
    errorStack
  }
}

module.exports.fetchDataByUrl = async (url) => {
  try {
    const res = await fetch(url)
    const text = await res.text();
    const $ = cheerio.load(text);

    const articleTitle = $("span[itemprop='name headline']").text()
    const articleBody = $("div[itemprop='articleBody']").text().split("Answer\n")[1];

    if (articleTitle === "Error Page") return throwError("404: Page not found");

    return {
      error: false,
      articleTitle,
      articleBody,
      url
    };
  } catch (errorStack) {
    return throwError(errorStack);
  }
};

module.exports.search = async (query) => {
  try {
    const res = await fetch(`https://www.gotquestions.org/search.php?zoom_query=${query}`);
    const text = await res.text();
    const $ = cheerio.load(text);
    const tag = $(".result_block");
    const end = [];
    for (let i = 0; i < tag.length; i++) {
      end.push({
        articleTitle: await tag["" + i].children[0].children[2].children[0].data,
        url: tag["" + i].children[0].children[2].attribs.href
      })
    }
    return {
      error: false,
      queryResults: end
    };
  } catch (errorStack) {
    return throwError(errorStack);
  }
}

module.exports.fetchDataByQuery = async (query, index = 0) => {
  try {
    const { queryResults } = await this.search(query);
    const searchData = await this.fetchDataByUrl(queryResults[index]).url;
    return searchData;
  } catch (errorStack) {
    return throwError(errorStack);
  }
}
