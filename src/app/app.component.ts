
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency} from './currency.model';
import { CurrenciesComponent } from './currencies/currencies.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  apiData: any;
  currencies:Currency[]=[]

  constructor(private http: HttpClient) {}

  ngOnInit() {
   
  }

 

}



