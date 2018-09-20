import { Component, OnInit } from '@angular/core';
import { Currency } from '../../models/currency.interface';
import { CurrencyViewerService } from './../../currency-viewer.service';
import { Variations } from '../../models/variations.interface';

@Component({
    selector: 'app-currency-viewer',
    templateUrl: './currency-viewer.component.html',
    styleUrls: ['./currency-viewer.component.scss']
})
export class CurrencyViewerComponent implements OnInit {
    exchangeRate: Array<object>;
    currency: Currency;
    sortDirection: string = 'desc';
    sortedItems: Array<object>;
    sortedData: Array<object>;
    baseChoices: Variations[] = [
        {
            key: 'EUR',
            value: 'EUR'
        },

        {
            key: 'USD',
            value: 'USD'
        },

        {
            key: 'GBP',
            value: 'GBP'
        },

        {
            key: 'AUD',
            value: 'AUD'
        },

        {
            key: 'CAD',
            value: 'CAD'
        },
        {
            key: 'JPY',
            value: 'JPY'
        },
    ];

    constructor(private currencyService: CurrencyViewerService) { }

    // Show EUR Base rates on load
    ngOnInit() {
        this.currencyService.getRatesLatest()
            .subscribe((data: Currency) => {
                this.currency = data;
                this.exchangeRate = this.formatData(data.rates);
            });
    }

    onFetchCurrency(event: any) {
        this.currencyService.getRatesByQuery(event.date, event.base)
            .subscribe((data: Currency) => {
                this.currency = data;
                this.exchangeRate = this.formatData(data.rates);
            });
    }

    // Format incoming data from API
    formatData(obj: object) {
        let sortedData = [];
        Object.keys(obj).forEach(key => {
            sortedData.push({
                'code': key,
                'rate': obj[key]
            })
        });
        return sortedData;
    }

    sortObjAsc(objarr: Array<any>) {
        return objarr.sort((a, b) => a.code > b.code ? 1 : a.code < b.code ? -1 : 0);
    }

    sortObjDesc(objarr: Array<any>) {
        return objarr.sort((a, b) => a.code > b.code ? -1 : a.code < b.code ? 1 : 0);
    }

    sortBase() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        if (this.sortDirection === 'asc') {
            this.sortedItems = this.sortObjAsc(this.exchangeRate);
        } else if (this.sortDirection === 'desc') {
            this.sortedItems = this.sortObjDesc(this.exchangeRate)
        }
    }

    onSortClicked(e: any) {
        this.sortBase();
        this.exchangeRate = this.sortedItems;
    }

}
