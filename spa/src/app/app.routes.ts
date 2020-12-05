import { HeroesComponent } from './components/heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  // { path: 'path3', component: Name3Component },
  // { path: 'path4', component: Name4Component },
  { path: '**', component: HomeComponent },


];


export const APP_ROUTING = RouterModule.forRoot(routes);
