import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor(private service:DesignUtilityService) { }

  subject: string = '';
  ngOnInit(): void {
  }

  onChange(val:any){
    this.service.Comp.next(val);
    console.log(val);
    
  }

}
