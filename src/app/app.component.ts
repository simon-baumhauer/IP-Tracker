import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Location } from './location';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts!: Observable<any>;

  constructor(private http: HttpClient) {
    this.getDate();
    console.log('test:', this.posts);
  }

  getDate() {
    this.posts = this.http.get(this.ROOT_URL);
  }
}
