import { Component, OnInit } from '@angular/core';

import { User } from 'src/interfaces/models/user.model';

import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
  students: Array<User>;
  constructor(
    public userGlobalConfig: UserGlobalConfig,

  ) { }

  ngOnInit() {
    this.students = this.userGlobalConfig.studentsByCollege;
  }

}

