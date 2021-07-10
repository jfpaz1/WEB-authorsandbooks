import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // constructor(private sharedService: SharedService) { }

  // Author:any=[];

  // ngOnInit(): void {
  //   this.getAuthorsList();
  // }

  // getAuthorsList(){
  //   this.sharedService.getAutorsList().subscribe(data => {
  //     this.Author = [];
  //     this.Author = data;
  //   });
  // }

}
