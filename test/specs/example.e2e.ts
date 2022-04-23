const expectChai = require("chai").expect;
// npm init wdio .

// npm init -y
// npm install webdriverio

// $ npm install --save-dev @wdio/cli
// $ npx wdio config --yes
// $ npx wdio run

// .node-modules/.bin/wdio config

// ან პროექტის ფოლდერში(დირექტორიაში) 🔥 npm init wdio .
// https://webdriver.io/docs/gettingstarted
// https://www.npmjs.com/package/webdriverio
// https://github.com/webdriverio/webdriverio

// run test:
// npx wdio run ./wdio.conf.js
// npx wdio run test/wdio.conf.ts
// npx wdio run wdio.conf.js
// npx wdio run wdio.conf.ts
// npm run wdio

// 🔥🔥🔥
// test suite
// test scenario
describe("simple login test", () => {
  it("should login with correct credentials", async () => {
    await browser.url("https://www.saucedemo.com/");

    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    await expect($(".title")).toBeExisting();
    await expect($(".title")).toHaveTextContaining("PRODUCTS");
  });
});

// 🔥🔥🔥
// describe("console log test suite", () => {
//   it("should console debug mode", async () => {
//     console.log("hello fro debugger");
//     await browser.debug();
//   });
// });

// 🔥🔥🔥
describe("navigate to webdriver", async () => {
  before(async () => {
    console.log("before hook");
  });
  // beforeEach(async () => {
  //   console.log("beforeEach hook");
  // });
  it("should have the right title", async () => {
    await browser.url("https://webdriver.io/");
    await expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });
  it.skip("should have the right title", async () => {
    await browser.url("https://webdriver.io/");
    await expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });
  after(async () => {
    console.log("after hook");
  });
  // afterEach(async () => {
  //   console.log("afterEach hook");
  // });
});

// 🔥🔥🔥
describe("iframe testing suite", () => {
  it("shoud open website with iframe and select iframe with id", async () => {
    await browser.url("https://the-internet.herokuapp.com/iframe");

    await expect(browser).toHaveUrl(
      "https://the-internet.herokuapp.com/iframe"
    );
    await expect(browser).toHaveTitle("The Internet");

    const h3header = await $("#content h3");
    await expect(h3header).toBeDisplayed();
    await expect(h3header).toExist();
    await expect(h3header).toHaveTextContaining(
      "An iFrame containing the TinyMCE WYSIWYG Editor"
    );

    await browser.pause(2000);
    await browser.switchToFrame(0);

    const iframParagraph = await $("p");
    await expect(iframParagraph).toBeDisplayed();
    await expect(iframParagraph).toExist();
    await iframParagraph.setValue("Hello from WebDriver");

    const paragraphValue = await $("p").getValue();
    await expect(paragraphValue).toHaveValueContaining("Hello from WebDriver");
  });
  it("should pen website and select iframe with an element", async () => {
    await browser.url("https://the-internet.herokuapp.com/iframe");

    await expect(browser).toHaveUrl(
      "https://the-internet.herokuapp.com/iframe"
    );
    await expect(browser).toHaveTitle("The Internet");

    await browser.pause(2000);
    // await browser.switchToFrame(await $("//iframe[@title='Rich Text Area']"));
    await browser.switchToFrame(await $("#mce_0_ifr"));
    // const iframe_first = await $("#mce_0_ifr");
    // expect(iframe_first).toExist();
    // await browser.switchToFrame(iframe_first);

    const iframParagraph = await $("p");
    await expect(iframParagraph).toBeDisplayed();
    await expect(iframParagraph).toExist();
    await iframParagraph.setValue("Hello from WebDriver");
  });
});

// 🔥🔥🔥
describe("Smoke test suite", () => {
  it("should verify url", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com/");
    console.log(await "Session id is: ", browser.sessionId);
    console.log(await "Capabilities is: ", browser.capabilities);

    await expect(browser).toHaveUrl(
      "https://opensource-demo.orangehrmlive.com/"
    );
    await expect(browser).toHaveUrlContaining("orangehrm");
  });
  it("should verify title", async () => {
    await expect(browser).toHaveTitle("OrangeHRM");
    await expect(browser).toHaveTitleContaining("Orange");
  });
  it("should verify login section", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com/");

    const username = await $("#txtUsername");
    const password = await $("#txtPassword");
    const submitButton = await $("#btnLogin");

    const form = await $("form");
    await expect(form).toExist();
    const inputs = await $$("form input");
    await expectChai(inputs.length).to.equal(7);
    const inputs_second = await (await $("form")).$$("input");
    await expectChai(inputs_second.length).to.equal(7);

    const attribute_id = await $("[id=txtUsername]");
    await expect(attribute_id).toExist();
    /**
     * $("input")
     * $("#myId")
     * $(".myClass")
     * $("[placeholder]")
     * $("[placeholder='Email']")
     * $("[class='myClassFirst myClassSecond']")
     * $("input[placeholder='Email']")
     * $("[placeholder='Email'][fullwidth]")
     * $("input[placeholder='Email']#inputEmail.input-full-width")
     * $('=WebdriverIO')
     * $('*=driver')
     * $('h1=Welcome to my Page')
     * $('h1*=Welcome')
     * $('.someElem=WebdriverIO is the best')
     * $('#elem=WebdriverIO is the best')
     * $('.someElem*=WebdriverIO')
     * $('#elem*=WebdriverIO')
     * $('<my-element />')
     * Note: You can't mix multiple selector strategies in one selector. Use multiple chained element queries to reach the same goal, e.g.:
     * const elem = await $('header h1*=Welcome') // doesn't work!!!
     * use instead
     * const elem = await $('header').$('h1*=Welcome')
     */

    await username.setValue("Admin");
    await password.setValue("admin123");
    await submitButton.click();

    await expect(browser).toHaveUrl(
      "https://opensource-demo.orangehrmlive.com/index.php/dashboard"
    );
    await expect(browser).toHaveUrlContaining("dashboard");
  });
  it("should interact with elements", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com/");
    await browser.maximizeWindow();
    const username = await $("#txtUsername");
    await username.setValue("Admin");
    await browser.pause(2000);
    await username.clearValue();
    await browser.pause(2000);
    await username.setValue("Admin");
    await browser.pause(2000);
    await browser.minimizeWindow();
    const usernameValue = await username.getValue();
    console.log("value is: ", usernameValue);
    const loginButton = await $("#btnLogin");
    const clickStatus = await loginButton.isClickable();
    const enableStatus = await loginButton.isEnabled();
    const displayStatus = await loginButton.isDisplayed();
    console.log("is it clickabale? ", clickStatus);
    console.log("is it enabled? ", enableStatus);
    console.log("is it displayed? ", displayStatus);

    await expect(loginButton).toBeClickable();
    await expect(loginButton).toBeEnabled();
    await expect(loginButton).toBeDisplayed();

    const loginButtonAttribute = await loginButton.getAttribute("value");
    console.log("button value attribute is: ", loginButtonAttribute);

    const loginButtonCssProp = await loginButton.getCSSProperty("font-size");
    console.log("button font-size is: ", loginButtonCssProp);

    const forgotPasswordLink = await $("#forgotPasswordLink a");
    const forgotPasswordLinkText = await forgotPasswordLink.getText();
    console.log("text in the link is: ", await forgotPasswordLinkText);
    await expect(forgotPasswordLink).toHaveTextContaining("Forgot");
  });
  // npm install chai --save-dev
  // https://www.chaijs.com/api/bdd/
  // https://www.npmjs.com/package/chai
  // npm install --save @types/chai არაა აუცილებელი, სატესტოდ მქონდა ტაიპსკრიპტისთვის
  it("should select all social icons", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com/");
    const allSocialIcons = await $$("#social-icons a img");
    console.log(await allSocialIcons.length);
    await expectChai(allSocialIcons.length).to.equal(4);

    for (let i = 0; i < allSocialIcons.length; i++) {
      console.log(
        "values from icon images: ",
        await allSocialIcons[i].getAttribute("alt")
      );
      if (
        (await allSocialIcons[i].getAttribute("alt")) === "OrangeHRM on twitter"
      ) {
        await allSocialIcons[i].click();
        await browser.pause(5000);
        break;
      }
    }
  });
  // 🔥 npm install @wdio/allure-reporter --save-dev
  // 🔥 Configure the output directory in your wdio.conf.js file:
  // exports.config = {
  //   reporters: [
  //     [
  //       "allure",
  //       {
  //         outputDir: "allure-results",
  //         disableWebdriverStepsReporting: true,
  //         disableWebdriverScreenshotsReporting: true,
  //       },
  //     ],
  //   ],
  // };
  // 🔥 Add Screenshots
  // afterTest: function (
  //   test,
  //   context,
  //   { error, result, duration, passed, retries }
  // ) {
  //   if (error) {
  //     browser.takeScreenshot();
  //   }
  // },
  // 🔥 Install the Allure command-line tool
  // 🔥 https://www.npmjs.com/package/allure-commandline
  // 🔥 install Java 8 (JRE/JDK)
  // Click Start, then Control Panel, then System.
  // Click Advanced, then Environment Variables.
  // Add the location of the bin folder of the JDK installation to the PATH variable in System Variables. The following is a typical value for the PATH variable:
  // Download Java JDK from here and install it.
  // Open Search, type in “environment variable”, and choose “Edit the system environment variables”.
  // Click on “Environment Variables…”.
  // Click on “New”.
  // Fill in the “variable name” field with “JAVA_HOME”.
  // Fill in the “variable value” with the path to where Java is installed on your computer. (for me it was under “C:\Program Files\Java\<jdkversion>”)
  // Click “OK” and close all dialogs.
  // Restart your IDE / Terminal. (do not skip this step)
  // C:\Program Files\Java\jre1.8.0_321
  // C:\Program Files\Java\jdk-17.0.2
  // npm install -g allure-commandline --save-dev
  // allure generate [allure_output_dir] && allure open
  // allure generate allure-results
  // allure open
  // allure generate --clean  allure-results
  // allure open
  // screenshots are not generating, don't know why
});

// 🔥🔥🔥
describe("handle select", () => {
  it("should something", async () => {
    await browser.url("https://www.facebook.com/");
    const createNewAccoutnButton = await $("//a[text()='Create new account']");
    await createNewAccoutnButton.click();

    const day = await $("//select[@name='birthday_day']");
    await day.selectByIndex(9);
    const selectedDay = await day.getValue();
    await expectChai(selectedDay).to.equal("10");

    const month = await $("#month");
    await month.selectByAttribute("value", "11");
    const selectedMonth = await month.getValue();
    await expectChai(selectedMonth).to.equal("11");

    const year = await $("#year");
    await year.selectByVisibleText("1990");
    const selectedYear = await year.getValue();
    await expectChai(selectedYear).to.equal("1990");
  });
});

// 🔥🔥🔥
describe("auto suggestions", () => {
  it("should", async () => {
    await browser.url("https://www.google.com/");

    const searchInput = await $("//input[@name='q']");
    await searchInput.setValue("javascript");
    await browser.pause(2000);

    const suggestions = await $$(
      "//ul[@role='listbox']//li//div[@role='option']"
    );
    for (let i = 0; i < suggestions.length; i++) {
      console.log("my suggestio is: ", await suggestions[i].getText());
      const value = await suggestions[i].getText();
      if (value === "javascript function") {
        await suggestions[i].click();
        await browser.pause(2000);
        break;
      }
    }
    await function watchCategoriesListText() {
      suggestions.map((element) => {
        console.log(element.getText());
      });
    };
    await expect(browser).toHaveTitleContaining("javascript function");
  });
});

// 🔥🔥🔥
describe("await for an elements", () => {
  it("should", async () => {
    await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");

    const startButton = await $("//button[text()='Start']");
    await startButton.click();

    // 10 seconds 10 წამი ელოდება დეფოლტად
    const finishText = await $("//h4[text()='Hello World!']");
    // const finishText = await $("#finish h4");
    // await finishText.waitForDisplayed({ timeout: 15000 });
    console.log("finish text: ", await finishText.isDisplayed());
    console.log("fininsh text is: ", await finishText.getText());
    await expect(finishText).toHaveTextContaining("Hello World!");
  });
});

// 🔥🔥🔥
describe("dynamic controls suite", () => {
  it("should", async () => {
    await browser.url("https://the-internet.herokuapp.com/dynamic_controls");

    const enableButton = await $("#input-example button");
    // const enableButton = await $("//button[text()='Enable']");
    await enableButton.click();

    const disabledInput = await $("#input-example input");
    // const disabledInput = await $("//input[@type='text']");
    // waiting for 10 seconds
    await disabledInput.waitForEnabled();
    await disabledInput.setValue("hello from webdriverIO");
  });
});

// 🔥🔥🔥
// https://webdriver.io/docs/api/browser/waitUntil/

// 🔥🔥🔥
describe("alert suite", () => {
  it("should check alert", async () => {
    await browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
    await (await $("input[name='proceed123']")).click();
    const alert_text = await browser.getAlertText();
    await browser.acceptAlert();
    await expectChai(alert_text).to.equal("Please enter a valid user name");
  });
  it("should assert alerts", async () => {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    const alert = await $("//ul//li//button[text()='Click for JS Alert']");
    const confirm = await $("//ul//li//button[text()='Click for JS Confirm']");
    const prompt = await $("//ul//li//button[text()='Click for JS Prompt']");
    const result = await $("#result");

    await alert.click();
    const alert_text = await browser.getAlertText();
    await expectChai(alert_text).to.equal("I am a JS Alert");
    await browser.acceptAlert();
    const result_text = await result.getText();
    await expectChai(result_text).to.equal("You successfully clicked an alert");

    await confirm.click();
    await browser.acceptAlert();
    const confirm_text_ok = await result.getText();
    await expectChai(confirm_text_ok).to.equal("You clicked: Ok");

    await confirm.click();
    await browser.dismissAlert();
    const confirm_text_cansel = await result.getText();
    await expectChai(confirm_text_cansel).to.equal("You clicked: Cancel");

    await prompt.click();
    await browser.sendAlertText("hello from webdriverio prompt");
    await browser.acceptAlert();
    const prompt_text_ok = await result.getText();
    await expectChai(prompt_text_ok).to.equal(
      "You entered: hello from webdriverio prompt"
    );

    await prompt.click();
    await browser.dismissAlert();
    const prompt_text_cansel = await result.getText();
    await expectChai(prompt_text_cansel).to.equal("You entered: null");
  });
});

// 🔥🔥🔥
describe("screenshot suite", () => {
  it("should take screenshot of website", async () => {
    await browser.url("https://webdriver.io/docs/api/browser/saveScreenshot/");
    await browser.saveScreenshot("./webdriver_io_screenshot.png");
  });
});

// 🔥🔥🔥
// cross browser testing
// npm install @wdio/selenium-standalone-service --save-dev
// in capabilities browserName: "chrome", change to "firefox"
// in services: ["chromedriver"], change to "selenium-standalone"
// არ მუშაობს და შესამოწმებელია

// 🔥🔥🔥
// parallel execution

// 🔥🔥🔥
// multipule window
describe("handle multiple tabs suite", () => {
  it("should open new tab", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com/");
    await (await $("//img[@alt='LinkedIn OrangeHRM group']")).click();
    await browser.switchWindow("linkedin");
    await (await $("#email-address")).setValue("test@gmail.com");
    await browser.switchWindow("orange");
  });
});

// 🔥🔥🔥
// page object model
// design pattern
// separate tests and locators, maintain and understand
// reuse code
// improve readability

// 🔥🔥🔥
// in wdio.conf.ts
// beforeSuite: function (suite) {
//   browser.maximizeWindow();
// },

// urilities

// resources(data,url etc.)

// BrowserStack service

// browser.keys(element)
// https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions

// 🔥🔥🔥
describe("drag and drop api test suite", () => {
  it.only("should be able to drag an item and drop", async () => {
    await browser.url("https://jqueryui.com/droppable/");
    await browser.pause(2000);
    await browser.switchToFrame(0);
    const draggable = await $("#draggable");
    const droppable = await $("#droppable");
    await draggable.dragAndDrop(droppable);
    await browser.pause(2000);
  });
});
describe("blank suite", () => {
  it("should open bland and alert message", async () => {
    await browser.url("about:blank");
    await expect(browser).toHaveUrl("about:blank");
    console.log(await browser.isAlertOpen());
    await browser.execute("window.alert('hello from webdriverio')");
    console.log(await browser.isAlertOpen());
  });
});
