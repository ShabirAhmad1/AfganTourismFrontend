import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.css']
})
export class HotelsPageComponent implements OnInit {

  constructor(private http: HttpClient, private hotelsService : HotelService) { }
  data = []
  maxRank = 0
  fetchResult() {
    // this.http.get('https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng?lang=en_US&currency=USD&latitude=34.53141&longitude=69.13153&limit=99',
    //   {
    //     headers: {
    //       "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    //       "x-rapidapi-key": "6449e6d55fmsh003bf3cb538b707p1991d2jsna78da88c4d13"
    //     }
    //   }).subscribe((obj: any) => {
    //     this.data = obj.data
    //     console.log(this.data)
    //   }, err => {
    //     console.log(err)
    //   })
    this.hotelsService.getHotels().subscribe((obj: any) => {
      // this.data = obj.data
      // console.log(this.data)
      console.log(obj)
      obj.map((v,i)=>{
        if(v.rank > this.maxRank){
          this.maxRank = v.rank
        }
      })
      this.data = obj
    }, err => {
      console.log(err)
    })
  }
  ngOnInit() {
    this.fetchResult()
  }


}
