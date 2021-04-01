import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RulesComponent } from './rules/rules.component';
import { WorldComponent } from './world/world.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersModule } from './Characters/Characters.module';
import { CoreModule } from './Core/Core.module';
import { AdventuresModule } from './Adventures/Adventures.module';
import { SessionsModule } from './Sessions/Sessions.module';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'rules', component: RulesComponent},
  { path: 'world', component: WorldComponent},
  { path: 'character', loadChildren: './Characters/characters.module#CharactersModule'},
  { path: 'character/add/:id', loadChildren: './Characters/characters.module#CharactersModule'},
  { path: 'character/edit/:id', loadChildren: './Characters/characters.module#CharactersModule'},
  { path: 'adventure', loadChildren: './Adventures/adventures.module#AdventuresModule'},
  { path: 'adventure/add/:id', loadChildren: './Adventures/adventures.module#AdventuresModule'},
  { path: 'adventure/edit/:id', loadChildren: './Adventures/adventures.module#AdventuresModule'},
  { path: 'session', loadChildren: './Sessions/sessions.module#SessionsModule'},
  { path: 'session/add/:id', loadChildren: './Sessions/sessions.module#SessionsModule'},
  { path: 'session/edit/:id', loadChildren: './Sessions/sessions.module#SessionsModule'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    PrivacyComponent,
    RulesComponent,
    WorldComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing: false}),
    HttpClientModule,
    CoreModule,
    CharactersModule,
    AdventuresModule,
    SessionsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
