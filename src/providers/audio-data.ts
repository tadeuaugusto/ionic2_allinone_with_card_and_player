import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AudioData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AudioData {

  items: any;
    
  constructor(public http: Http) {
    console.log('Hello Data Provider');
  
    this.items = [
        {title: 'Título do texto ONE'},
        {title: 'Título do texto TWO'},
        {title: 'Título do texto THREE'},
        {title: 'Título do texto FOUR'},
        {title: 'Título do texto FIVE'},
        {title: 'Título do texto SIX'},
        {title: 'Título do texto SEVEN'}
    ]
    
  }
  
  filterItems(searchTerm){
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
