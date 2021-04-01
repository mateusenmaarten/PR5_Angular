import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureEditComponent } from './components/adventureEdit/adventureEdit.component';
import { AdventureComponent } from './components/adventure/adventure.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../_helpers/auth.guard';

const adventureRoutes: Routes = [
  { path: 'adventure', component: AdventureComponent},
  { path: 'adventure/add/:id', component: AdventureEditComponent, canActivate: [AuthGuard]},
  { path: 'adventure/edit/:id', component: AdventureEditComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adventureRoutes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [AdventureComponent,AdventureEditComponent]
})
export class AdventuresModule { }
