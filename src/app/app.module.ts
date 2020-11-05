import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './../providers/firebase-service';

const firebaseConfig = {
 apiKey: "AIzaSyAvBPtJ-3SAmwnCKJUYeqo-PYV_6Bzi5yQ",
 authDomain: "skapp-e7746.firebaseapp.com",
 databaseURL: "https://skapp-e7746.firebaseio.com",
 projectId: "skapp-e7746",
 storageBucket: "skapp-e7746.appspot.com",
 messagingSenderId: "641313029762",
 appId: "1:641313029762:web:2899e0015713b9837cbe9b",
 measurementId: "G-20T6YCPLKG"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    /*HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.intialzeApp(firebaseConfig),*/
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //FirebaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
