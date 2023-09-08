import { Component,Input } from '@angular/core';
import { currenciesInfo } from '../Models';


@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})

export class CurrenciesComponent {
@Input() name:any;
@Input() symbol:string="";
@Input() array: currenciesInfo[]=[]
}
