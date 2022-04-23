import Page from "./paje";

class WatchesPage extends Page {
  get banner() {
    return $("section.title-banner");
  }
  get infoTitle() {
    return $(".title-banner__title");
  }
  get dailyDeals() {
    return $("#gh-p-1 .gh-p");
  }
  get watchCategoriesList() {
    return $$("section[id='s0-18-12_2-0-1[0]-0-0'] ul li");
  }
  get fashionLink() {
    return $(".hl-cat-nav").$("a=Fashion");
  }
  get watchesLink() {
    return $("//li/a[text()='Watches']");
  }
  get home() {
    return $("#gh-la");
  }
  public async watchCategoriesListText() {
    this.watchCategoriesList.map((element) => {
      console.log(element.getText());
    });
  }
  public async open() {
    await super.open("b/Wristwatches/31387/bn_2408451");
  }
}

export default new WatchesPage();
