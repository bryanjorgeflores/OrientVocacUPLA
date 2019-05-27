import { Component, OnInit } from '@angular/core';

import { User } from 'src/interfaces/models/user.model';

import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  students: Array<User>;
  constructor(
    private router: Router,
    public userGlobalConfig: UserGlobalConfig,

  ) { }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.students = this.userGlobalConfig.studentsBySchool;
  }

}

