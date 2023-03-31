import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
})
export class ProductComponentComponent {
  constructor() {}

  @Input() product: any = {};
}
