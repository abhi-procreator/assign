import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  subject:string='';
  constructor() { }

   Comp = new BehaviorSubject<any>('Componet')
}
