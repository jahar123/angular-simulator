export enum MessageType {
  Success = 'Success',
  Info = 'Info',
  Warn = 'Warn',
  Error = 'Error'
}

export interface ToastMessage {
  type: MessageType;
  message: string;
  id: number;
}

import { FormsModule } from '@angular/forms';
import { Color } from '../enums/Color';
import { Collection } from './collection';
import './training';
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  imports: [ CommonModule,FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  messages: ToastMessage[] = [
    {type: MessageType.Success, message:'Успешно!', id: 1 },
    {type: MessageType.Info, message:'Инфо', id: 2 },
    {type: MessageType.Warn, message: 'Предупреждение', id: 3 },
    {type: MessageType.Error, message: 'Ошибка', id: 4 },
  ];

  messageType = MessageType;
  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';
  liveInput: string = '';
  isLoading: boolean = true;
  currentDate: string = '';
  activeMode: string = 'date';
  clickerCount: number = 0;


  tours = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconUrl: 'people',
    },

    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconUrl: 'shield',
    },

    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      iconUrl: 'tag',
    },
  ];

articles = [
  {
    id: 1,
    title: 'Красивая Италия, какая она в реальности?',
    description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    imageUrl: 'blog_card_coast',
    date: '01/04/2023',
  },

  {
    id: 2,
    title: 'Долой сомнения! Весь мир открыт для вас!',
    description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих....',
    imageUrl: 'blog_card_plane',
    date: '01/04/2023',
  },

  {
    id: 3,
    title: 'Как подготовиться к путешествию в одиночку? ',
    description: 'Для современного мира базовый вектор развития предполагает.',
    imageUrl: 'blog_card_street',
    date: '01/04/2023',
  },

  {
    id: 4,
    title: 'Для современного мира базовый вектор развития предполагает.',
    description: 'Для современного мира базовый.',
    imageUrl: 'blog_card_mosque',
    date: '01/04/2023',
  },
];

  companyTitle: string = 'РУМТИБЕТ';
  stringCollection: Collection<string> = new Collection<string>();
  numberCollection: Collection<number> = new Collection<number>();

  constructor(public toastService: ToastService) {
    this.saveLastVisitDate();
    this.trackVisitsCount();
    setInterval(() => { this.currentDate = new Date().toLocaleString() }, 1000);
    setTimeout(() => { this.isLoading = false }, 2000);
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
    const savedCount: string | null = localStorage.getItem('visitsCount');
    if (!savedCount) {
      localStorage.setItem('visitsCount', '1');
    } else {
      const currentCount = parseInt(savedCount ?? '0') + 1;
      localStorage.setItem('visitsCount', currentCount.toString());
    }
  }

}
