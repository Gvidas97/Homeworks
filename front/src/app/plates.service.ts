import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  uri = 'http://localhost:4000/plates';

  constructor(private http: HttpClient) { }

  addPlate(plateName, plateSurname, platePlates) {
    const obj = {
      plateName,
      plateSurname,
      platePlates
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getPlates() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editPlates(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updatePlates(plateName, plateSurname, platePlates, id) {
      const obj = {
        plateName,
        plateSurname,
        platePlates
      };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  deletePlate(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
  
}