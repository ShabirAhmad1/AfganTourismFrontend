import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: UserService,  private router: Router) { }
  error = null

  ngOnInit() {
    if(this.service.checkIfLoggedIn()){
      this.router.navigateByUrl('/');
    }
  }

  submit({ value }) {
    console.log(value)
    this.service.signup(value)
      .subscribe(
        (obj: any) => {
          console.log(obj)
          this.service.setUpuser(obj)
          this.router.navigateByUrl('/');
        },
        (err) => {
          console.log(err)
        }
      )
  }

}
