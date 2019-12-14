import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component'
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"aboutus",component:AboutusComponent},{path:"contactus",component:ContactusComponent}])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
