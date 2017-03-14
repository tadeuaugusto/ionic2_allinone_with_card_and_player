import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AudioData } from '../../providers/audio-data';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {RadioPlayer} from '../../providers/radio';

/*
  Generated class for the FeedAudio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed-audio',
  templateUrl: 'feed-audio.html'
})
export class FeedAudioPage {

    searchTerm: string = '';
    items: any;
    searchControl: FormControl;
    searching: any = false;
    player:any;
    
  constructor(public navCtrl: NavController, public dataService: AudioData, player: RadioPlayer) {
    this.searchControl = new FormControl();
    this.player = player;
  }
  
  ionViewDidLoad() {
    this.setFilteredItems();
    
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.searching = false;
        this.setFilteredItems();
    });
  }
  
  setFilteredItems() {
  
    this.items = this.dataService.filterItems(this.searchTerm);
  }
  
  onSearchInput(){
        this.searching = true;
    }

  play() {
  	this.player.play().then(() => {
  		console.log('Playing');
  	});
  }

  pause() {
  	this.player.pause();
  }
}
