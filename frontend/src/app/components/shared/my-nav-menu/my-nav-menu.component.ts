import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

declare var $:any;

@Component({
  selector: 'app-my-nav-menu',
  templateUrl: './my-nav-menu.component.html',
  styleUrls: ['./my-nav-menu.component.css']
})  
export class MyNavMenuComponent implements OnInit {

  @Input() titlePage: string = '';

  constructor(public authService: AuthService,) {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
   }

  ngOnInit(): void {

  }

}
