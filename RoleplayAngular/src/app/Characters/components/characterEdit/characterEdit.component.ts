import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Player } from 'src/app/_models/player.model';
import { CharacterClassService } from 'src/app/Characters/services/characterClass.service';
import { CharacterClass } from 'src/app/characters/models/characterClass.model';
import { Character } from 'src/app/characters/models/character.model';
import { CharacterService } from 'src/app/Characters/services/character.service';

@Component({
  selector: 'app-characterEdit',
  templateUrl: './characterEdit.component.html',
  styleUrls: ['./characterEdit.component.scss'],
})
export class CharacterEditComponent implements OnInit {
  id: number;
  header: string;

  classes: CharacterClass[] = [];

  character: Character = {
    characterID: 0,
    playerID: 0,
    userName: '',
    characterClassID: 0,
    characterName: '',
    characterGender: '',
    characterDescription: '',
    characterAge: 0,
    favouriteWeapon: '',
    homeTown: '',
  };
  username: string;
  playerId: number;
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private characterClassService: CharacterClassService,
    private router : Router
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Character' : 'Edit Character';

    if (this.id != 0) {
      this.characterService.onGetCharacterById(this.id).subscribe((x) => {
        this.character = x;
      });
    }

    this.characterClassService.onGet().subscribe((x) => {
      this.classes = x;
    });

    var user = JSON.parse(localStorage.getItem('user'));
    this.username = user.username;
    this.playerId = user.playerId;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let character: Character = {
      characterID: this.id,
      characterName: form.value.name,
      characterDescription: form.value.description,
      characterClassID: form.value.classID,
      characterGender: form.value.gender,
      characterAge: form.value.age,
      favouriteWeapon: form.value.favouriteWeapon,
      homeTown: form.value.homeTown,
      playerID: this.playerId,
      userName: this.username
    };

    if (this.id === 0) {
      //Add mode
      this.characterService.onAdd(character).subscribe(x =>{
        console.log(x);
        this.router.navigate(['/character']);
      });
    } else {
      //Update mode
      this.characterService.onUpdate(character).subscribe(x =>{
        console.log(x);
        this.router.navigate(['/character']);
      });
    }
  }
}
