import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService,  private router: Router) { }
  error = null

  ngOnInit() {
    if(this.service.checkIfLoggedIn()){
      this.router.navigateByUrl('/');
    }
  }

  submit({ value }) {
    this.service.login(value)
      .subscribe(
        (obj: any) => {
          this.service.setUpuser(obj)
          this.router.navigateByUrl('/');
        },
        (err) => {
          console.log(err)
          this.error = err.error.Reason
          console.log(this.error)
        }
      )
  }
}
