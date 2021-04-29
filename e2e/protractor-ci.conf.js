const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox'],
  },
  chromeDriver:
    process.platform === 'win32'
      ? './node_modules/webdriver-manager/selenium/chromedriver_90.0.4430.24.exe'
      : './node_modules/webdriver-manager/selenium/chromedriver_90.0.4430.24',
};

exports.config = config;
