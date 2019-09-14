import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatsComponent } from './cats/cats.component';
import {CatDetailComponent} from './cat-detail/cat-detail.component';


const routes: Routes = [
  { path : 'cats' , component: CatsComponent },
  { path : 'cats/:id' , component : CatDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
