import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RulesComponent } from './rules/rules.component';
import { WorldComponent } from './world/world.component';
import { CharacterComponent } from './character/components/character/character.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterEditComponent } from './character/components/characterEdit/characterEdit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdventureComponent } from './adventure/components/adventure/adventure.component';
import { AdventureEditComponent } from './adventure/components/adventureEdit/adventureEdit.component';
import { SessionComponent } from './session/components/session/session.component';
import { SessionEditComponent } from './session/components/sessionEdit/sessionEdit.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'rules', component: RulesComponent},
  { path: 'world', component: WorldComponent},
  { path: 'character', component: CharacterComponent},
  { path: 'character/add/:id', component: CharacterEditComponent},
  { path: 'character/edit/:id', component: CharacterEditComponent},
  { path: 'adventure', component: AdventureComponent},
  { path: 'adventure/add/:id', component: AdventureEditComponent},
  { path: 'adventure/edit/:id', component: AdventureEditComponent},
  { path: 'session', component: SessionComponent},
  { path: 'session/add/:id', component: SessionEditComponent},
  { path: 'session/edit/:id', component: SessionEditComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    PrivacyComponent,
    RulesComponent,
    CharacterComponent,
    CharacterEditComponent,
    AdventureComponent,
    AdventureEditComponent,
    SessionComponent,
    SessionEditComponent,
    WorldComponent,
    NavbarComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing: false}),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
