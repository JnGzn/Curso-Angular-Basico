import { TemplateComponent } from './pages/template/template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  {path:'', component: ReactiveComponent},
  {path:'template', component: TemplateComponent},
  {path:'reactivo', component: ReactiveComponent},
  {path:'**', pathMatch:'full' ,component: ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
