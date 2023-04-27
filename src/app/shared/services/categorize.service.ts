import { Injectable } from '@angular/core';
import { products } from '../common data/constants';

@Injectable({
  providedIn: 'root'
})
export class CategorizeService {

  constructor() { }
  tempObj = products
}
