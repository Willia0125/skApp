import { Injectable } from '@angular/core';
//added 11/29/2020
import firebase from 'firebase/app';
//import firebase from '/node_modules/firebase';
import { AngularFireAuth } from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //original code
  constructor() { }
}

  //added 11/29/2020
  /*constructor(public auth: AngularFireAuth) { }

  loginFireauth(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth.signInWithEmailAndPassword(value.email.value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }
}*/
