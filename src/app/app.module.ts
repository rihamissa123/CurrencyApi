import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from 'src/Interceptors/MyHttpInterceptor';
import { CurrenciesComponent } from './currencies/currencies.component';
import { currenciesInfo } from './Models';


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
    useClass: ApiKeyInterceptor,
    multi: true,},],
  bootstrap: [AppComponent]
})
export class AppModule { }







