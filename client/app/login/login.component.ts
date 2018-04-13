import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isAuthenticated:boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    //private alertService: AlertService
  ) {
    this.isAuthenticated = false;
   }

  ngOnInit() {
    //this.authenticationService.logout();
  }

  login() {
    if(this.model.username && this.model.password) {
     // this.authenticationService.login(this.model.username, this.model.password);
      
      this.router.navigate(['/app-dashboard']);
      return true;
    } else {
      //this.alertService.error("Wrong credentials");
          //         this.loading = false;
    }
      // this.loading = true;
      // this.authenticationService.login(this.model.username, this.model.password)
          // .subscribe(
          //     data => {
          //         this.router.navigate([this.returnUrl]);
          //     },
          //     error => {
          //         this.alertService.error(error);
          //         this.loading = false;
          //     });
  }

}
