import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import images from '../../app/images';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from '../../app/userService';
import { TermsPage } from '../terms/terms';
import { willingtoattend, UpdatedUserData, willingtocome } from '../businessprofile/businessprofile';
import { File } from "@ionic-native/file/ngx";
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
/**
 * Generated class for the Bprofile2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface AdharData {
  name: string;
  FrontImage: string;
  BackImage: string;
  size: number;
}

@IonicPage()
@Component({
  selector: 'page-bprofile2',
  templateUrl: 'bprofile2.html',
})
 
export class Bprofile2Page {
  images = images
  UserData:any = {}
  UpdatedUserData: Array<UpdatedUserData>
  willingtoattend: Array<willingtoattend>
  willingtocome: Array<willingtocome>
  checked = [];
  category

    // Upload Task 
    task: AngularFireUploadTask;
 
    // Progress in percentage
    percentage: Observable<number>;
   
    // Snapshot of uploading file
    snapshot: Observable<any>;
   
    // Uploaded File URL
    UploadedFileURL: Observable<string>;
   
    //Uploaded Image List
    AdharImages: Observable<AdharData[]>;
 
  private imageCollection: AngularFirestoreCollection<AdharData>;
  
  constructor(  
    private storage: AngularFireStorage, private database: AngularFirestore,
    public user : UserService, public navCtrl: NavController, public navParams: NavParams, private afs : AngularFirestore) {

    this.afs.collection('categories').valueChanges().subscribe(res =>{
      this.category = res
      console.log(res)
    })
    this.afs.doc(`Artists/${this.user.getUID()}`).valueChanges().subscribe( res => {
      console.log(res)
      this.UserData = res
    })
    console.log(this.user.getUID())
    this.imageCollection = database.collection<AdharData>('AdharImages');
    this.AdharImages = this.imageCollection.valueChanges();
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessprofilePage');
  }

  //Adds the checkedbox to the array and check if you unchecked it
  addCheckbox(event, checkbox : String) { 
      if ( event.checked ) {
        this.checked.push(checkbox);
      } else {
        let index = this.removeCheckedFromArray(checkbox);
        this.checked.splice(index,1);
      }
    }

    //Removes checkbox from array when you uncheck it
    removeCheckedFromArray(checkbox : String) {
      return this.checked.findIndex((category)=>{
        return category === checkbox;
      })
    }
    
   updateDetails(){
         this.navCtrl.push(Bprofile2Page)
   }

   openTerms(){
     this.navCtrl.setRoot(TermsPage)
   }

   UploadFrontImage(){
     console.log('upload Front Image')
   }
   UploadBackImage(){
    console.log('upload Back Image')
   }

}
