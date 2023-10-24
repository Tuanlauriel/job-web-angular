import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class JobService {
  api = "http://127.0.0.1:8000/api/jobs";

  constructor(private http: HttpClient) { }

  getAllJobs() {
    return this.http.get(this.api);
  }
}
