import { usuarioRoutes } from './components/usuario/usuario.routes';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: usuarioRoutes

  },

  // { path: 'path4', component: Name4Component },
  { path: '**', component: HomeComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class FeatureRoutingModule {}
export const app_routing = RouterModule.forRoot(routes)
