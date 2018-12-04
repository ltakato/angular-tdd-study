import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [ContactListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ContactListComponent]
})
export class AppModule { }
