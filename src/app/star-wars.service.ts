// definition: service is just a type of class;
import {LogService} from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  private characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Quang Nguyen', side: ''},
    {name: 'Ngan', side: ''},
    {name: 'Tim', side: ''}
  ];

  // Create a property logService
  private logService: LogService;
  charactersChanged = new Subject<void>(); // Its similar to eventemitter
  http: Http;

  // Create an instance
  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    // this request can onbe sent when we add the subscribe method
    this.http.get('https://swapi.co/api/people')
    // we are listening to the data to transform the data
      .map((response: Response) => {
        const data = response.json();
        const extractedchars = data.results;
        const chars = extractedchars.map((char) => {
          return {name: char.name, side: ''};
        } );
        return chars; // Tranform into normal javascript object
      })
      // we subscribe to the data
      .subscribe(
      (data) => {
        this.characters = data;
        this.charactersChanged.next();
        console.log(data);
      }
    );
  }

  getCharacters(chooseList) {
    if (chooseList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter(char => {
      return chooseList === char.side;
    } );
  }

  onSideChosen(charInfo) {
    console.log(charInfo);
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;

    });
       this.characters[pos].side = charInfo.side;
       // this means we emit a new event, then we need to subcribe to the new event
       this.charactersChanged.next();
       this.logService.writeLog('Changed side of ' + charInfo.name + ', new side:' + charInfo.side);
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
});
   if (pos !== -1) {
     return;
   }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
