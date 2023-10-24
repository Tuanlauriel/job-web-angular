import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobs: any;
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }
  
  getJobs() {
    this.jobService.getAllJobs().subscribe((data: any) => {
      this.jobs = data;
      console.log(this.jobs);
    });
  }
}
