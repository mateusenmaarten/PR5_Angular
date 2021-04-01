import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterClass } from '../models/characterClass.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterClassService {
  classes: CharacterClass[] = [];
  //   {
  //     characterClassID: 1,
  //     name: 'Wizard',
  //     description: 'Spelcaster',
  //     icon: 'fas fa-hat-wizard',
  //   },
  //   {
  //     characterClassID: 2,
  //     name: 'Barbarian',
  //     description: 'Big, strong and reckless',
  //     icon: 'fas fa-dumbbell',
  //   },
  // ];

  url : string = "https://localhost:44328/api/CharacterClass";

  constructor(private http : HttpClient) {}

  onGet() : Observable<CharacterClass[]> {
    return this.http.get<CharacterClass[]>(this.url);
  }
}
