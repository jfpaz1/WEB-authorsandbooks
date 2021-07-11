import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-showauthor',
  templateUrl: './showauthor.component.html',
  styleUrls: ['./showauthor.component.css']
})
export class ShowauthorComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  Author: any = [];
  fileName = 'Authors.xlsx';

  ngOnInit(): void {
    this.getAuthorsList();
  }

  getAuthorsList() {
    this.sharedService.getAutorsList().subscribe(data => {
      this.Author = [];
      this.Author = data;
    });
  }

  exportExcel() {
    //pass here the table id
    let element = document.getElementById('author-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    //genereate workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Authors');

    //save to file
    XLSX.writeFile(wb, this.fileName);
  }

}
