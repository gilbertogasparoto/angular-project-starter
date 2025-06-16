import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getSession(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  setSession(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  removeSession(key: string): void {
    sessionStorage.removeItem(key);
  }

  getLocal(key: string): string | null {
    return localStorage.getItem(key);
  }

  setLocal(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeLocal(key: string): void {
    localStorage.removeItem(key);
  }
}
