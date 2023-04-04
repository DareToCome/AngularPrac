import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  base_url = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  user(url: string) {
    let headers = {
      'X-GitHub-Api-Version': '2022-11-28',
      auth: 'YOUR-TOKEN',
    };
    return this.http.get(this.base_url + url);
  }
}
