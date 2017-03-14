import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { FeedsPage } from '../pages/feeds/feeds';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
// import { FeedAudioPage } from '../pages/feed-audio/feed-audio';
// import { FeedTextoPage } from '../pages/feed-texto/feed-texto';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FeedsPage;
  myuser : string = 'true';
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    
    if (this.myuser === 'true') {
        
        this.rootPage = LoginPage;
        // used for an example of ngFor and navigation
        this.pages = [
          { title: 'Feeds', component: FeedsPage },
          { title: 'Configurações', component: SettingsPage }
        ];
    } else {
        this.rootPage = LoginPage;
    }
    
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
