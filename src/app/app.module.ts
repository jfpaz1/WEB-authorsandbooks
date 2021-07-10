import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowauthorComponent } from './author/showauthor/showauthor.component';
import { ShowbookComponent } from './book/showbook/showbook.component';
import { FilterbooksComponent } from './filterbooks/filterbooks.component';
import { ShowfilterbooksComponent } from './filterbooks/showfilterbooks/showfilterbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    BookComponent,
    ShowauthorComponent,
    ShowbookComponent,
    FilterbooksComponent,
    ShowfilterbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
