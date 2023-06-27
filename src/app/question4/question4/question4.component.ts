import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';


@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  subject: string = '';
  constructor(private service: DesignUtilityService) {
    this.service.Comp.subscribe(res => {
      this.subject = res;
    })
  }


  ngOnInit(): void {
  }
  onChange(val: any) {
    this.service.Comp.next(val.value)
    console.log(val);

  }
}
