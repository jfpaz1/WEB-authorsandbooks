import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  Book: any = [];
  fileName = 'Books.xlsx';

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList() {
    this.sharedService.getBooksList().subscribe(data => {
      this.Book = [];
      this.Book = data;
    });
  }

  exportExcel() {
    //pass here the table id
    let element = document.getElementById('book-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    //genereate workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Books');

    //save to file
    XLSX.writeFile(wb, this.fileName);
  }

}
