const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox'],
  },
  chromeDriver:
    process.platform === 'win32'
      ? './node_modules/webdriver-manager/selenium/chromedriver_89.0.4389.114.exe'
      : './node_modules/webdriver-manager/selenium/chromedriver_89.0.4389.114',
};

exports.config = config;
