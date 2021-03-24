import { Injectable } from '@angular/core';
import { Character } from '../_models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characters: Character[] = [
    {
      characterID: 1,
      playerID: 1,
      userName: 'Maarten',
      characterClassID: 1,
      characterName: 'Bernard',
      characterGender: 'Male',
      characterDescription: 'Mighty healer',
      characterAge: 32,
      favouriteWeapon: 'Mace',
      homeTown: 'Phandalin',
    },
    {
      characterID: 2,
      playerID: 2,
      userName: 'Bert',
      characterClassID: 1,
      characterName: 'Gork',
      characterGender: 'Male',
      characterDescription: 'Brutal fighter',
      characterAge: 25,
      favouriteWeapon: 'Club',
      homeTown: 'Azaroth',
    },
    {
      characterID: 3,
      playerID: 3,
      userName: 'Jan',
      characterClassID: 2,
      characterName: 'Habib',
      characterGender: 'Male',
      characterDescription: 'Trader at hearth',
      characterAge: 56,
      favouriteWeapon: 'Dagger',
      homeTown: 'Haven',
    },
  ];

  constructor() {}

  onGet() {
    return this.characters;
  }

  onGetCharacter(id : number){
    return this.characters.find(x => x.playerID === id);
  }

  onAdd(character: Character) {
    this.characters.push(character);
  }

  onUpdate(character : Character){
    let characterToEdit = this.characters.find(x => x.characterID === character.characterID);
    characterToEdit.characterID = character.characterID;
    characterToEdit.playerID = character.playerID;
    characterToEdit.userName = character.userName;
    characterToEdit.characterClassID = character.characterClassID;
    characterToEdit.characterName = character.characterName;
    characterToEdit.characterGender = character.characterGender;
    characterToEdit.characterDescription = character.characterDescription;
    characterToEdit.characterAge = character.characterAge;
    characterToEdit.favouriteWeapon = character.favouriteWeapon;
    characterToEdit.homeTown = character.homeTown;
  }

  onDelete(id: number) {
    let character = this.characters.find(x => x.characterID === id);
    let index = this.characters.indexOf(character, 0);
    this.characters.splice(index,1);
  }
}
