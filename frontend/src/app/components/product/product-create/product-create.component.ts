import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //implementando Service e Rotas
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {}

  //mostra a mensagem que o produto foi criado
  createProduct(): void {
    this.productService.showMessage('Produto criado com sucesso!');
  }

  //retorna para a página de produtos
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
