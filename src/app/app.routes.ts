import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';

export const routes: Routes = [
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: '**', redirectTo: '/summary' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
