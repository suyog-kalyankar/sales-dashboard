import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sales-navbar',
  templateUrl: './sales-navbar.component.html',
  styleUrls: ['./sales-navbar.component.scss']
})
export class SalesNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
