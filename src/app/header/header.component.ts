import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    .header {background-color:dodgerblue}
  `]
})
export class HeaderComponent {
  title = 'project';
}
