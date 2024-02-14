import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency.model';
import { DataService } from '../data.service';




@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})

export class CurrenciesComponent implements OnInit{
apiDataArray:Currency[]=[];

constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  // getData() {
  //   this.dataService.getApiData().subscribe((data: any) => {
  //     // Assuming the API response structure is { "currencies": { "USD": 1.23, "EUR": 0.89, ... } }
  //     // Adjust this part based on the actual API response structure
  //     const currencies = data.currencies;

  //     for (const currency in currencies) {
  //       if (currencies.hasOwnProperty(currency)) {
  //         const rate = currencies[currency];
  //         const currencyItem: currenciesInfo = { currency, rate };
  //         this.apiDataArray.push(currencyItem);
  //       }
  //     }

  //     console.log('API Response Array:', this.apiDataArray);
  //   });
  // }
  // getData() {
  //   this.dataService.getApiData().subscribe(
  //     (data: any) => {
  //       console.log('Complete API Response:', data);
  //     },
  //     (error) => {
  //       console.error('API Error:', error);
  //     }
  //   );
  // }
// data-display.component.ts
getData() {
  this.dataService.getApiData().subscribe({
    next: (data: any) => {
      console.log('Complete API Response:', data);

      const exchangeRates = data.data;

      // Convert the exchange rate object to an array of Currency objects
      this.apiDataArray = Object.keys(exchangeRates).map((currency) => {
        const rate = exchangeRates[currency];
        return { currency, rate };
      });

      console.log('API Response Array:', this.apiDataArray);
    },
    error: (error) => {
      console.error('API Error:', error);
    }
  });
}



}





  

