import { UserService } from './../../app/userService';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import images from '../../app/images';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  images = images
  UserData:any = {}
  UpdatedUserData : any = {}

  constructor(public navCtrl: NavController,
     public user : UserService,
     public navParams: NavParams,
     private afs : AngularFirestore,
     public afAuth : AngularFireAuth,
     ) {
       this.afs.doc(`Artists/${this.user.getUID()}`).valueChanges().subscribe( res => {
          console.log(res)
          this.UserData = res
       })
       console.log(this.user.getUID())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  UpdateProfile(){
    this.afs.doc(`Artists/${this.user.getUID()}`).update(this.UpdatedUserData)
  }

}
