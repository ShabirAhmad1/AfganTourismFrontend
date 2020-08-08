import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../urls'

@Component({
  selector: 'app-top-attraction-multi-card',
  templateUrl: './top-attraction-multi-card.component.html',
  styleUrls: ['./top-attraction-multi-card.component.css']
})
export class TopAttractionMultiCardComponent implements OnInit {
  @Input() limit: number

  data: any = [
  ]
  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  createRange() {
    var items: any = [];
    if (this.limit) {
      let number = this.data.length < 8 ? this.data.length : 8
      for (var i = 0; i < number; i++) {
        items.push(this.data[i]);
      }

      return items;
    }
    else {
      return this.data
    }
  }
  fetchData() {
    this.http.get(`${BASE_URL}/api/posts/views/1/999`).subscribe(
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
          console.log(newData)
        });
        this.data = [...this.data, ...newData]
        this.cdr.detectChanges()
        this.createRange()
        console.log(this.data)
      },
      (err) => {
        console.log(err)
      }
    )
  }
  ngOnInit() {
    this.fetchData()
  }
}
