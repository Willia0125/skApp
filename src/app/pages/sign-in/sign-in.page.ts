//import { Component, OnInit } from '@angular/core';
//remove if broken
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore};
import { Component } from '@angular/core';
import { ToastController } '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
//export class SignInPage implements OnInit {}
//------------Trying to add Email database------------------
export class Homepage {
  userdata = {
    email: '',
    first_name: '',
  }
};
//delete if broken

  constructor(
    //delete if broken
    private toastCtrl: ToastController,
    private db: AngularFirestore,
    private functions: AngularFireFunctions
  ) {}
//delete if broken
  subscribeTriggerd() {
    this.db.collection('subs')
    .add({ email: this.userdata.email, first_name: this.userdata.first_name })
    .then(
      res => {
        this.showToast('You are now subscribed!');
      },
      err => {
        console.log('Error: ', err);
      }
    );
  }

  subscribeDirectly() {
    const callbable = this.functions.httpsCallable('addSubscirber');
    const obs = callbable({ email: this.userdata.email, first_name: this.userdata.first_name });
    obs.subsribe(res => {
      this.showToast(res.msg);
    });
  }
//delete if broken
  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
/*  ngOnInit() {
  }

}*/
