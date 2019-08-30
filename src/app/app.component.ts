import { HelpPage } from './../pages/help/help';
import { TermsPage } from './../pages/terms/terms';
import { AboutusPage } from './../pages/aboutus/aboutus';
import { BusinessprofilePage } from './../pages/businessprofile/businessprofile';
import { HomePage } from './../pages/home/home';

import { UserService } from './userService';
import { Component, ViewChild } from "@angular/core";
import { Platform, Nav, ModalController } from "ionic-angular";
import { AngularFireAuth } from '@angular/fire/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { LoginPage } from "../pages/login/login";
import { ProfilePage } from '../pages/profile/profile';
import { EventsPage } from '../pages/events/events';
import { ReferPage } from '../pages/refer/refer';


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage

  appMenuItems: Array<MenuItem>;
  constructor(
    public UserService : UserService,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public modalCtrl : ModalController,
    public afAuth : AngularFireAuth
  ) {

    this.initializeApp();

    this.appMenuItems = [  
      {title: 'Home', component: HomePage, icon: ''},
      {title: 'Upcoming Events', component: EventsPage, icon: ''},
      {title: 'Business Profile', component: BusinessprofilePage, icon: ''},
      {title: 'Personal Profile', component: ProfilePage, icon: ''},
      {title: 'About Us', component: AboutusPage, icon: ''},
      {title: 'Terms & Conditions', component: TermsPage, icon: ''},
      {title: 'Help', component: HelpPage, icon: ''},
      {title: 'Referyour friend', component: ReferPage, icon: ''}
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
  });

  }



  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      //*** Control Splash Screen
      // this.splashScreen.show();
       this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      //this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.afAuth.auth.signOut().then(()=>{
      this.nav.setRoot(LoginPage)
    })
  }

  openProfile(){
  }

}
