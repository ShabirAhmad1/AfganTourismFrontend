import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HotelService } from 'src/app/services/hotel.service';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private router: Router, private Auth: UserService, private http: HttpClient, private hotel: HotelService, private route: ActivatedRoute) {

  }
  id = null
  item = null
  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.params.id
    });
    if (!this.Auth.checkIfLoggedIn()) {
      this.router.navigateByUrl('/log-in');
    }
    else {
      this.hotel.getHotel(this.id).subscribe((obj: any) => {
        this.item = obj
      }, err => {
        console.log(err)
      })
    }
  }

  onSubmit(data) {
    data.value.hotelId = this.id
    this.hotel.bookHotel(data.value).subscribe((obj: any) => {
      this.router.navigateByUrl('/my-bookings');
    }, err => {
      console.log(err)
    })
  }

}
