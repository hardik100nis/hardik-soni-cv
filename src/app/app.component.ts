import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this component is standalone
  imports: [RouterModule], // Import RouterModule for router-outlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hardik-soni-cv';
}
