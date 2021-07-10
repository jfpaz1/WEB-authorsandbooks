import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: 'author',component:AuthorComponent},
  { path: 'book', component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
