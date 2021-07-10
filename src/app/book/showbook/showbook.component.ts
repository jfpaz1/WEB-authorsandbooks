import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  constructor(private sharedService: SharedService) { }

  Book:any=[];

  ngOnInit(): void {
   this.getBooksList();
  }

  getBooksList(){
    this.sharedService.getBooksList().subscribe(data => {
      this.Book = [];
      this.Book = data;
    });
  }

}
