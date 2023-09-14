import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  searchForm = this.formBuilder.group({
    info: '',
  });

  constructor(private formBuilder: FormBuilder) {
    
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onSubmit(): void {
    // Process checkout data here
    let srch: string = this.searchForm.value.info || '';
    if (srch.trim().length == 0) {
      this.products = [...products];
    } else {
      this.products = this.products.filter((product) => {
        return product.name.indexOf(srch) > -1;
      });
    }

    //this.searchForm.reset();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
