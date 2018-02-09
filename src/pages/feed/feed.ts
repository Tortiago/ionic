import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public user_name:String="Tiago O. Ramos";
  public texto_img:String= "Esse texto vem de forma dinâmica do banco por exemplo ;)";

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }




}
