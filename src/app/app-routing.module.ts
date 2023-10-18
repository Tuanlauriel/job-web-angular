import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobSeekerLayoutComponent } from './layouts/job-seeker-layout/job-seeker-layout.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { MyJobComponent } from './pages/my-job/my-job.component';
import { ForEmployersLayoutComponent } from './layouts/for-employers-layout/for-employers-layout.component';
import { ForEmployersJobsComponent } from './pages/for-employers-jobs/for-employers-jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '', component: JobSeekerLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'jobs', component: JobListComponent },
      { path: 'companies', component: CompanyListComponent },
      { path: 'my-job', component: MyJobComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'for-employers', component: ForEmployersLayoutComponent,
    children: [
      { path: '', component: ForEmployersJobsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
