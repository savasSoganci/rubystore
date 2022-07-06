import { Component, OnInit } from '@angular/core';
import { Stone } from '../stones';
import { StoneService } from '../stone.service';

@Component({
  selector: 'app-stone-content',
  templateUrl: './stone-content.component.html',
  styleUrls: ['./stone-content.component.scss']
})
export class StoneContentComponent implements OnInit {
  stones: Stone[] = [];
  constructor(private heroService: StoneService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(stones => this.stones = stones);
  }
  panelOpenState = false;
    
}
