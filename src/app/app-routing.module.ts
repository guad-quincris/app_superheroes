import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';


const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'heroe/:heroe.id', component: HeroeComponent},
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, { useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
