// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ContactComponent,
        SkillsComponent,
        LanguagesComponent,
        SummaryComponent,
        ExperienceComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule
      ],
  providers: [],
  bootstrap: [] // Bootstrap AppComponent
})
export class AppModule { }
