import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NewComponent } from './addSemester/addSemester.component';
import { provideRouter } from "@angular/router";

bootstrapApplication(AppComponent, {providers: [provideRouter([])]})
bootstrapApplication(NewComponent, {providers: [provideRouter([])]})
