import { Component, OnInit } from '@angular/core';
import { RollCallService } from '../services/roll-call.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  code: number = 0;

  constructor(
    private rollCallService: RollCallService
  ) { }

  ngOnInit() {
  }

  generate(event) {
    this.code = Math.floor(Math.random() * Math.floor(1000));
    this.rollCallService.saveCode(this.code, event);
    // this code should be saved in the db
  }

}
