import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PEOPLE} from '../../Mocks/Person.Mocks';

/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {
  text:string;
  person ='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person =this.navParams.get("variable")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }
  onNav(){
    PEOPLE.push({Name:this.text});
    this.navCtrl.push('SecondPage');
  }
}
