import { Routes, RouterModule } from '@angular/router';
import {ContactaddComponent} from './contact/contactadd.component';
import { ModuleWithProviders } from '@angular/core';
import {ViewContactComponent} from './contact/view-contact.component';
import {ContactlistComponent} from './contact/contactlist.component';
import {ContactEditComponent} from './contact/contact-edit.component';

const App_Routes: Routes = [
        
    {path:'addContact', component: ContactaddComponent},
    
    {path:'view/:id', component: ViewContactComponent},

    {path:'editContact/:id', component: ContactEditComponent},

    {path:'contactlist', component: ContactlistComponent}
];

export const route: ModuleWithProviders = RouterModule.forRoot(App_Routes);
