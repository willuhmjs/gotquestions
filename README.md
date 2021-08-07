# gotquestions
<div>
  <img src="https://img.shields.io/github/license/willuhm-js/gotquestions?style=for-the-badge"/>
  <img src="https://img.shields.io/npm/v/gotquestions?style=for-the-badge" />
</div>
<br>
gotquestions is a package designed to scrape the gotquestions.org api

```js
const gq = require("gotquestions");
(async () => {
  await gq.fetchDataByQuery("Jesus");
  /*
  {
    error: false,
    articleTitle: "How many prophecies did Jesus fulfill? | GotQuestions.org",
    articleBody: "...",
    url: "..."
  }
  */
})();
```

## Installation
```
npm install gotquestions
```

## Documentation
### Error Handling
All errors return the following object
```js
{
  error: true,
  errorStack: "..."
}
```

### gq.fetchDataByURL(url)
```js
await gq.fetchDataByURL("https://www.gotquestions.org/prophecies-of-Jesus.html");
/*
{
  error: false,
  articleTitle: "How many prophecies did Jesus fulfill? | GotQuestions.org",
  articleBody: "...",
  url: "..."
}
*/
```

### gq.fetchDataByQuery(query, index)
```js
await gq.fetchDataByQuery("Jesus", 0);
/*
{
  error: false,
  articleTitle: "How many prophecies did Jesus fulfill? | GotQuestions.org",
  articleBody: "..."
}
*/
```

### gq.search(query)
```js
await gq.search("Jesus")
/* 
{ 
  error: false,
  queryResults: [
    {
      articleTitle: "How many prophecies did Jesus fulfill?",
      url: "https://www.gotquestions.org/prophecies-of-Jesus.html"
    },
    ...
  ]
}
*/
```

## License
**gotquestions** is licensed under the [MIT License](https://github.com/willuhm-js/gotquestions/blob/master/LICENSE).
