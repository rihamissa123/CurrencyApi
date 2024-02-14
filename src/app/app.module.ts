import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyHttpInterceptor } from 'src/Interceptors/MyHttpInterceptor';
import { CurrenciesComponent } from './currencies/currencies.component';
import { Currency } from './currency.model';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true,},
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }







