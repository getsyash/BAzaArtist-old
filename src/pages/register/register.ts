import { ProfilePage } from './../profile/profile';
import { UserService } from './../../app/userService';

import {NavController,AlertController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {auth} from 'firebase/app';
import firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  username: string = "";
  email: string ="";
  phonenumber : number ;
  gender : string = "";
  password : string = '';

  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  constructor(
    public AlertController : AlertController,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
    public alertCtrl:AlertController ,
    public nav: NavController) {
  }

  ionViewDidLoad(){   
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
      'size': 'invisible',
      'callback':function(response){
        console.log(response);
      }
    });
  }



  async register(){
    const { username, password,email, gender } = this
    if(username && password && email && gender !== ""){
      try{
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(email , password)
        this.afstore.doc(`Artists/${res.user.uid}`).set({
          username,password,email
        }).then(()=> {
            this.user.setUser({ 
              uid: res.user.uid
            })        
            console.log("success",res.user)
          })  
      }catch(err){
        console.dir(err)
        if(err.code = "auth/email-already-in-use"){
          console.log('Email Exists')
          let alert = this.alertCtrl.create({
            title:'Invalid Email',
            message : 'The Email id is already in use please try logging in',
            buttons : [{        
              text: 'Login',
              handler: data => {
                this.nav.setRoot(LoginPage)
              }
            }]
          });
          alert.present();
        }
      }      
    }else{
      let alert = this.alertCtrl.create({
        title:'Missing Details',
        message : 'Please make sure to enter all the Details',
        buttons : [{
            text: 'Okay',
            handler: data => { console.log('Cancel clicked'); }
          }
        ]
      });
      alert.present();
    }
  }


  /*
  // register and go to home page
  async register(phonenumber : number){    
    // Login with phonenumber
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+91" + phonenumber;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
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
            confirmationResult.confirm(data.confirmationCode)
            .then(function (result) {
              // User signed in successfully.
              console.log(result.user);
              this.nav.setRoot(CategoriesPage);
              // ...
            }).catch(function (error) {
              // User couldn't sign in (bad verification code?)
              // ...
            });
          }
        }
      ]
    });
    prompt.present();
  })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });

  }

  */

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
