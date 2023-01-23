import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //link database
  baseURL = 'http://localhost:3000/products/';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //função para mostrar a mensagem ao criar o produto
  //acionada com o botão de product-create.component.html
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top' 
    })
  }

  //requisição http ao backend
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  //requisicão para buscar os produtos no backend
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }
}