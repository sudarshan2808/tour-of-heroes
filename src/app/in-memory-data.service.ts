import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id:11, name: 'Peter Parker' },
      { id:12, name: 'Tom Cruise' },
      { id:13, name: 'Brad Pitt' },
      { id:14, name: 'Akon' },
      { id:15, name: 'Joe Root' },
      { id:16, name: 'Ben Stokes' },
      { id:17, name: 'Leonardo DiCaprio' },
      { id:18, name: 'Johnny Depp' },
      { id:19, name: 'Virat Kohli' },
      { id:20, name: 'Cristiano Ronaldo' }
    ];
    return {heroes};
  }

  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
