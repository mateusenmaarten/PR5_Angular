import { Injectable } from '@angular/core';
import { CharacterClass } from '../_models/CharacterClass.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterClassService {
  classes: CharacterClass[] = [
    {
      characterClassID: 1,
      name: 'Wizard',
      description: 'Spelcaster',
      icon: 'fas fa-hat-wizard',
    },
    {
      characterClassID: 2,
      name: 'Barbarian',
      description: 'Big, strong and reckless',
      icon: 'fas fa-dumbbell',
    },
  ];

  constructor() {}

  onGet() {
    return this.classes;
  }
}
