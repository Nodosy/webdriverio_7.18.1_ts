import SearchPage from "../pageObject2/search.page";

describe("eBay search", () => {
  it("open ebay website main url and verify title to be correct", async () => {
    await SearchPage.open();
    await expect(browser).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles & More | eBay"
    );
  });
  it("should search for a product and verify the search text value", async () => {
    await (await SearchPage.searchInput).addValue("laptop");
    await (await SearchPage.searchButton).click();
    await expect(SearchPage.searchInput).toHaveValue("laptop");
  });
  it("should redirect to a new page and verify the title", async () => {
    await expect(browser).toHaveTitle("laptop: Search Result | eBay");
  });
  it("should update seach category", async () => {
    // არ მუშაობს
    // await browser.waitUntil(
    //   async () => {
    //     await (SearchPage.category).getText()) === "PC Laptops & Netbooks";
    //   },
    //   { timeout: 3000 }
    // );
    await expect(SearchPage.category).toHaveText("PC Laptops & Netbooks");
  });
});
