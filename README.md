# gotquestions
gotquestions is a package designed to scrape the [gotquestions.org](https://www.gotquestions.org) api

```js
const gq = require("gotquestions");
(async () => {
  await gq.fetchDataByQuery("Jesus");
  /*
  {
    error: false,
    articleTitle: "How many prophecies did Jesus fulfill? | GotQuestions.org"
    articleBody: "..."
  }
*/
})()
```

## Installation
```
npm install gotquestions
```

## Documentation
### Error Handling
All errors return the following object
```json
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
  articleTitle: "How many prophecies did Jesus fulfill? | GotQuestions.org"
  articleBody: "..."
}
*/
```

### gq.fetchDataByQuery(query, index)
```js
await gq.fetchDataByQuery("Jesus", 0);
/*
{
  error: false,
  articleTitle: "How many prophecies did Jesus fulfill? | GotQuestions.org"
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
      title: "How many prophecies did Jesus fulfill?"
      href: "https://www.gotquestions.org/prophecies-of-Jesus.html"
    },
    ...
  ]
}
*/
```

## License
**gotquestions** is licensed under the [MIT License](https://github.com/willuhm-js/gotquestions/blob/master/LICENSE).