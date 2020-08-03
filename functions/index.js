const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const cheerio = require("cheerio");
const getUrls = require("get-urls");
const fetch = require("node-fetch");

const scrapeMetatags = (text) => {
  const urls = Array.from(getUrls(text));

  const requests = urls.map(async (url) => {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    const getMetatag = (name) =>
      $(`meta[name=${name}]`).attr("content") ||
      $(`meta[name="og:${name}"]`).attr("content") ||
      $(`meta[name="twitter:${name}"]`).attr("content");

    return {
      url,
      title: $("title").first().text(),
      favicon: $('link[rel="shortcut icon"]').attr("href"),
      description: getMetatag("description"),
      image: getMetatag("image"),
      author: getMetatag("author"),
    };
  });
  return Promise.all(requests);
};

{
  /**
//                                                  database.ref is a db reference
//                                              functions.database.ref('/messages').onWrite  aka trigger the 'database.ref'  cloud-fn() onWrite 
//exports.cloudfunctionname aka scraper         function.https.onRequest                     aka trigger the 'https'         cloud-fn() onRequest*/
}
exports.scraper = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const body = JSON.parse(request.body);
    const data = await scrapeMetatags(body.text);

    response.json({ data });
  });
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
