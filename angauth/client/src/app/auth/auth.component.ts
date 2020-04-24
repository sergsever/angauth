import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  Login : string = '';
  Password: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void
  {
    console.log('submit');
  }

}
