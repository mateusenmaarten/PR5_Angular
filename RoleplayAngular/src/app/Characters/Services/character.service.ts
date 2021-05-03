import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CharacterClass } from '../models/characterClass.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characters: Character[] = [];
  characterToEdit : Character = new Character;
  url : string = environment.apiUrl + 'Character';

  constructor(private http : HttpClient) {}

  onGet() : Observable<Character[]>{
    return this.http.get<Character[]>(this.url);
  }

  onGetCharacterById(id : number) : Observable<Character>{
    return this.http.get<Character>(this.url+'/' + id);
  }

  onAdd(character: Character) : Observable<any>{
    return this.http.post(this.url, character);
  }

  onUpdate(character : Character) : Observable<Character>{
    this.onGetCharacterById(character.characterID).subscribe(x => { this.characterToEdit = x; });

    this.characterToEdit.player = character.player;
    this.characterToEdit.characterID = character.characterID;
    this.characterToEdit.playerID = character.playerID;
    this.characterToEdit.userName = character.userName;
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
    return this.http.delete(this.url+'/' + id);
  }
}
