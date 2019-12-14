import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component'
import {ContactusComponent} from './contactus/contactus.component'
import {ComponentnotfoundComponent} from './componentnotfound/componentnotfound.component'
import {LoginComponent} from './login/login.component'
const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'aboutus', component: AboutusComponent },
{ path: 'contactus', component: ContactusComponent },

{path:"**",component:ComponentnotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
