import { ContactManagementPage } from './pageobjects/contact-management.po';

describe('Contact Management', function () {

  it('should show a list of contacts, initially containing "Max" and "Moritz"', function () {
    const page: ContactManagementPage = new ContactManagementPage();
    page.navigateTo();
    expect(page.shownNamesOfContacts()).toContain('Max');
    expect(page.shownNamesOfContacts()).toContain('Moritz');
  });
});
