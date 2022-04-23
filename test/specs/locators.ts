describe("test suite anme", () => {
  before(async () => {
    await browser.url("https://demoqa.com/links");
  });
  it("CSS selector scenario", async () => {
    const createLink = await $("#created");
    const linkResponse = await $("#linkResponse");

    await createLink.scrollIntoView();
    await createLink.click();

    await linkResponse.scrollIntoView();
    await expect(linkResponse).toHaveTextContaining(
      "Link has responded with staus 201 and status text Created"
    );
  });
  it("CSS by index", async () => {
    const noContentLink = await $("#linkWrapper p:nth-child(6) a");
    const linkResponse = await $("#linkResponse");

    await noContentLink.scrollIntoView();
    await noContentLink.click();

    await linkResponse.scrollIntoView();
    await expect(linkResponse).toHaveTextContaining(
      "Link has responded with staus 204 and status text No Content"
    );
  });
  it("Link Text", async () => {
    const movedLink = await $("=Moved");
    const linkResponse = await $("#linkResponse");

    await movedLink.scrollIntoView();
    await movedLink.click();

    await linkResponse.scrollIntoView();
    await expect(linkResponse).toHaveTextContaining(
      "Link has responded with staus 301 and status text Moved Permanently"
    );
  });
  it("Partial Link Text", async () => {
    const movedLink = await $("*=Mov");
    const linkResponse = await $("#linkResponse");

    await movedLink.scrollIntoView();
    await movedLink.click();

    linkResponse.scrollIntoView();
    await expect(linkResponse).toHaveTextContaining(
      "Link has responded with staus 301 and status text Moved Permanently"
    );
  });
  it("Element with certain text", async () => {
    const badRequestLink = await $("a=Bad Request");
    const linkResponse = await $("#linkResponse");

    await badRequestLink.scrollIntoView();
    await badRequestLink.click();

    await linkResponse.scrollIntoView();
    await expect(linkResponse).toHaveTextContaining(
      "Link has responded with staus 400 and status text Bad Request"
    );
  });
  it.only("XPath", async () => {
    const unauthorizedLink = await $("//*[@id='unauthorized']");
    const linkResponse = await $("#linkResponse");

    await unauthorizedLink.scrollIntoView();
    await unauthorizedLink.click();

    await linkResponse.scrollIntoView();
    await expect(linkResponse).toHaveTextContaining(
      "Link has responded with staus 401 and status text Unauthorized"
    );
  });
});
