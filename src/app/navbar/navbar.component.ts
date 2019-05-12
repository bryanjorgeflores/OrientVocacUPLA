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
  styleNavBar: any = {};
  render: boolean = true;

  constructor(
    private titleService: Title,
    private router: Router,
    private modalService: NgbModal,
    
  ) { }

  ngOnInit() {
    this.render = true;
  }

  

  toggleNavbar() {
  }

  goTo(componentDIR: string): void {
    if (componentDIR === '/login') {
      document.body.style.background = 'rgb(111, 98, 227)';
      document.getElementById('navbar').style.display = 'none';
    } else {
      document.body.style.background = '#262626';
    }

    this.titleService.setTitle(componentDIR);
    this.router.navigateByUrl(componentDIR);
  }


  searchStudents(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
