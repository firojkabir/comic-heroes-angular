import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Stranger' },
      { id: 12, name: 'Batman' },
      { id: 13, name: 'Superman' },
      { id: 14, name: 'Ironman' },
      { id: 15, name: 'Spiderman' },
      { id: 16, name: 'Thor' },
      { id: 17, name: 'Hulk' },
      { id: 18, name: 'Black Widow' },
      { id: 19, name: 'Captain America' },
      { id: 20, name: 'Joker' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
