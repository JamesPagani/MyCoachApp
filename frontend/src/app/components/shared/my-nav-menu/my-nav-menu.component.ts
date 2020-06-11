import { Component, OnInit, Input } from '@angular/core';

declare var $:any;
declare var M:any;

@Component({
  selector: 'app-my-nav-menu',
  templateUrl: './my-nav-menu.component.html',
  styleUrls: ['./my-nav-menu.component.css']
})
export class MyNavMenuComponent implements OnInit {

  @Input() titlePage: string = '';

  constructor() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
   }

  ngOnInit(): void {

  }

}
