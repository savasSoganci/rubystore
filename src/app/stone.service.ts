import { Injectable } from '@angular/core';
import { STONES } from './mock-stones';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Stone } from './stones';



@Injectable({
  providedIn: 'root'
})
export class StoneService {

  constructor(
    private http: HttpClient) { }
 

  private stonesUrl = 'api/stone-content';  // URL to web api
  getHeroes(): Observable<Stone[]> {
    const stones = of(STONES);
    return stones;
  }
  getHero(id: number): Observable<Stone> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const stones = STONES.find(h => h.id === id)!;
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(stones);
  }
}