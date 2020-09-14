import { SalesData } from './../models/sales-data';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { mockSalesTableData } from './../data/sales-data';

@Injectable()
export class SalesDataService {
    constructor(){}


    fetchSalesData(): Observable<SalesData[]>{
        return of(mockSalesTableData);
    }
}