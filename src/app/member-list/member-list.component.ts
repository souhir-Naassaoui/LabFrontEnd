import { GLOBAL } from './../app.config';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {


  /*
  dataSource:any[]=[
    {
      id : "123456",
      cin : "14253669",
      name : "imene",
      createdDate : "12-10-2021",
      cv : "lien",
      type : "teacher"
    },
    {
      id : "123456",
      cin : "02213669",
      name : "souhir",
      createdDate : "12-8-2021",
      cv : "lien",
      type : "student"
    }
  ];*/

  dataSource : any[];

  displayedColumns:string[]=["id","cin","name","createdDate","cv","type","actions"]

  constructor(private memberService : MemberService) { 
    this.dataSource = this.memberService.tab;
  }

  ngOnInit(): void {
  }

}
