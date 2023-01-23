import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = {
    name: 'Produto de Teste',
    price: 123.49,
  }

  //implementando Service e Rotas
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {}

  //mostra a mensagem que o produto foi criado
  //retorna para a página de produtos após a criação do produto
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  //retorna para a página de produtos
  cancel(): void {
    this.router.navigate(['/products']);
  }
}