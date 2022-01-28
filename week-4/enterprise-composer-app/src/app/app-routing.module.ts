/**
 * Title: app-routing.modules.ts
 * Author: Gustavo Roo Gonzalez
 * Date: 1/16/2022
 * Description: Routing for Composer App.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full',
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
