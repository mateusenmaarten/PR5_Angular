import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './components/session/session.component';
import { SessionEditComponent } from './components/sessionEdit/sessionEdit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const sessionRoutes: Routes = [
  { path: 'session', component: SessionComponent},
  { path: 'session/add/:id', component: SessionEditComponent},
  { path: 'session/edit/:id', component: SessionEditComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sessionRoutes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [SessionComponent,SessionEditComponent]
})
export class SessionsModule { }
