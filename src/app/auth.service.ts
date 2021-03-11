import { Injectable, EventEmitter } from '@angular/core';
// import * as firebase from 'firebase/app';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   authState;
//   vRef;
//   test = new EventEmitter<boolean> ();

  constructor(
//     public afAuth: AngularFireAuth,
//     private afs: AngularFirestore
  ) {
//     this.afAuth.authState.subscribe(auth => {
//       this.authState = auth;
//     });
//   }

//   doRegister(value) {
//     return new Promise<any>((resolve, reject) => {
//       this.afAuth
//         .createUserWithEmailAndPassword(value.mail, value.password)
//         .then(
//           res => resolve(res),
//           err => reject(err)
//         );
//     });
//   }

//   loggedin () {
//     return this.test;
//   }

//   change () {
//     // this.test = !this.test;
//   }

//   isLoggedIn() {
//     return new Promise<any>((resolve, reject) => {
//       this.afAuth.user.subscribe(currentUser => {
//         if (currentUser) {
//           resolve(currentUser);
//         } else {
//           reject();
//         }
//       });
//     });
//   }

//   doLogin(value) {
//     return new Promise<any>((resolve, reject) => {
//       this.afAuth
//         .signInWithEmailAndPassword(value.mail, value.password)
//         .then(
//           res => resolve(res),
//           err => reject(err)
//         );
//     });
//   }

//   get authenticated(): boolean {
//     return this.authState !== null;
//   }

//   get userId(): string {
//     localStorage.setItem('ai', this.authState.uid);
//     return this.authenticated ? this.authState.uid : '';
//   }

//   getVersion() {
//     this.vRef = this.afs.doc<any>('version/version');
//     return this.vRef.valueChanges();
//   }

//   logout() {
//     return new Promise <void> ((resolve, reject) => {
//       this.afAuth
//         .signOut()
//         .then(() => {
//           localStorage.removeItem('ai');
//           localStorage.removeItem('ri');
//           // this.firebaseService.unsubscribeOnLogOut();
//           resolve();
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }

//   addZone (zone) {
//     return new Promise <void> ((resolve, reject) => {
//       this.afs.collection('zones').add ({
//         name: zone.name,
//         price: zone.price
//       }).then (() => {
//         resolve ();
//       }, err => {
//         reject ();
//       })
//     })
  }
}
