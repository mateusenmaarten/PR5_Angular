import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './components/character/character.component';
import { CharacterEditComponent } from './components/characterEdit/characterEdit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../_helpers/auth.guard';

const characterRoutes: Routes = [
  { path: 'character', component: CharacterComponent},
  { path: 'character/add/:id', component: CharacterEditComponent, canActivate: [AuthGuard]},
  { path: 'character/edit/:id', component: CharacterEditComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(characterRoutes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [CharacterComponent, CharacterEditComponent]
})
export class CharactersModule { }
