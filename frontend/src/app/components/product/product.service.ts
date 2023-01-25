import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //link database
  baseURL = 'http://localhost:3000/products/';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //função para mostrar a mensagem ao criar o produto
  //acionada com o botão de product-create.component.html
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg.success']
    })
  }

  //requisição http ao backend
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(
      map((obj) => obj),
      catchError(e => this.handleError(e))
    );
  }

  handleError(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY    
  };  

  //requisicão para buscar os produtos no backend
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  //método para buscar um produto pelo seu id
  readById(id: string | null): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Product>(url);
  }

  //atualizar um produto pelo seu id
  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  //deletar produto
  delete(id: string): Observable<Product> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Product>(url);
  }
}