import { Component, OnInit } from '@angular/core';



//added 11/29/2020
import { AuthService } from 'src/app/services/auth.service';
//************************



import { Router } from '@angular/router';

import { AngularFireDatabaseModule } from '@angular/fire/database';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(


  ) { }

  ngOnInit() {
  }
};
