import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../urls'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient, private router: Router) { }
  getHotels(){
      return this.http.get(`${BASE_URL}/api/posts/hotels/`)
  }
  getHotel(id){
    return this.http.get(`${BASE_URL}/api/posts/hotel/${id}`)
  }
  bookHotel(data){
    return this.http.post(`${BASE_URL}/api/posts/book/hotel`,data)
  }
  mybookings(){
    return this.http.get(`${BASE_URL}/api/posts/book/hotel`)
  }


}
