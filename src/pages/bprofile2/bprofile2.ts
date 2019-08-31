import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import images from '../../app/images';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../../app/userService';

/**
 * Generated class for the Bprofile2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bprofile2',
  templateUrl: 'bprofile2.html',
})
export class Bprofile2Page {

  images = images 
  UserData

  constructor(public afs: AngularFirestore,public user : UserService, public navCtrl: NavController, public navParams: NavParams) {

    this.afs.doc(`Artists/${this.user.getUID()}`).valueChanges().subscribe( res => {
      console.log(res)
      this.UserData = res
    })
    console.log(this.user.getUID())

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bprofile2Page');
  }

}
