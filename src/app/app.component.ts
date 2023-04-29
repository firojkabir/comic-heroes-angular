import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Comic Heroes';

  constructor(private http: HttpClient) {
    console.log(`${environment.apiBaseUrl}/todos`);
  }

  ngOnInit() {
    console.log('oninit');
    console.log('test');
    console.log('test2');
    console.log('add first clg');
    this.http.get(`${environment.apiBaseUrl}/todos`).subscribe({
      next: (respone: any) => {
        console.log(respone);
      },
    });
  }
}
