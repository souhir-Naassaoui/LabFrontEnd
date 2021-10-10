import { Injectable } from '@angular/core';
import { GLOBAL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  tab:any[]=GLOBAL.DB.members;

  constructor() { }
}
