import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Quang Nguyen', side: ''},
    {name: 'Ngan', side: ''},
    {name: 'Tim', side: ''}
  ];
  chooseList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoosen(side) {
    this.chooseList = side;
  }

  getCharacters() {
    if (this.chooseList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter(char => {
      return this.chooseList === char.side;
    } );
  }

  onSideChosen(charInfo) {
    console.log(charInfo);
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;

    });
    return this.characters[pos].side = charInfo.side;
  }

}
