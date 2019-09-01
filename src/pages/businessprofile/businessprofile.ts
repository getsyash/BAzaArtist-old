import { AlertController } from 'ionic-angular';
import { UpdatedUserData, willingtoattend } from './businessprofile';
import { HomePage } from './../home/home';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import images from '../../app/images';
import { UserService } from '../../app/userService';
import { TermsPage } from '../terms/terms';
import { Bprofile2Page } from '../bprofile2/bprofile2';

export interface willingtoattend {
  title: string;
  value : string;
}
export interface UpdatedUserData {

}
export interface willingtocome{

}
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
  UpdatedUserData: Array<UpdatedUserData>
  willingtoattend: Array<willingtoattend>
  willingtocome: Array<willingtocome>
  checked = [];
  category

  constructor(public user : UserService, public navCtrl: NavController, public navParams: NavParams, private afs : AngularFirestore) {

    this.willingtoattend= [  
      {title: 'Weddings',value : 'weddings'},
      {title: 'Reception',value : 'reception'  },
      {title: 'Engagements',value : 'engagements' },
      {title: 'Festivals',value : 'festivals'  },
      {title: 'Birthdays',value : 'birthdays'},
      {title: 'Sangeeth',value : 'sangeeth' },
      {title: 'Anniversary',value : 'anniversary'  },      
    ];

    this.willingtocome = [
      {title: 'All Over Andhra Pradesh', value : 'panandhra',isChecked:false},
      {title: 'Prefered Locations', Value :'prefered', isChecked:false, prefered :[{title:'Hyderabad'},{title:'Vijayawada'},{title:'Guntur'},{title:'Nellore'}]}
    ]
    this.afs.collection('categories').valueChanges().subscribe(res =>{
      this.category = res
      console.log(res)
    })
    this.afs.doc(`Artists/${this.user.getUID()}`).valueChanges().subscribe( res => {
      console.log(res)
      this.UserData = res
    })
    console.log(this.user.getUID())
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


}
