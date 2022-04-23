import WatchesPage from "../pageObject2/watches.page";
import { expect as chaiExpect } from "chai";

describe("watches page", () => {
  it("should show the banner container", async () => {
    await WatchesPage.open();
    await expect(WatchesPage.banner).toBeDisplayed();

    await WatchesPage.watchCategoriesListText();
  });
  it("should show the banner title", async () => {
    await expect(WatchesPage.infoTitle).toHaveTextContaining("Time for a");
  });
  it("should have url when click button", async () => {
    await (await WatchesPage.dailyDeals).click();
    await expect(WatchesPage.dailyDeals).toHaveLinkContaining(
      "https://www.ebay.com/globaldeals"
    );
    await expect(WatchesPage.dailyDeals).toBeClickable();
    await expect(WatchesPage.dailyDeals).toHaveUrl(
      "https://www.ebay.com/globaldeals"
    );
  });
  it("should have url when click button with chai", async () => {
    await chaiExpect(await browser.getUrl()).to.include("deal");
  });
  // it("should verify watches category list", async () => {
  //   const watchesCategoryLists = await WatchesPage.watchCategoriesListText();
  //   await chaiExpect(watchesCategoryLists).to.deep.equal([
  //     "Watches",
  //     "Wristwatches",
  //     "Other Watches",
  //     "Pocket Watches",
  //     "Time for a New Wristwatch?",
  //   ]);
  // });
  it("should open fashion section on hover effect", async () => {
    await (await WatchesPage.home).click();
    expect(WatchesPage.fashionLink).toBeDisplayed();
    await (await WatchesPage.fashionLink).moveTo();

    await (await WatchesPage.watchesLink).waitForDisplayed();
    await (await WatchesPage.watchesLink).click();

    await expect(browser).toHaveUrlContaining("Wristwatches");
    await expect(browser).toHaveTitleContaining("Wristwatches");
  });
});
