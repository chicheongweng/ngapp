import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { BusinessComponent } from './business/business.component';
import { HelpComponent } from './help/help.component';
import { DownloadpaymeComponent } from './downloadpayme/downloadpayme.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    BusinessComponent,
    HelpComponent,
    DownloadpaymeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
