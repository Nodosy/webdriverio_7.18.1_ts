import BookstorePage from "./bookstore.page";
import { ChainablePromiseElement } from "webdriverio";
import Page from "./page";

class LoginPagerePage extends Page {
  public get inputUsername() {
    return $("#userName");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnLogin() {
    return $("#login");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string): Promise<void> {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.scrollIntoView();
    await this.btnLogin.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  async open() {
    await super.open("login");
  }
}

export default new LoginPagerePage();
