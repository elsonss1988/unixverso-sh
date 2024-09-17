import { DistrosService } from './../../services/distros.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../data/distroInfo.json';

@Component({
  selector: 'app-lista-distro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-distro.component.html',
  styleUrl: './lista-distro.component.css',
})
export class ListaDistroComponent {
  distro: any;
  distroNames: string[] = ['Fedora', 'Slackware', 'Debian'];

  dist = data.distroInfo;

  distroInfo = [
    {
      name: 'Debian',
      image: 'Debian',
      version: 'Debian',
      description: 'Debian',
    },
    {
      name: 'Fedora',
      image: 'Fedora',
      version: 'Fedora',
      description: 'Fedora',
    },
    {
      name: 'Slackware',
      image: 'Slackware',
      version: 'Slackware',
      description: 'Slackware',
    },
  ];

  constructor(public distroService: DistrosService) {
    this.distro = distroService.getDistros();

    for (let i = 0; i < this.distroNames.length; i++) {
      let distros = this.distroNames[i];
    }
  }
}
