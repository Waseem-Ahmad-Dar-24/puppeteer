let puppeteer = require('puppeteer');
let fs = require('fs');
let credentialsFile = process.argv[2];

(async () => {
  try{
  
  let data = await fs.promises.readFile(credentialsFile);
  let {url, namePost} = JSON.parse(data);

  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
   });

 let pages = await browser.pages();
 let page = pages[0];
 
 await page.goto(url, {waitUntil: "networkidle0"});
 await page.waitForSelector("input[id=search]", {visible : true});
 await page.type("input[id=search]", namePost, {delay : 100});
 await page.keyboard.press('Enter');
 await page.waitForSelector("#contents", {visible : true});
 await page.waitForSelector('ytd-thumbnail.ytd-video-renderer', {visible : true});
let videos = await page.$$('ytd-thumbnail.ytd-video-renderer');
 await page.waitFor(2000);
  await videos[0].click();
  await page.waitForNavigation();
  await page.waitFor(8000);
  await autoScroll(page);
  await page.waitForSelector('#comments');
  await page.waitForSelector('.style-scope:nth-child(1) > #comment > #body > #main > #header > #header-author > #author-text > .style-scope')


  let comments = [];
  for (let i = 1; i < 10; i++) {
    let authorSelector = `.style-scope:nth-child(${i}) > #comment > #body > #main > #header > #header-author > #author-text > .style-scope`
    let commentSelector = `.style-scope:nth-child(${i}) > #comment > #body > #main > #expander #content-text`;
    await page.waitForSelector(commentSelector);
    await page.waitForSelector(authorSelector);
    let commentText = await getElText(page, commentSelector);
    let author = await getElText(page, authorSelector);

    if (commentText) {
      //console.log(`${author}: ${commentText}`);
      comments.push(`✔️${author}: ----->⚡${commentText}\n\n`);
    }
  }
 await fs.writeFileSync("./comments.txt", comments);
  await browser.close();
}catch(err){
  console.log(err);
}
})()

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 700;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

async function getElText(page, selector) {
	return await page.evaluate((selector) => {
		return document.querySelector(selector).innerText
	}, selector);
}
