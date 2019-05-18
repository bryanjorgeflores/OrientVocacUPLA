import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SchoolGetProvider } from 'src/providers/get.providers/school.get.provider';
import { UserGetProvider } from 'src/providers/get.providers/user.get.provider';

import { School } from 'src/interfaces/models/school.model';
import { User } from 'src/interfaces/models/user.model';

import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})


export class SchoolsComponent implements OnInit {
  schools: Array<School>;

  constructor(
    private router: Router,
    private schoolGetProvider: SchoolGetProvider,
    private userGetProvider: UserGetProvider,
    public userGlobalConfig: UserGlobalConfig,

  ) { }

  ngOnInit() {
    this.schoolGetProvider.getSchools()
      .subscribe((schools: Array<School>) => {
        this.schools = schools;
      })
  }

  goToStudentsBySchool(school: School): void {
    localStorage.setItem('school', JSON.stringify(school));

    this.userGetProvider.getStudentsBySchool(school._id)
      .subscribe(
        (students: Array<User>) => {
          this.userGlobalConfig.studentsBySchool = students;
          this.router.navigateByUrl('/school');
        },
        (err) => alert(err.error.text)
      );
  }

}
