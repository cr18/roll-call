import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router) { }

  ngOnInit() {}

  register() {
    this.loading = true;
   // this.alertService.success('Registration successful', true);
//     this.userService.create(this.model)
//         .subscribe(
//             data => {
//                 this.alertService.success('Registration successful', true);
//                 this.router.navigate(['/login']);
//             },
//             error => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             });
 }

}
