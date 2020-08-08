import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../urls'

@Component({
  selector: 'app-cultural-dresses-multi-card',
  templateUrl: './cultural-dresses-multi-card.component.html',
  styleUrls: ['./cultural-dresses-multi-card.component.css']
})
export class CulturalDressesMultiCardComponent implements OnInit {
  @Input() showAll: any
  constructor(
    private http: HttpClient,
  ) { }
  data: any = []
  fetchData() {
    this.http.get(`${BASE_URL}/api/posts/dresses/1/999`).subscribe(
      (obj: any) => {
        console.log(obj)
        let newData = []
        obj.forEach(element => {
          let data = {
            id: element._id,
            title: element.title,
            headerImage: element.images[0] ? element.images[0].link : 'https://homepages.cae.wisc.edu/~ece533/images/frymire.png',
            description: element.description

          }
          newData.push(data)
        });
        this.data = [...this.data, ...newData]
      },
      (err) => {
        console.log(err)
      }
    )
  }
  ngOnInit() {
    this.fetchData()
    if(!this.showAll){
      this.showAll = false
    }
  }
  slideConfig = {
    "slidesToShow": 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    infinite: true,
    speed: 300,
    autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  };
}
