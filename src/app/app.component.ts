import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IpTrackerService } from './ip-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiKey = 'at_IFhQ1eCdffONVPyiMz7xdlh4kbxg4';
  locations$: any;
  constructor(private ipTracker: IpTrackerService) {
    console.log(this.locations$);
  }

  fetchLocation() {
    this.locations$ = this.ipTracker.fetchLocation();
  }
}
