import { CalenderPage } from './../pages/calender/calender';
import { HelpPage } from './../pages/help/help';
import { TermsPage } from './../pages/terms/terms';
import { AboutusPage } from './../pages/aboutus/aboutus';
import { BusinessprofilePage } from './../pages/businessprofile/businessprofile';
import { HomePage } from './../pages/home/home';

import { UserService } from './userService';
import { Component, ViewChild } from "@angular/core";
import { Platform, Nav, ModalController, App, AlertController } from "ionic-angular";
import { AngularFireAuth } from '@angular/fire/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { LoginPage } from "../pages/login/login";
import { ProfilePage } from '../pages/profile/profile';
import { EventsPage } from '../pages/events/events';
import { ReferPage } from '../pages/refer/refer';
import { RequestsPage } from '../pages/requests/requests';
import { EarningsPage } from '../pages/earnings/earnings';
import { Bprofile2Page } from '../pages/bprofile2/bprofile2';
import images from './images';


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

  rootPage: any 

  images = images

  appMenuItems: Array<MenuItem>;
  constructor(
    public app : App,
    public UserService : UserService,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public modalCtrl : ModalController,
    public afAuth : AngularFireAuth,
    public alertCtrl : AlertController,
  ) {


    this.initializeApp();

    this.appMenuItems = [  
      {title: 'Home', component: HomePage, icon: ''},
    //  {title: 'My Calender', component: CalenderPage, icon: ''},
    //  {title: 'My Requests', component: RequestsPage, icon: ''},
    //  {title: 'My Bookings', component: EventsPage, icon: ''},
    //  {title: 'My Earnings', component: EarningsPage, icon: ''},
      {title: 'About Us', component: AboutusPage, icon: ''},
      {title: 'Terms & Conditions', component: TermsPage, icon: ''},
      {title: 'Help', component: HelpPage, icon: ''},
      {title: 'Refer Your friend', component: ReferPage, icon: ''}
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
  });

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.afAuth.authState.subscribe( user => {
        if(user){
          this.rootPage = CalenderPage
        }else{
          this.rootPage = LoginPage
        }
      },()=>{
        this.rootPage = LoginPage
      })

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
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'HomePage') {
          if (nav.canGoBack()){
              nav.pop();
          } else {
              const alert = this.alertCtrl.create({
                  title: 'Sure you wanna quit?',
                  buttons: [{
                    text: 'Yes',
                    handler: () => {
                      this.logout();
                      this.platform.exitApp();
                    }
                  },{
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                      this.nav.setRoot('HomePage');
                    }
                  }]
              });
              alert.present();
          }
      }
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
    this.nav.setRoot(ProfilePage)
  }

}
