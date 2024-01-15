import { Component } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  faDatabase = faDatabase;

  constructor() {}
}
