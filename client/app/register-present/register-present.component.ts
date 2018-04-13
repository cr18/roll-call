import { Component, OnInit } from '@angular/core';
import { RollCallService } from '../services/roll-call.service';

@Component({
  selector: 'app-register-present',
  templateUrl: './register-present.component.html',
  styleUrls: ['./register-present.component.css']
})
export class RegisterPresentComponent implements OnInit {
  code: number;
  network: boolean;

  constructor(
    private rollCallService: RollCallService
  ) { }

  ngOnInit() {
  }


  checkNetwork() {
    this.network = true;
  }
}
