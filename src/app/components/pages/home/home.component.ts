import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user:any;
  users:any[]=[]
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserInfo()
    .subscribe(res=>{
      console.log(res.results)
     this.user=res.results;
    })

    this.userService.getRandomNames()
    .subscribe(res=>{
      console.log(res.contents);
      console.log(res.success);
      this.users=res.contents;

    })

  }
  

}
