import { environment } from './../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { News } from 'app/news/news';

@Injectable()
export class NewsService {
  private readApi = environment.readApi;
  private apiKey = environment.apiKey;

  constructor(private http: Http) { }

  getBBCNews(): Promise<News[]> {
    const getNewsApi = this.readApi + this.apiKey;

    return this.http.get(getNewsApi)
      .toPromise()
      .then(response => response.json().articles as News[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
