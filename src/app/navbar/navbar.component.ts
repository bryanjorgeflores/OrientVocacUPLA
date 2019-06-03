import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NavbarItem } from 'src/interfaces/navbar-item.interface';
import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';
import { ComponentConfig } from 'src/config/globals.config/render-component.global.config';
import { EvaluationPutProvider } from 'src/providers/put.providers/evaluation.put.provider';
import { UserTokenService } from 'src/services/user-token.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  styleNavBar: any;
  render: boolean;
  typeUser: string;

  constructor(
    private titleService: Title,
    private router: Router,
    private modalService: NgbModal,
    public userGlobalConfig: UserGlobalConfig,
    private userTokenService: UserTokenService,
    public componentConfig: ComponentConfig,
    private evaluationPutProvider: EvaluationPutProvider

  ) {
    this.styleNavBar = {};

  }

  ngOnInit(): void {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.typeUser = localStorage.getItem('typeuser');

    console.log('init');
  }



  action(navbarItem: NavbarItem): void {
    this[navbarItem.action](navbarItem.dir);
  }

  openBarSearchStudents(content: any): void {
    console.log('componenetDIR', content);
    this.modalService.open(content, { size: 'lg' });
  }

  goTo(componentDIR: string): void {
    this.router.navigateByUrl(componentDIR);
  }

  logout(componentDIR: string): void {
    localStorage.clear();
    this.componentConfig.renderNavbar = false;
    this.userGlobalConfig.typeUser = '';

    this.evaluationPutProvider.putTypeEvaluation(this.userTokenService.evaluation)
      .subscribe(
        result => console.log(result),
        err => console.error(err)
      );

    this.router.navigateByUrl(componentDIR);
  }

}
