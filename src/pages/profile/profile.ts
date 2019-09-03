import { UserService } from './../../app/userService';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  ProfilePic 
  UserData:any = {}
  UpdatedUserData : any = {}
  
  constructor(public navCtrl: NavController,
     public user : UserService,
     public navParams: NavParams,
     private afs : AngularFirestore,
     public afAuth : AngularFireAuth,
     public alert : AlertController
     ) {
      console.log(this.user.getUID())
    
      this.afs.doc(`Artists/${this.user.getUID()}`).valueChanges().subscribe( res => {
        console.log(res)
        this.UserData = res
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  UploadProfilePic(){
    console.log('Profile PIc')
  }
  UpdateProfile(){
    this.afs.doc(`Artists/${this.user.getUID()}`).update(this.UpdatedUserData).then(()=>{
      this.alert.create({title : 'Profile Updated',message:'Profile was Updated Successfully',buttons:[{text:'Okay'}]}).present()
    })
  }
  fileChanged(){

  }

}
