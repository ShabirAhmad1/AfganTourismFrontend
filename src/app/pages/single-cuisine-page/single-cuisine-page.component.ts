import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../urls'
import * as moment from 'moment';

@Component({
  selector: 'app-single-cuisine-page',
  templateUrl: './single-cuisine-page.component.html',
  styleUrls: ['./single-cuisine-page.component.css']
})
export class SingleCuisinePageComponent implements OnInit {

  title = ''
  description: ''
  headerImage: ''
  createdBy = ''
  createdAt = 'https://wallpapercave.com/wp/gRAmR7r.jpg'
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    let id = ''
    this.route.paramMap.subscribe((params: any) => {
      console.log(params.params.id)
      id = params.params.id
      this.fetchPost(id)
    });
   }

  fetchPost(id) {
    this.http.get(`${BASE_URL}/api/posts/cuisine/${id}`).subscribe(
      (obj: any) => {
        console.log("FROM")
        console.log(obj)
        this.title = obj.title
        this.description = obj.description
        this.headerImage = obj.images[0] ? obj.images[0].link : 'https://wallpapercave.com/wp/gRAmR7r.jpg'
        this.createdBy = obj.createdBy.name
        this.createdAt=moment(obj.createdAt).fromNow()
        console.log(this.title)
        console.log(this.description)
        console.log(this.headerImage)
        console.log(this.createdBy)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit() {
    
  }
}
