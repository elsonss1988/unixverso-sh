import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { ListaDistroComponent } from '../lista-distro/lista-distro.component';

@Component({
  selector: 'app-screen-main',
  standalone: true,
  imports: [ListaDistroComponent],
  templateUrl: './screen-main.component.html',
  styleUrl: './screen-main.component.css',
})
export class ScreenMainComponent {}
