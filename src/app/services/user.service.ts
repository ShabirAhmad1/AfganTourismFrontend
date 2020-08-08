import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../urls'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  navigateToSignUp() {
    this.router.navigateByUrl('/sign-up');
  }
  setUpuser(data) {
    localStorage.setItem('User', JSON.stringify(data))
  }
  getToken(){
    return localStorage.getItem('User') && JSON.parse(localStorage.getItem('User')).token
  }
  checkIfLoggedIn() {
    let isloggedIn = localStorage.getItem('User')
    if (isloggedIn) {
      return true
    }
    else{
      return false
    }
  }
  login(value) {
    return this.http.post(`${BASE_URL}/api/user/login`, {
      email: value.email,
      password: value.Password
    })
  }
  signup(value) {
    return this.http.post(`${BASE_URL}/api/user/signup`, {
      name: value.name,
      email: value.email,
      password: value.Password
    })
  }

  signOut(){
    localStorage.clear();
  }

}
