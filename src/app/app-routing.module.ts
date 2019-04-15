import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { BusinessComponent } from './business/business.component';
import { HelpComponent } from './help/help.component';
import { DownloadpaymeComponent } from './downloadpayme/downloadpayme.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';

const routes: Routes = [
  { path: '', redirectTo: '/personal', pathMatch: 'full' },
  { path: 'personal', component: PersonalComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'help', component: HelpComponent },
  { path: 'download', component: DownloadpaymeComponent },
  { path: 'whatsnew', component: WhatsnewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
