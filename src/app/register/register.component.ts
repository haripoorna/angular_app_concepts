import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpform: FormGroup;
  constructor() {
      this.signUpform = new FormGroup({
        'firstname' : new FormControl(null),
        'lastname': new FormControl(null),
        'address': new FormControl(null),
        'city': new FormControl(null),
        'state': new FormControl(null),
        'zip': new FormControl(null),
        'title': new FormControl(null),
        'company': new FormControl(null),
        'phone': new FormControl(null),
        'email': new FormControl(null),
        'website': new FormControl(null)
      });
   }

  ngOnInit() {
  }

}
