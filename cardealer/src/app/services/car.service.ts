import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  private getUrl: string = "http://localhost:8000/api/v1/car"
  
  constructor(private httpClient: HttpClient) { }

  getCar(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.getUrl}`);
  }

  createCar(car: Car): Observable<Object> {
    return this.httpClient.post(`${this.getUrl}`, car);
  }

  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${this.getUrl}/${id}`);
    
  }

  updateCar(id: number, car: Car): Observable<Object> {
    return this.httpClient.put(`${this.getUrl}/${id}`, car);
  } 

  deleteCar(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.getUrl}/${id}`);
  }
  
}
