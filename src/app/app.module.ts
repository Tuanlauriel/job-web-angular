import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { JobSeekerLayoutComponent } from './layouts/job-seeker-layout/job-seeker-layout.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { MyJobComponent } from './pages/my-job/my-job.component';
import { ForEmployersLayoutComponent } from './layouts/for-employers-layout/for-employers-layout.component';
import { ForEmployersJobsComponent } from './pages/for-employers-jobs/for-employers-jobs.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    JobListComponent,
    JobDetailComponent,
    AdminLayoutComponent,
    JobSeekerLayoutComponent,
    CompanyListComponent,
    MyJobComponent,
    ForEmployersLayoutComponent,
    ForEmployersJobsComponent,
    CompanyInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
