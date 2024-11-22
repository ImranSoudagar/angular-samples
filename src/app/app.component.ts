import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { XheaderComponent } from "./header/header.component";
import { XfooterComponent } from "./footer/footer.component";

@Component({
  standalone: true,
  imports: [RouterModule, XheaderComponent, XfooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-samples';
}
