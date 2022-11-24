const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const assert = require('assert'); //add this
const { Console } = require('console');


(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  

  try {
    await driver.get('http://localhost:4200');

    //await driver.sleep(3000);

  /*  try {
      console.log("1. teszt:")
      const element = driver.findElement(By.css('h1'));
      
      //console.assert(await element.getText() === "Vélasdetlen szám:", util.format("Hiba a 1. teszten"));
      assert.strictEqual(await element.getText(), "Véletlen szám:", "Hiba a 1. teszten");
      console.log("1. ok");
    } catch(e) {
      console.error(e.message);
    }

    try {
      console.log("2. teszt:")
      const szam = isNaN(await driver.findElement(By.css('#veletlen')).getText());
      assert.strict(szam === false, "Hiba a 2. teszten");
      console.log("2. ok");
    } catch(e) {
      console.error(e.message);
    }*/

    try {
      console.log("3. teszt:")
      const usernameelement = await driver.findElement(By.css('.login')).findElement(By.name("username"));
      const passwordelement = await driver.findElement(By.css('.login')).findElement(By.name("password"));
      const submit = await driver.findElement(By.css('.login input[type=submit]'));
      await usernameelement.click();
      
      await usernameelement.sendKeys("admin");
      
      await passwordelement.sendKeys("123");
      await submit.sendKeys(Key.ENTER);
      
      //await driver.sleep(3000);
      const logoutelement = await driver.findElement(By.css('.login input[type=submit]')).getAttribute("value");
      assert.strictEqual(logoutelement, "Kijelentkezés", "Hiba a 3. teszten");
      console.log("3. ok");
    } catch(e) {
      console.error(e.message);
    }

  } finally {
    await driver.quit();
  }
})();