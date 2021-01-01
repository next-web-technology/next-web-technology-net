import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

import { MENUS } from '../../src/app/domain/menu/menus';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header h1 title text', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Next Web Technology合同会社');
  });

  MENUS.forEach((menu, index) => {
    it(`should move to path page when header menu button ${index} ${menu.name} ${menu.path} clicked`, async () => {
      await page.navigateTo();
      const button = page.getHeaderMenuButton(index);
      await button.click();
      const expectedUrl = `${browser.baseUrl}${menu.path}`;
      expect(await browser.getCurrentUrl()).toEqual(expectedUrl);
    });
  });

  MENUS.forEach((menu, index) => {
    it(`should move to path page when footer menu button ${index} ${menu.name} ${menu.path} clicked`, async () => {
      await page.navigateTo();
      const button = page.getFooterMenuButton(index);
      await button.click();
      const expectedUrl = `${browser.baseUrl}${menu.path}`;
      expect(await browser.getCurrentUrl()).toEqual(expectedUrl);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});
