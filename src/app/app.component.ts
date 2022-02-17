import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  today = new Date();
  val = 123.45;

  constructor(private session: SessionService) {}

  norway() {
    this.session.registerCulture('nb-NO');
    this.refreshValues();
  }

  sweden() {
    this.session.registerCulture('sv-SE');
    this.refreshValues();
  }

  private refreshValues() {
    this.today = new Date();
    this.val++;
  }
}
