export default class Page {
  // constructor() {
  //   this.title = "My Page";
  // }
  public async open(path: string) {
    // await browser.url(path)
    await browser.url(`https://www.ebay.com/${path}`);
  }
}
