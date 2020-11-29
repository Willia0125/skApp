import { Component, OnInit } from '@angular/core';
//delete if broken
//import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFireDatabaseModule } from '@angular/fire/database';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  /*
    constructor(

    ) {}

    ngOnInit() {
    }

  }*/

//  user: any = {};

  constructor(
  //  private auth: AngularFireAuth,
    //private router: Router,
    //private afDB: AngularFireDatabase

  ) { }

  ngOnInit() {
  }

/*  register() {

    if (this.user.email && this.user.password) {
      this.auth.auth.createUserWithEmailAndPassword(this.user.email.this.user.password).then((r) => {
        console.log(r);

        this.afDB.object('users/' + r.user.uid).set({
          name: this.user.name,
          email: this.user.email,
          createdAt: Date.now(),
        }).then(() => {
          this.routher.navigationByUrl('/home');

        });

      }).catch(e => {
        console.log(e);
      })
    }
  }*/
}
