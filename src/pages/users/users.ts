import { UserService } from './../../app/userService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  image: any;
  users: any; 
  constructor(public userService : UserService,public navCtrl: NavController, public navParams: NavParams, public http : HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    /*
    this.RequestProvider.retrieveArtists().subscribe( data =>{
      console.log(data);
      this.users = data;
    });
    */

    this.http.get('../assets/users.json').subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    );

  }



}
