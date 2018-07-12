import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PEOPLE} from '../../Mocks/Person.Mocks';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
 person ='';
 PeopleList = PEOPLE;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person =this.navParams.get("variable")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
  onNav(){
    this.navCtrl.push('ThirdPage')
  }
 
}
