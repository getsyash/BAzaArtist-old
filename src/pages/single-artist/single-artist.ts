import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleArtistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-artist',
  templateUrl: 'single-artist.html',
})
export class SingleArtistPage {

  data : any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = this.navParams.get('data');
    console.log(this.data)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleArtistPage')
  }

}
