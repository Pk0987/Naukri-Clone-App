import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { JobDetailsComponent } from './Pages/job-details/job-details.component';
import { JobListingComponent } from './Pages/job-listing/job-listing.component';
import { MyJobsComponent } from './Pages/my-jobs/my-jobs.component';
import { CreateNewJobComponent } from './Pages/create-new-job/create-new-job.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistrationComponent
  },
  {
    path:'jobs',
    component:JobsComponent
  },
  {
    path:'jobs-detail',
    component:JobDetailsComponent
  },
  {
    path:'job-listing',
    component:JobListingComponent
  },
  {
    path:'my-jobs',
    component:MyJobsComponent
  },
  {
    path:'new-job',
    component:CreateNewJobComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
