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

  getLeaders(): Leader[]{
    return LEADERS;
  }



  getFeaturedleader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }

}
