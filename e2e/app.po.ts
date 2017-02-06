import { browser, element, by } from 'protractor';

export class TelephoneDirectoryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('td-root h1')).getText();
  }
}
