import {browser, by, element, ElementArrayFinder, ElementFinder, promise} from 'protractor';
import Promise = promise.Promise;

export class ContactManagementPage {
  navigateTo() {
    browser.get('/');
  }

  shownNamesOfContacts(): Promise<string[]> {
    return this.contactNameItems().map(contactNameItem => contactNameItem.getText());
  }

  private contactNameItems(): ElementArrayFinder {
    return element.all(by.css('.contact .name'));
  }
}
