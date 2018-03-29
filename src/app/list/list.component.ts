import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
   }

   // when the component initiated, run the things inside
  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      // when we submit the new event, we will subcribe to the event by calling the function below to
      // return a new copy
      () => {
        // fetch a new copy of character here
        // We dont need subscription when we navigate away from the list component
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
