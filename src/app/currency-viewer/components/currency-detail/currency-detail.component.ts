import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Variations } from './../../models/variations.interface';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.scss']
})
export class CurrencyDetailComponent implements OnInit {
  baseIndexes: Array<string>;

  @Input()
  item: object;
  @Input()
  baseKeys: Variations[];
  @Input()
  sort: string;

  @Output()
  sortclicked: EventEmitter<any> = new EventEmitter<any>();

  // Check for currency base options from list
  isBase(base: string): boolean {
    this.baseIndexes = this.baseKeys.map((item) => item.value);
    return this.baseIndexes.includes(base);
  }

  // Sanitize data for NaN values 
  coerceInt(value) {
    if (isNaN(value)) {
      return parseInt(value);
    }
  }

  getBuyRate(value: any) {
    this.coerceInt(value);
    return value - (value * .05);
  }

  getSellRate(value: any) {
    this.coerceInt(value);
    return value + (value * .05)
  }

  handleSort() {
    this.sortclicked.emit();
  }

  ngOnInit() {
  }

}
