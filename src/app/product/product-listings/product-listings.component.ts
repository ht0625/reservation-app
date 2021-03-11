import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any =[
    {
    img: "./assets/img/placeholder.jpg",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      img: "./assets/img/placeholder.jpg",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      img: "./assets/img/placeholder.jpg",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      img: "./assets/img/placeholder.jpg",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
