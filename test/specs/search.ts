describe("eBay search", () => {
  it("open ebay website main url and verify title to be correct", async () => {
    await browser.url("https://www.ebay.com/");
    await expect(browser).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles & More | eBay"
    );
  });
  it("should search for a product and verify the search text value", async () => {
    const searchInput = await $("#gh-ac");
    const searchButton = await $("#gh-btn");

    await searchInput.addValue("laptop");
    await searchButton.click();

    await expect(searchInput).toHaveValue("laptop");
  });
  it("should redirect to a new page and verify the title", async () => {
    await expect(browser).toHaveTitle("laptop: Search Result | eBay");
  });
  it("should update seach category", async () => {
    const category = await $("#gh-cat option:nth-child(1");
    await expect(category).toHaveText("PC Laptops & Netbooks");
  });
});
