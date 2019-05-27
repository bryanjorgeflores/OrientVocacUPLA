import { Component, OnInit } from '@angular/core';
import { setStyleHidden } from 'src/config/dom.config/navbar.dom.config';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,

  ) { }

  ngOnInit() {
    setStyleHidden('#262626');

    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

  }

  goToBack(): void {
    this.location.back();
  }

  logout(): void {
    localStorage.clear();

    this.router.navigateByUrl('/login');
  }

}
