import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { FeedAudioPage } from '../feed-audio/feed-audio';
import { FeedTextoPage } from '../feed-texto/feed-texto';
import { LoginPage } from '../login/login';
/*
  Generated class for the Feeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html'
})
export class FeedsPage {

    @ViewChild(Nav) nav: Nav;
    pages: Array<{title: string, component: any}>;
    
    tab1Root: any = FeedAudioPage;
    tab2Root: any = FeedTextoPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');
  }
  
  public logout() {
    console.log('logout() FeedsPage');
    this.nav.setRoot(LoginPage);
    
    /*
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
    */
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
