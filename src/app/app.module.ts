import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestorModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, FUNCTIONS_REGION } from '@angular/fire/firestore';

/*const firebaseConfig = {
 apiKey: "AIzaSyAvBPtJ-3SAmwnCKJUYeqo-PYV_6Bzi5yQ",
 authDomain: "skapp-e7746.firebaseapp.com",
 databaseURL: "https://skapp-e7746.firebaseio.com",
 projectId: "skapp-e7746",
 storageBucket: "skapp-e7746.appspot.com",
 messagingSenderId: "641313029762",
 appId: "1:641313029762:web:2899e0015713b9837cbe9b",
 measurementId: "G-20T6YCPLKG"
};*/

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    /*HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.intialzeApp(firebaseConfig),*/
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireFunctionsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //FirebaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    { provide: FUNCTIONS_REGION, useValue: 'us-central1'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
