import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async navigateToPath(path: string): Promise<unknown> {
    return browser.get(browser.baseUrl + '/' + path);
  }

  async getTitleText(): Promise<string> {
    return element(by.tagName('h1')).getText();
  }

  getHeaderMenuButton(index: number): ElementFinder {
    return element(
      by.xpath(
        `/html/body/app-root/div/view-header/header/div/view-menu-bar/div/button[${
          index + 1
        }]`,
      ),
    );
  }

  getFooterMenuButton(index: number): ElementFinder {
    return element(
      by.xpath(
        `/html/body/app-root/div/view-footer/footer/div/view-menu-bar/div/button[${
          index + 1
        }]`,
      ),
    );
  }

  getSnsButton(index: number): ElementFinder {
    return element(
      by.xpath(
        `/html/body/app-root/div/view-footer/footer/div/view-sns-bar/div/button[${
          index + 1
        }]`,
      ),
    );
  }
}
