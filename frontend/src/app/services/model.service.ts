import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ModelService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

    url = this.baseUrl + '/models/';
    
    getModels(){
      return this.httpClient.get<JSON[]>(this.url);
    }
    
    createModel(data: JSON){
      return this.httpClient.post<JSON>(this.url, data)
    }

    getModel(id: number){
      const url = `${this.url}${id}`
      return this.httpClient.get(url);
    }

    deleteModel(id: number){
      const url = `${this.url}${id}`
      return this.httpClient.delete<JSON>(url);
    }

    editModel(id: number, data: JSON){
      const url = `${this.url}${id}`
      return this.httpClient.put<JSON>(url, data);
    }

}
