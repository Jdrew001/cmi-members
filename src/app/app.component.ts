import { Component } from '@angular/core';
import { Auth, getAuth } from '@angular/fire/auth';
import { getApp } from '@firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmi-members';

  constructor() {
  }
}
