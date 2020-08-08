import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment'

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  originSearch: any = false
  originSelected: any = new FormControl('')
  destinationSelected: any = new FormControl('')

  originErr: boolean = false
  destinationErr: boolean = false

  originNotfoundErr: boolean = false
  destinationAirport: any
  time: any = new FormControl('Anytime')
  origin = new FormControl('');
  noflightfound : any = false
  flightsData = []
  ngOnInit() {
  }
  fetchAirports(value) {
    console.log(value)
    // this.originSearch = [{"PlaceId":"STOC-sky","PlaceName":"Stockholm","CountryId":"SE-sky","RegionId":"","CityId":"STOC-sky","CountryName":"Sweden"},{"PlaceId":"ARN-sky","PlaceName":"Stockholm Arlanda","CountryId":"SE-sky","RegionId":"","CityId":"STOC-sky","CountryName":"Sweden"},{"PlaceId":"NYO-sky","PlaceName":"Stockholm Skavsta","CountryId":"SE-sky","RegionId":"","CityId":"STOC-sky","CountryName":"Sweden"},{"PlaceId":"VST-sky","PlaceName":"Stockholm Vasteras","CountryId":"SE-sky","RegionId":"","CityId":"STOC-sky","CountryName":"Sweden"},{"PlaceId":"BMA-sky","PlaceName":"Stockholm Bromma","CountryId":"SE-sky","RegionId":"","CityId":"STOC-sky","CountryName":"Sweden"}]
    this.http.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${value}`,
      {
        headers: {
          "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key": "6449e6d55fmsh003bf3cb538b707p1991d2jsna78da88c4d13"
        }
      }).subscribe((obj: any) => {
        this.originSearch = []
        this.originErr = false
        console.log(obj)
        this.originSearch = obj.Places
        console.log(this.originSearch)
        if (this.originSearch.length < 1) {
          this.originNotfoundErr = true
          this.originSearch = false
        }
      }, err => {
        console.log(err)
      })

  }
  submit() {
    let err = false
    this.destinationErr = false
    this.originErr = false
    // console.log(this.time)

    if (!this.originSelected.value) {
      this.originErr = true
    }
    if (!this.destinationSelected.value) {
      this.destinationErr = true
    }
    
    if(this.time.value !== 'Anytime'){
      if(this.time.value.month.toString().length < 2){
        this.time.value.month = '0' + this.time.value.month.toString()
      }
      if(this.time.value.day.toString().length < 2){
        this.time.value.day = '0' + this.time.value.day.toString()
      }
      this.time.value = `${this.time.value.year}-${this.time.value.month}-${this.time.value.day}`
    }

    if (!err) {
      console.log(this.destinationSelected.value)
      console.log(this.originSelected.value)
      console.log(this.time.value)
     
      console.log('Make call')
      this.http.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${this.originSelected.value}/${this.destinationSelected.value}/${this.time.value}`,
        {
          headers: {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "6449e6d55fmsh003bf3cb538b707p1991d2jsna78da88c4d13"
          }
        }).subscribe((obj: any) => {
          
          this.flightsData = []
          console.log(obj)
          if(obj.Quotes.length < 1){
            this.noflightfound = true
          }else{
            obj.Quotes.forEach(element => {
              let tmp = {
                price : '',
                origin : '',
                originC : '',
                destination : '',
                destinationC : '',
                service : '',
                departureTime : ''
              }
              tmp.price = element.MinPrice
              tmp.origin = obj.Places.filter((v)=> (v.PlaceId == element.OutboundLeg.OriginId))[0].Name
              tmp.originC = obj.Places.filter((v)=> (v.PlaceId == element.OutboundLeg.OriginId))[0].CountryName
              tmp.destination = obj.Places.filter((v)=> (v.PlaceId == element.OutboundLeg.DestinationId))[0].Name
              tmp.destinationC = obj.Places.filter((v)=> (v.PlaceId == element.OutboundLeg.DestinationId))[0].CountryName
              tmp.service = obj.Carriers.filter((v)=> (v.CarrierId == element.OutboundLeg.CarrierIds[0]))[0].Name
              tmp.departureTime = moment(element.OutboundLeg.DepartureDate).format('hh:mm MM-DD-YYYY')
              this.flightsData.push(tmp)
            });
          }
        }, err => {
          console.log(err)
        })
    }
  }
}
