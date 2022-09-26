import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  isAuthenticated() {
    const user = this.localStorageService.get('user');
    return user === null ? false : true
  }
  me() {
    return this.localStorageService.get('user');
  }

}
