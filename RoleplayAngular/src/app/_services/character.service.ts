import { Injectable } from '@angular/core';
import { Character } from '../_models/character.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CharacterClass } from '../_models/CharacterClass.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characters: Character[] = [];
  characterToEdit : Character = new Character;
  url : string = 'https://localhost:44328/api/Character';

  constructor(private http : HttpClient) {}

  onGet() : Observable<Character[]>{
    return this.http.get<Character[]>(this.url);
  }

  onGetCharacter(id : number) : Observable<Character>{
    return this.http.get<Character>(this.url+'/' + id);
  }

  onAdd(character: Character) {
    this.characters.push(character);
  }

  onUpdate(character : Character) : Observable<Character>{
    this.onGetCharacter(character.characterID).subscribe(x => { this.characterToEdit = x; });

    this.characterToEdit.characterID = character.characterID;
    this.characterToEdit.playerID = character.playerID;
    this.characterToEdit.userName = character.player.userName;
    this.characterToEdit.characterClassID = character.characterClassID;
    this.characterToEdit.characterName = character.characterName;
    this.characterToEdit.characterGender = character.characterGender;
    this.characterToEdit.characterDescription = character.characterDescription;
    this.characterToEdit.characterAge = character.characterAge;
    this.characterToEdit.favouriteWeapon = character.favouriteWeapon;
    this.characterToEdit.homeTown = character.homeTown;

    console.log(this.characterToEdit);

    return this.http.put<Character>(this.url + '/' + character.characterID, this.characterToEdit);
  }

  onDelete(id: number) {
    let character = this.characters.find(x => x.characterID === id);
    let index = this.characters.indexOf(character, 0);
    this.characters.splice(index,1);
  }
}
