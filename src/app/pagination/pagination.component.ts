import { Component, OnInit } from '@angular/core';
import { getDataService } from '../getData.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  result: any[] = [];
  currentPage = 1;
  itemsPerPage: number = 5;

  itemsPerPageOptions = [5, 10, 15, 20];
  noOfPages!: number;
  constructor(private getDataService: getDataService) {}

  ngOnInit(): void {
    this.getDataService.getData().subscribe((data) => {
      this.result = data;
      this.noOfPages = Math.ceil(this.result.length / this.itemsPerPage);

      console.log(this.result, this.noOfPages);
    });
  }
  onChange(selectedValue: any) {
    this.currentPage = 1;
    this.itemsPerPage = selectedValue.target.value;
    this.noOfPages = Math.ceil(this.result.length / this.itemsPerPage);
  }
  onPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  onNext() {
    if (this.currentPage < this.noOfPages) {
      this.currentPage++;
    }
  }
}
