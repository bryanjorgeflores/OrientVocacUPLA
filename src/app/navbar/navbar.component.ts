import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { setStyleHidden } from 'src/config/styles.config/navbar.style.config';
import { User } from 'src/interfaces/models/user.model';
import { UserGetProvider } from 'src/providers/get.providers/user.get.provider';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  styleNavBar: any;
  render: boolean;
  students: Array<User>;
  inputSeachStudent: string;

  constructor(
    private titleService: Title,
    private router: Router,
    private modalService: NgbModal,
    private userGetProvider: UserGetProvider,
    
  ) { 
    this.styleNavBar = {};
    this.render = true;
    this.students = [];
    this.inputSeachStudent = '';
  }

  ngOnInit() {
    this.render = true;
  }

  

  toggleNavbar() {
  }

  goTo(componentDIR: string): void {
    if (componentDIR === '/login') {
      setStyleHidden();
    } 

    this.titleService.setTitle(componentDIR);
    this.router.navigateByUrl(componentDIR);
  }


  OpenBarsearchStudents(content: any): void {
    this.modalService.open(content, { size: 'lg' });
  }

  searchStudents(): void {

    if (this.inputSeachStudent.length >= 3) {
      this.userGetProvider.getStudents(this.inputSeachStudent)
        .subscribe(
          (students: Array<User>) => this.students = students,
          (err) => alert(err.error.text)
        );
    } else {
      alert('Se Requere más de Tres Caracteres');
      return;
    }
  }

}
