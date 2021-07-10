import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-showauthor',
  templateUrl: './showauthor.component.html',
  styleUrls: ['./showauthor.component.css']
})
export class ShowauthorComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  Author:any=[];

  ngOnInit(): void {
    this.getAuthorsList();
  }

  getAuthorsList(){
    this.sharedService.getAutorsList().subscribe(data => {
      this.Author = [];
      this.Author = data;
    });
  }

}
