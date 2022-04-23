import Page from "./page";
import { ChainablePromiseElement } from "webdriverio";

// export default class bookstorePage {
//   public get usernameLabel(): ChainablePromiseElement<
//     Promise<WebdriverIO.Element>
//   > {
//     return $("#userName-value");
//   }
// }

class BookstorePage extends Page {
  public get usernameLabel() {
    return $("#userName-value");
  }
  public get logoutButton() {
    return $("button-'Log Out'");
  }
  public async clickLogout() {
    await this.logoutButton.scrollIntoView();
    await this.logoutButton.click();
  }
}

export default new BookstorePage();
