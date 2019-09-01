import { HomePage } from './../home/home';
import { ProfilePage } from './../profile/profile';
import { UserService } from './../../app/userService';
import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email : any = ''
  password : any = ''
  company = {
    form:null
  }; 
  VerificationId : string = '';
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  constructor(
    public user : UserService ,
    public alertCtrl:AlertController ,
    public afAuth: AngularFireAuth,
    public nav: NavController, 
    public forgotCtrl: AlertController, 
    public menu: MenuController, 
    public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
    this.company.form = "male";
  }
  ionViewDidLoad(){
  this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
    'size': 'invisible',
    'callback':function(response){
    }
  });
}
  

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  async login(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((res)=>{

        this.user.setUser({
          uid: res.user.uid
        })        
        this.nav.setRoot(HomePage)
    }).catch((err)=>{
      console.log(err)
      if( err.code = "auth/wrong-password"){
        let alert = this.alertCtrl.create({
          title:'Invalid Username/Password',
          message : 'Invalid username or password',
          buttons : [{
              text: 'Okay',
              handler: data => { console.log('Cancel clicked'); }
            }
          ]
        });
        alert.present();
      }
    })
  }


  // login and go to home page
/*
  async login(phonenumber : number){    
    // Login with phonenumber
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+91" + phonenumber;
    const res = firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then(confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let prompt = this.alertCtrl.create({
      title: 'Enter the Confirmation code',
      inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
      buttons: [
        { text: 'Cancel',
          handler: data => { console.log('Cancel clicked'); }
        },
        { text: 'Send',
          handler: data => {
            console.log(data.confirmationCode);
            let signinCredential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId,data.confirmationCode);
            firebase.auth().signInWithCredential(signinCredential).then((info)=>{
              this.user.setUser({username: info.user.displayName ,uid : info.user.uid})
              console.log(this.user.getUID())
              this.nav.setRoot(CategoriesPage)
              },(err)=>{
                console.log(err)
              }
            )
          }
        }
      ]
    });
    prompt.present();
  }).catch(function (error) {

    console.log("SMS not Sent", error)

  });
  }

*/

}
