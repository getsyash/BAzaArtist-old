import { CalenderPageModule } from './../pages/calender/calender.module';
import { HelpPageModule } from './../pages/help/help.module';
import { AboutusPageModule } from './../pages/aboutus/aboutus.module';
import { BusinessprofilePageModule } from './../pages/businessprofile/businessprofile.module';
import { HomePageModule } from './../pages/home/home.module';
import { ProfilePageModule } from './../pages/profile/profile.module';

import { UserService } from './userService';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';


import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {MyApp} from "./app.component";

import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import { EventsPageModule } from '../pages/events/events.module';
import { TermsPageModule } from '../pages/terms/terms.module';
import { ReferPageModule } from '../pages/refer/refer.module';
import { EarningsPageModule } from '../pages/earnings/earnings.module';
import { RequestsPageModule } from '../pages/requests/requests.module';
import { Bprofile2PageModule } from '../pages/bprofile2/bprofile2.module';
import { Bprofile3PageModule } from '../pages/bprofile3/bprofile3.module';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ProfilePageModule,
    HomePageModule,
    BusinessprofilePageModule,
    AboutusPageModule,
    HelpPageModule,
    TermsPageModule,
    ReferPageModule,
    EventsPageModule,
    EarningsPageModule,
    RequestsPageModule,
    CalenderPageModule,
    Bprofile2PageModule,
    Bprofile3PageModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: 'Baza',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService,
  ]
})

export class AppModule {

  
}
  
