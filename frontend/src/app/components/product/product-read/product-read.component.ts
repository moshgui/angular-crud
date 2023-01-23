import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price'];

  constructor(private productService: ProductService) { }

  //utilizando o product.service.ts com o método read() com req get no backend
  //pegar os produtos no backend e mostrar na tela
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;      
    })
  }
}