import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPipe } from './pagination.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalaryPipe } from './salary.pipe';

@NgModule({
  declarations: [AppComponent, PaginationComponent, PaginationPipe, SalaryPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
