import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { MyJobsComponent } from './Pages/my-jobs/my-jobs.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { JobListingComponent } from './Pages/job-listing/job-listing.component';
import { JobDetailsComponent } from './Pages/job-details/job-details.component';
import { HomeComponent } from './Pages/home/home.component';
import { CreateNewJobComponent } from './Pages/create-new-job/create-new-job.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MyJobsComponent,
    JobsComponent,
    JobListingComponent,
    JobDetailsComponent,
    HomeComponent,
    CreateNewJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
