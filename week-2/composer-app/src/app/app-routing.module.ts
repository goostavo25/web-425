/**
 * Title: app-routing.modules.ts
 * Author: Gustavo Roo Gonzalez
 * Date: 1/16/2022
 * Description: Routing for Composer App.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import statements for Composer List, About, Contact
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent,
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
