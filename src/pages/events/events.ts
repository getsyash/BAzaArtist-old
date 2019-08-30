import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './../../app/userService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import images from '../../app/images';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  images = images
  UserData:any = {}
  UpdatedUserData: any = {}
  Events :any 

  constructor( public afs : AngularFirestore,
    public user: UserService, public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.user.getUID())
    this.afs.doc(`Artists/${this.user.getUID()}`).collection('bookings').valueChanges().subscribe(res =>{
      this.Events = res
      console.log(this.Events)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
