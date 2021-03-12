import { Component, OnInit } from '@angular/core';
// import { products } from '../../products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts()


    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data
        // console.log('次のデータが出力されました： ' + data)
        // debugger
      },
      (err) => {console.error('something wrong occurred: ' + err)}
    )
    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');
  }

}
