// definition: service is just a type of class;
import {LogService} from './log.service';
import { Injectable } from '@angular/core';

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

  // Create an instance
  constructor(logService: LogService) {
    this.logService = logService;
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
