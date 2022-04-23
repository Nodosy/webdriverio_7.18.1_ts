import Page from "./paje";

class SearchPage extends Page {
  get searchInput() {
    return $("#gh-ac");
  }
  get searchButton() {
    return $("#gh-btn");
  }
  get category() {
    return $("#gh-cat option:nth-child(1");
  }
  public async open() {
    await super.open("");
  }
}

// exporting an instance of a class
// module.exports = new SearchPage()
export default new SearchPage();
