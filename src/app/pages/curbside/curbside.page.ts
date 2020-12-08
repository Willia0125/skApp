import { Component, OnInit } from '@angular/core';

//added 11/29/2020
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Router } from '@angular/router';




@Component({
  selector: 'app-curbside',
  templateUrl: './curbside.page.html',
  styleUrls: ['./curbside.page.scss'],
})
export class CurbsidePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
