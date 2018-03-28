import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']

})
export class ItemComponent implements OnInit {
  @Input() character;

  // We create a new property of type StarwarsService
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    // then we assign seService property to the value we
    // receive from Angular
    this.swService = swService;
  }
  ngOnInit() {
  }

  onAssign(side) {
    // this.character.side = side;
    // this.sideAssigned.emit({name: this.character.name, side: side});

    this.swService.onSideChosen({name: this.character.name, side: side});
  }

}
