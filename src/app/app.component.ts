import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/app.header';
import { ScreenMainComponent } from './components/screen-main/screen-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, ScreenMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'unixverso';
}
