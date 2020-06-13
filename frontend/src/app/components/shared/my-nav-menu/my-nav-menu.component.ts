import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MyUser } from "../../../models/my-user";

declare var $:any;

@Component({
  selector: 'app-my-nav-menu',
  templateUrl: './my-nav-menu.component.html',
  styleUrls: ['./my-nav-menu.component.css']
})  
export class MyNavMenuComponent implements OnInit {

  public myself:MyUser;
  @Input() titlePage: string = '';

  constructor(public authService: AuthService) {
    this.myself = JSON.parse(localStorage.getItem('myself'));
    if (this.myself == undefined){
      this.myself = new MyUser();
    }
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
   }

  ngOnInit(): void {

  }

}
