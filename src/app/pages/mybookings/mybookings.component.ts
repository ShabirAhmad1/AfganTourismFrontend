import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  constructor(private hotel: HotelService, private userService : UserService, private router: Router) { }
  data = []
  ngOnInit() {
    if(!this.userService.checkIfLoggedIn()){
      this.router.navigateByUrl('/');
    }
    this.hotel.mybookings().subscribe((obj: any) => {
      console.log(obj)
      this.data = obj
    }, err => {
      console.log(err)
    })
  }
}
