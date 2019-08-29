import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SingleCategoryPage } from '../single-category/single-category';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {


  CategoryData =[]
  mainuser : any
  sub

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient,
    public afAuth : AngularFireAuth,
    public afStore : AngularFireStorage,
    private afs : AngularFirestore
    ) {
      let DumpData = afs.collection(`categories`);
      this.sub = DumpData.valueChanges().subscribe(event => {
        this.CategoryData = event
      })
  }
  
  ionViewDidLoad(){
  }


  openCategory(post){    
    this.navCtrl.setRoot(SingleCategoryPage,{id:post});
  }

}
