import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Currency } from './../../models/currency.interface';
import { Variations } from '../../models/variations.interface';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent {
  @Input() query: Currency;
  @Input() bases: Variations[];

  @Output()
  fetch: EventEmitter<any> = new EventEmitter<any>();


  handleSubmit(query: object) {
    this.fetch.emit(query);
  }

}
