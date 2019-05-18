import { Component, OnInit } from '@angular/core';

import { User } from 'src/interfaces/models/user.model';

import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  students: Array<User>;
  constructor(
    public userGlobalConfig: UserGlobalConfig,

  ) { }

  ngOnInit() {
    this.students = this.userGlobalConfig.studentsBySchool;
  }

}

