import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router,

  ) { }

  ngOnInit() {
  }
  navbarOpen: boolean = true;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  goTo(componentURL: string): void {
    this.titleService.setTitle(componentURL);
    this.router.navigateByUrl(componentURL);
  }

}
