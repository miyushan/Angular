import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    return new Promise(resolve => {
      setTimeout(()=>resolve(LEADERS),2000);
    });
  }

  getLeader(id: string): Promise<Leader>{
    return new Promise(resolve => {
      setTimeout(()=>resolve(LEADERS.filter((leader) => (leader.id === id))[0]),2000);
    });
  }

  getFeaturedleader(): Promise<Leader> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    });
  }

}
