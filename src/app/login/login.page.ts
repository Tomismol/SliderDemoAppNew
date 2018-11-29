import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { IonicModule, NavController, NavParams, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertctrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController,
     public navParams: NavParams, public router: Router) {
  }

  alert(message: string) {
    const alert = self.alertCtrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['Ok']
    }).present();
  }

  signInUser() {
this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)  // Sample App Slider Demo, Firebase authentication
    .then ( data => {
      console.log('got some data', this.fire.auth.currentUser.email);
      this.alert ('Welcome. You\'re logged in');
      this.navCtrl.navigateRoot( 'MenuPage' );
    })
    .catch ( error => {
      console.log('got an error', error);
      this.alert(error.message);
    });

    console.log ('Would sign in with ', this.user.value, this.password.value);
  }
  push() {
    this.navCtrl.navigateForward(['RegisterPage', {animate: true, animation: 'transition', duration: 500, direction: 'forward'}]);
}

ngOnInit() {
    console.log('ngOnInit LoginPage');
  }

}
