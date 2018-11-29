import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, AlertController, NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Navbar } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild(Router) router: Router;
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertctrl: AlertController, private fire: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
    }

    alert(message: string) {
      const alert = self.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['Ok']
      }).present();
    }

    setBackButtonAction() {
      this.router.backButtonClick = () => {
         this.navCtrl.pop({animate: true, animation: 'transition', duration: 500, direction: 'back'});
      };
   }


    ngOnInit() {
      console.log('ngOnInit RegisterPage');
      this.setBackButtonAction();
    }

    RegisterUser() {
      this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value).then (data => {
      console.log ('got data', data);
      this.alert('Registered!');
      })
      .catch(error => {
        console.log('got an error ', error);
        this.alert(error.message);
      });
      console.log ('Would register user with ', this.user.value, this.password.value);
    }
}
