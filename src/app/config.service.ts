import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  configUrl =
    'https://geo.ipify.org/api/v2/country?apiKey=at_IFhQ1eCdffONVPyiMz7xdlh4kbxg4&ipAddress=8.8.8.8';

  getConfig() {
    return this.http.get<ConfigService>(this.configUrl);
  }
}
