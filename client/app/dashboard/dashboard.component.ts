import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  type: any
  loggedin: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private AutentificationService: AuthService,
    private UserService: UserService) {
      this.loggedin = JSON.parse(localStorage.getItem('currentUser')) ? true:false;
     }

  ngOnInit() {
    //this.type = this.UserService.getType();
  }

  logout() {
    //this.loggedin = this.AutentificationService.logout();
    this.router.navigate(['/app-login']);
  }

}
