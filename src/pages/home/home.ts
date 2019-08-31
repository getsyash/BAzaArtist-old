import { CalenderPage } from './../calender/calender';
import { BusinessprofilePage } from './../businessprofile/businessprofile';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import images from '../../app/images';
import { UserService } from './../../app/userService';
import { EventsPage } from '../events/events';
import { EarningsPage } from '../earnings/earnings';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  images = images
  UserData:any ={}
  constructor(public user: UserService, public navCtrl: NavController, public navParams: NavParams) {

    this.user.ArtistData().subscribe( (res) => {
      this.UserData = res
      console.log(this.UserData)
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  openProfilePage(){
    this.navCtrl.setRoot(BusinessprofilePage)
  }openBusinessProfile(){
    this.navCtrl.setRoot(EarningsPage)
  }OpenEventsPage(){
    this.navCtrl.setRoot(EventsPage)
  }OpenCalenderPage(){
    this.navCtrl.setRoot(CalenderPage)
  }

}
