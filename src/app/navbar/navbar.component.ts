import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  styleNavBar: any;
  render: boolean;

  constructor(
    private titleService: Title,
    private router: Router,
    private modalService: NgbModal,
    
  ) { 
    this.styleNavBar = {};
    this.render = true;

  }

  ngOnInit() {
    this.render = true;
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

}
