import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// containers
import { CurrencyViewerComponent } from './containers/currency-viewer/currency-viewer.component';

// components
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { CurrencyDetailComponent } from './components/currency-detail/currency-detail.component';

// service
import { CurrencyViewerService } from './currency-viewer.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        CurrencyViewerComponent,
        CurrencySelectorComponent,
        CurrencyDetailComponent
    ],
    exports: [
        CurrencyViewerComponent
    ],
    providers: [
        CurrencyViewerService
    ]
})
export class CurrencyViewerModule { }
