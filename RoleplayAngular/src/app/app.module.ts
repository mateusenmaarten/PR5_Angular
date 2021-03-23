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
import { CharacterCreateComponent } from './character/components/characterCreate/characterCreate.component';
import { CharacterDetailComponent } from './character/components/characterDetail/characterDetail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'rules', component: RulesComponent},
  { path: 'world', component: WorldComponent},
  { path: 'character', component: CharacterComponent},
  { path: 'create-character', component: CharacterCreateComponent},
  { path: 'detail-character', component: CharacterDetailComponent},
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
    CharacterCreateComponent,
    CharacterDetailComponent,
    WorldComponent,
    NavbarComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
