import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    return accessToken;
  }

  getRefreshToken() {
    const refreshToken = localStorage.getItem('refresh_token');
    return refreshToken;
  }

  setAccessToken(value: string) {
    localStorage.setItem('access_token', value);
  }

  setRefreshToken(value: string) {
    localStorage.setItem('refresh_token', value);
  }

  removeAccessToken() {
    localStorage.removeItem('access_token');
  }

  removeRefreshToken() {
    localStorage.removeItem('refresh_token');
  }

  get(key: string) {
    let str: string | null = localStorage.getItem(key) || null;
    if (str === null) return null;
    return JSON.parse(str);
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key : string){
    localStorage.removeItem(key);
  }
}
