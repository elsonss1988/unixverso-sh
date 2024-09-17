import { Injectable } from '@angular/core';
import * as data from '../data/distroInfo.json';

@Injectable({
  providedIn: 'root',
})
export class DistrosService {
  constructor() {}

  getDistros() {
    return data.distroInfo;
  }
}
