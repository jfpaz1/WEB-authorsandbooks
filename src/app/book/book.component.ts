import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // constructor(private sharedService: SharedService) { }

  // Book:any=[];

  // ngOnInit(): void {
  //   this.getBooksList();
  // }

  // getBooksList(){
  //   this.sharedService.getBooksList().subscribe(data => {
  //     this.Book = [];
  //     this.Book = data;
  //   });
  // }

}
