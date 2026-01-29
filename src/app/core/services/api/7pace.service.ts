import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SevenPaceService {

  constructor(private http: HttpClient) { }

  getBudgets(): Observable<any> {
    return this.http.get<any>('https://api.7pace.asteria.work/budgets', {});
  }
}
