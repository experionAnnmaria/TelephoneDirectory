import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactComponent } from './contact/contact.component';
import { ContactlistComponent } from './contact/contactlist.component';
import { ContactaddComponent } from './contact/contactadd.component';
import { route } from './app.routing';
import { ContactService} from './contact.service';
import { ViewContactComponent } from './contact/view-contact.component';
import { ContactEditComponent } from './contact/contact-edit.component';
import { ContactSearchComponent } from './contact/contact-search.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    ContactlistComponent,
    ContactaddComponent,
    ViewContactComponent,
    ContactEditComponent,
    ContactSearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    route
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
