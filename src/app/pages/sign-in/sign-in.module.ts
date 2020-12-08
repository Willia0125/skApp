import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import { ReactiveFormsModule } from '@angular/forms';//delete if broken 12/6


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,   //delete if broken 12/6
    SignInPageRoutingModule
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
