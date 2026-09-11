import{Color} from '../enums/Color';
import {Collection } from './collection';
import './training';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

companyTitle: string = 'РУМТИБЕТ';
stringCollection: Collection<string> = new Collection<string>();
numberCollection: Collection<number> = new Collection<number>();

constructor() {
  this.saveLastVisitDate();
  this.trackVisitsCount();
}

isPrimaryColor(color: Color): boolean {
  if (color === Color.RED || color === Color.GREEN || color === Color.BLUE) {
  return true;
  }  
  return false;
  }

  private saveLastVisitDate(): void {
    localStorage.setItem('lastVisit', new Date().toISOString());
  }

  private trackVisitsCount(): void {
  const savedCount = localStorage.getItem('visitsCount');
  if (!savedCount) {
    localStorage.setItem('visitsCount', '1');
  } else {
    const currentCount = parseInt(savedCount ?? '0') + 1;
    localStorage.setItem('visitsCount', currentCount.toString()); 
  }
}

}
