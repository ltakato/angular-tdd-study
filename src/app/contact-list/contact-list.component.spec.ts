import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { Contact } from '../models/contact';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display an element for each contact', function () {
    component.contacts = [new Contact('DummyContact'), new Contact('DummyContact2')];
    fixture.detectChanges();

    const contactElements: NodeList = fixture.nativeElement.querySelectorAll('.contact');

    expect(contactElements.length).toBe(2);
  });

  it('a contact element should display the contact´s name', function () {
    const contact = new Contact('SomeName');
    component.contacts = [contact];

    fixture.detectChanges();

    const nameElement: HTMLElement = fixture.nativeElement.querySelector('.contact .name');
    expect(nameElement).not.toBeNull();
    expect(nameElement.textContent).toEqual(contact.name);
  });

  it('should initially display the contacts "Max" and "Moritz"', function () {
    const nameElements: NodeList = fixture.nativeElement.querySelectorAll('.contact .name');
    const names: string[]  = Array.from(nameElements, nameElement => nameElement.textContent);
    expect(names).toContain('Max');
    expect(names).toContain('Moritz');
  });
});
