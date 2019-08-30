import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'

interface user {
	uid: string
}

@Injectable()
export class UserService {
	private user: user
	private UserData
	
	constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {

	}

	setUser(user: user) {
		this.user = user
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	getlogo():string{
		return 'https://firebasestorage.googleapis.com/v0/b/baza-7a5d5.appspot.com/o/backgrounds%2Flogo.png?alt=media&token=5990dfa0-4ead-4a86-bb3f-3f2cdb5c079c' ;
	}

	getUID(): string {
		return this.afAuth.auth.currentUser.uid
	}
	ArtistData(){
		return	this.afs.doc(`Artists/${this.getUID()}`).valueChanges()
	}
}