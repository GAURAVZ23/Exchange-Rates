import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL: string = 'https://api.exchangeratesapi.io';

@Injectable()
export class CurrencyViewerService {
    constructor(private http: HttpClient) {
    }

    getRatesLatest(): Observable<object> {
        return this.http.get(`${API_URL}/latest`)
            .pipe(map(data => data), catchError((err: any) => throwError(err)));
    }

    getRatesByQuery(date: any, base: string): Observable<object> {
        return this.http
            .get(`${API_URL}/${date}?base=${base}`)
            .pipe(map(data => data), catchError((err: any) => throwError(err)));
    }
}
