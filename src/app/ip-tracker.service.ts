import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpTrackerService {
  constructor(private http: HttpClient) {}
  fetchLocation(): Observable<object> {
    return this.http.get(
      'https://geo.ipify.org/api/v2/country?apiKey=at_IFhQ1eCdffONVPyiMz7xdlh4kbxg4&ipAddress=8.8.8.8'
    );
  }
}
