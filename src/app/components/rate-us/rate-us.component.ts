import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BASE_URL} from '../../urls'
@Component({
  selector: 'app-rate-us',
  templateUrl: './rate-us.component.html',
  styleUrls: ['./rate-us.component.css']
})
export class RateUsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  actualRate: any = false
  userRating: any = 5
  hidden: boolean = false
  errMessage: boolean = false
  ngOnInit() {
    this.http.get(`${BASE_URL}/api/reviews/rating`).subscribe(
      (obj: any)=>{
        console.log(obj)
        this.actualRate = obj.rating.toFixed(1)
      },
      err=>{
        console.log(err)
      }
    )
  }

  convertedRate(){
    return this.actualRate
  }

  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   this.userRating = $event.newValue
  // }
  submit(form){
    let dataPacket={
      ...form.value,
      rating: this.userRating
    }
    this.http.post(`${BASE_URL}/api/reviews`,dataPacket).subscribe(obj=>{
      console.log(obj) 
     this.hidden = true
    }, err=>{
      console.log(err)
      this.errMessage = true
    })
  }

}
