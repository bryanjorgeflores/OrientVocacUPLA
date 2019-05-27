import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NavbarItem } from 'src/interfaces/navbar-item.interface';
import { StudentNavbarItems, AdministratorNavbarItems } from 'src/services/navbar-item.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  styleNavBar: any;
  render: boolean;
  typeUser: string;

  navbarItems: Array<NavbarItem>;

  constructor(
    private titleService: Title,
    private router: Router,
    private modalService: NgbModal,

  ) {
    this.styleNavBar = {};
    this.render = true;

  }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.typeUser = localStorage.getItem('typeuser');

    switch (this.typeUser) {
      case 'student':
        this.navbarItems = StudentNavbarItems;
        break;
      case 'administrator':
        this.navbarItems = AdministratorNavbarItems;
        break;
    }

  }

  toggleNavbar() {
  }

  openBarSearchStudents(content: any): void {
    this.modalService.open(content, { size: 'lg' });

  }

  goTo(componentDIR: string): void {
    this.titleService.setTitle(componentDIR);
    this.router.navigateByUrl(componentDIR);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
