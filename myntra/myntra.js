
let puppeteer = require("puppeteer");
let fs = require("fs");
let credentials = process.argv[2];

(async function () {
  try{

  let data = await fs.promises.readFile(credentials);
  let {product, gender, categories, brand, color, price} = JSON.parse(data);
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
  });
  
  let tabs = await browser.pages();
  let tab = tabs[0];
  await tab.goto("https://www.myntra.com")
  await tab.waitFor(3000);
  await tab.waitForSelector(".desktop-searchBar");
  
  await tab.type(".desktop-searchBar", product, {delay: 120});
  let submitBtn = await tab.$(".desktop-submit");
  await submitBtn.click();
  await tab.waitFor(2000);
  
  
  await tab.waitForSelector(".gender-list")
  let gend = await tab.$$(".gender-list .common-customRadio.gender-label");
  if(gender == "male"){
    await gend[0].click("input[type=radio]");
    await tab.waitFor(5000);
    await tab.waitForSelector(".categories-list")
  let categ = await tab.$$(".categories-list .common-checkboxIndicator");
  if(categories == "Shirts"){
    await categ[0].click();

    //Brands
  await tab.waitFor(5000);
  await tab.waitForSelector(".brand-list")
  let brnd = await tab.$$(".brand-list .common-checkboxIndicator");
  if(brand == "Blackberrys"){
    await brnd[1].click();

//color
  await tab.waitFor(6000);
  await tab.waitForSelector(".colour-listItem")
  let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
  if(color == "Blue"){
    await colr[0].click();

//price
  await tab.waitFor(6000);
  await tab.waitForSelector(".price-list")
  let prc = await tab.$$(".price-list .price-input");
  if(price == "low"){
    await prc[0].click();

    //discount
  //   await tab.waitFor(5000);
  // if(await tab.waitForSelector(".discount-list")){
  // let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
  // await discount[0].click();
  // }

  }else if(price == "medium"){
    await prc[1].click();
  }else{
    await prc[2].click();
  }
  

  }else if(color == "White"){
    await colr[2].click();
   
//price
  await tab.waitFor(6000);
  await tab.waitForSelector(".price-list")
  let prc = await tab.$$(".price-list .price-input");
  if(price == "low"){
    await prc[0].click();
  }else if(price == "medium"){
    await prc[1].click();
  }else{
    await prc[2].click();
  }


  }else{
    //black
    await colr[4].click();

    //price
  await tab.waitFor(6000);
  await tab.waitForSelector(".price-list")
  let prc = await tab.$$(".price-list .price-input");
  if(price == "low"){
    await prc[0].click();
    await autoScroll(tab);
    await tab.screenshot({ path: 'screenshot.png', fullPage: true });

  }else if(price == "medium"){
    await prc[1].click();
  }else{
    await prc[2].click();
  }
  }
 }
 
 else if(brand == "Peter England"){
    await brnd[3].click();
//color
await tab.waitFor(6000);
await tab.waitForSelector(".colour-listItem")
let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
if(color == "Blue"){
  await colr[0].click();

//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();

  //discount
//   await tab.waitFor(5000);
// if(await tab.waitForSelector(".discount-list")){
// let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
// await discount[0].click();
// }

}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else if(color == "White"){
  await colr[1].click();
 
//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else{
  //Navy Blue 
  await colr[2].click();

  //price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}
}




  }
  
  else if(brand == "Louis Philippe"){
    await brnd[4].click();

    //color
await tab.waitFor(6000);
await tab.waitForSelector(".colour-listItem")
let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
if(color == "Blue"){
  await colr[0].click();

//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();

  //discount
//   await tab.waitFor(5000);
// if(await tab.waitForSelector(".discount-list")){
// let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
// await discount[0].click();
// }

}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else if(color == "White"){
  await colr[1].click();
 
//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else{
  //Navy Blue 
  await colr[5].click();

  //price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}
}


  }
  
  else if(brand == "Tommy Hilfiger"){
    await brnd[5].click();

      //color
await tab.waitFor(6000);
await tab.waitForSelector(".colour-listItem")
let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
if(color == "Blue"){
  await colr[0].click();

//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();

  //discount
//   await tab.waitFor(5000);
// if(await tab.waitForSelector(".discount-list")){
// let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
// await discount[0].click();
// }

}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else if(color == "White"){
  await colr[2].click();
 
//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else{
  //Navy Blue 
  await colr[1].click();

  //price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}
}
  }
  
  else{
    //brand = U.S,Polo
    await brnd[7].click();

         //color
await tab.waitFor(6000);
await tab.waitForSelector(".colour-listItem")
let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
if(color == "Blue"){
  await colr[0].click();

//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();

  //discount
//   await tab.waitFor(5000);
// if(await tab.waitForSelector(".discount-list")){
// let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
// await discount[0].click();
// }

}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else if(color == "White"){
  await colr[2].click();
 
//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else{
  //Navy Blue 
  await colr[1].click();

  //price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}
}
  }


  }else{
  //"Tshirts")
    await categ[1].click();

     //Brands
  await tab.waitFor(5000);
  await tab.waitForSelector(".brand-list")
  let brnd = await tab.$$(".brand-list .common-checkboxIndicator");
  if(brand == "Puma"){
    await brnd[1].click();

//color
  await tab.waitFor(6000);
  await tab.waitForSelector(".colour-listItem")
  let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
  if(color == "Black"){
    await colr[0].click();

//price
  await tab.waitFor(6000);
  await tab.waitForSelector(".price-list")
  let prc = await tab.$$(".price-list .price-input");
  if(price == "low"){
    await prc[0].click();

    //discount
  //   await tab.waitFor(5000);
  // if(await tab.waitForSelector(".discount-list")){
  // let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
  // await discount[0].click();
  // }

  }else if(price == "medium"){
    await prc[1].click();
  }else{
    await prc[2].click();
  }
  

  }else if(color == "White"){
    await colr[2].click();
   
//price
  await tab.waitFor(6000);
  await tab.waitForSelector(".price-list")
  let prc = await tab.$$(".price-list .price-input");
  if(price == "low"){
    await prc[0].click();
  }else if(price == "medium"){
    await prc[1].click();
  }else{
    await prc[2].click();
  }


  }else{
    //Red
    await colr[3].click();

    //price
  await tab.waitFor(6000);
  await tab.waitForSelector(".price-list")
  let prc = await tab.$$(".price-list .price-input");
  if(price == "low"){
    await prc[0].click();
    await autoScroll(tab);
    await tab.screenshot({ path: 'screenshot.png', fullPage: true });

  }else if(price == "medium"){
    await prc[1].click();
  }else{
    await prc[2].click();
  }
  }
 }
 
 else if(brand == "WROGN"){
    await brnd[4].click();
//color
await tab.waitFor(6000);
await tab.waitForSelector(".colour-listItem")
let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
if(color == "Black "){
  await colr[0].click();

//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();

  //discount
//   await tab.waitFor(5000);
// if(await tab.waitForSelector(".discount-list")){
// let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
// await discount[0].click();
// }

}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else if(color == "Maroon"){
  await colr[3].click();
 
//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else{
  //White 
  await colr[5].click();

  //price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}
}

  }
  
  else if(brand == "Jack & Jones"){
    await brnd[5].click();

    //color
await tab.waitFor(6000);
await tab.waitForSelector(".colour-listItem")
let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
if(color == "White"){
  await colr[0].click();

//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();

  //discount
//   await tab.waitFor(5000);
// if(await tab.waitForSelector(".discount-list")){
// let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
// await discount[0].click();
// }

}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else if(color == "Navy Blue"){
  await colr[1].click();
 
//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else{
  //Black
  await colr[2].click();

  //price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}
}


  }
  
  else if(brand == "Tommy Hilfiger"){
    await brnd[2].click();

      //color
await tab.waitFor(6000);
await tab.waitForSelector(".colour-listItem")
let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
if(color == "Navy Blue"){
  await colr[0].click();

//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();

  //discount
//   await tab.waitFor(5000);
// if(await tab.waitForSelector(".discount-list")){
// let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
// await discount[0].click();
// }

}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else if(color == "White"){
  await colr[1].click();
 
//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else{
  //Red
  await colr[3].click();

  //price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}
}
  }
  
  else{
    //brand = Roadster
    await brnd[0].click();

         //color
await tab.waitFor(6000);
await tab.waitForSelector(".colour-listItem")
let colr = await tab.$$(".colour-listItem .common-checkboxIndicator");
if(color == "Navy Blue"){
  await colr[0].click();

//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();

  //discount
//   await tab.waitFor(5000);
// if(await tab.waitForSelector(".discount-list")){
// let discount = await tab.$$(".discount-list .common-customRadio.vertical-filters-label");
// await discount[0].click();
// }

}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else if(color == "White"){
  await colr[4].click();
 
//price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}


}else{ 
  //Black
  await colr[1].click();

  //price
await tab.waitFor(6000);
await tab.waitForSelector(".price-list")
let prc = await tab.$$(".price-list .price-input");
if(price == "low"){
  await prc[0].click();
}else if(price == "medium"){
  await prc[1].click();
}else{
  await prc[2].click();
}
}
  }


  }


  }

  // else if(gender == "women"){
  //   await gend[1].click("input[type=radio]");
  // }
  // else if(gender == "boys"){
  //   await gend[2].click("input[type=radio]");
  // }
  // else{
  //   await gend[3].click("input[type=radio]");
  // }
  
  await tab.waitFor(2000);
  await autoScroll(tab);
  await tab.waitFor(2000);
await tab.screenshot({ path: 'screenshot.png', fullPage: true })

console.log(" PLEASE CHECK THE SCREENSHOT :)")
await browser.close();
  }catch(err){
      console.log(err);
  }
})();
async function autoScroll(page) {
    await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
        var totalHeight = 0;
        var distance = 1000;
        var timer = setInterval(() => {
          var scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
  
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 1000);
      });
    });
  }
