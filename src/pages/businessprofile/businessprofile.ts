import { HomePage } from './../home/home';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import images from '../../app/images';
import { UserService } from '../../app/userService';

/**
 * Generated class for the BusinessprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-businessprofile',
  templateUrl: 'businessprofile.html',
})
export class BusinessprofilePage {

  images = images
  UserData:any = {}
  UpdatedUserData : any = {}

  constructor(public user : UserService, public navCtrl: NavController, public navParams: NavParams, private afs : AngularFirestore) {

    this.afs.doc(`Artists/${this.user.getUID()}`).valueChanges().subscribe( res => {
      console.log(res)
      this.UserData = res
    })
    console.log(this.user.getUID())
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessprofilePage');
  }
  updateDetails(){
    this.navCtrl.setRoot(HomePage)
  }


}
