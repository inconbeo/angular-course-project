import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']

})
export class TabsComponent implements OnInit {
  characters = [];
  chooseList = 'all';
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    // then we assign seService property to the value we
    // receive from Angular
    this.swService = swService;
  }

  ngOnInit() {
  }

  onChoosen(side) {
    this.chooseList = side;
  }

  getCharacters() {

    this.characters =  this.swService.getCharacters(this.chooseList);
    return this.characters;
  }
}
