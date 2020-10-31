import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AboutUsComponent } from './Categories/about-us/about-us.component';
import { StudyAbroadComponent } from './Categories/study-abroad/study-abroad.component';
import { ServicesComponent } from './Categories/services/services.component';
import { ContactUsComponent } from './Categories/contact-us/contact-us.component';
import { HomeComponent } from './Categories/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    StudyAbroadComponent,
    ServicesComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
