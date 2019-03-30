import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}
  signup(){
    this.router.navigate(['/signup']);
  }
}
