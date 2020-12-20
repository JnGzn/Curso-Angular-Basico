import { CargaComponent } from './componets/carga/carga.component';
import { FotosComponent } from './componets/fotos/fotos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'fotos', component: FotosComponent},
  {path: 'carga', component: CargaComponent},
  {path: '**', pathMatch: 'full', component: FotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
