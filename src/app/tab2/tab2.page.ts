import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase, public fire: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {

    this.itemsRef = db.list(this.fire.auth.currentUser.uid);

    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addItem(newName: string, newNum: number) {
    const myObj = {
    'Name': newName,
    'Zone': newNum
    };
    // this.itemsRef.push({ text: newName });
    this.itemsRef.push({  myObj });
  }
  updateItem(key: string, newName: string, newNum: number) {
    const myObj = {
      'Name': newName,
      'Zone': newNum
      };
    // this.itemsRef.update(key, { Name: newText, Zone: newNum });
    this.itemsRef.update(key, { myObj });

  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
    console.log(this.fire.auth.currentUser.email);
  }
  ngOnInit() {
  }
}


