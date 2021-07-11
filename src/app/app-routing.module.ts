import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { FilterbooksComponent } from './filterbooks/filterbooks.component';

const routes: Routes = [
  { path: 'author', component: AuthorComponent },
  { path: 'book', component: BookComponent },
  { path: 'filterbooks', component: FilterbooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
