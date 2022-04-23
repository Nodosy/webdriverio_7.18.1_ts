import { expect as chaiExpect } from "chai";

describe("watches page", () => {
  it("should show the banner container", async () => {
    await browser.url("https://www.ebay.com/b/Wristwatches/31387/bn_2408451");
    const banner = await $("section.title-banner");
    await expect(banner).toBeDisplayed();
  });
  it("should show the banner title", async () => {
    const infoTitle = await $(".title-banner__title");
    const infoTitleText = await $(infoTitle).getText();

    await expect(infoTitle).toHaveTextContaining("Time for a");
    await chaiExpect(infoTitleText).to.not.be.empty;
  });
  it("should have url when click button", async () => {
    const dailyDeals = await $("#gh-p-1 .gh-p");
    const tag = await dailyDeals.getTagName();

    await dailyDeals.click();
    await expect(dailyDeals).toHaveLinkContaining(
      "https://www.ebay.com/globaldeals"
    );
    await expect(dailyDeals).toBeClickable();
    await expect(dailyDeals).toHaveUrl("https://www.ebay.com/globaldeals");
    await chaiExpect(tag).to.equal("a");
  });
  it("should have url when click button with chai", async () => {
    const url = await browser.getUrl();
    await chaiExpect(url).to.include("deal");
  });
  // 🔥🔥🔥
  it.only("should open ebay", async () => {
    await browser.url("https://www.ebay.com");

    const searchInput = await $("#gh-ac");
    await expect(searchInput).toBeDisplayed();
    await expect(searchInput).toExist();

    await searchInput.addValue("laptop");
    await browser.keys("Enter");

    await expect(browser).toHaveTitle("laptop: Search Result | eBay");
  });
});
