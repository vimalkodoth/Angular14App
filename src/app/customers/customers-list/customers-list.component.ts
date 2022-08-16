import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  private _customers: any[] = [];

  @Input() get customers(): any[] {
    return this._customers;
  }

  set customers(value: any[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: any[] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'INR';
  isVisible = true;

  constructor(private sorterService: SorterService) {}

  ngOnInit() {
    return 0;
  }

  // ngOnChanges(changes: SimpleChanges) {}

  filter(value: string) {
    console.log(this._customers);
    this.filteredCustomers = this._customers.filter((cust) =>
      cust.name.toLowerCase().startsWith(value.toLowerCase())
    );
    console.log(this.filteredCustomers);
    this.calculateOrders();
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(sortBy: string) {
    this.sorterService.sort(this.filteredCustomers, sortBy);
  }
}
