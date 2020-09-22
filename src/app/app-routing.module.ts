import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PersonalSectionComponent } from './personal-section/personal-section.component';
import { ProfessionalSectionComponent } from './professional-section/professional-section.component';


const routes: Routes = [
  { path :  'home', component : HomeComponent },
  { path : 'personal', component : PersonalSectionComponent},
  { path : 'professional', component : ProfessionalSectionComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  