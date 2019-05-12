import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CollegeGetProvider } from 'src/providers/get.providers/college.get.provider';
import { UserGetProvider } from 'src/providers/get.providers/user.get.provider';

import { College } from 'src/interfaces/models/college.model';
import { User } from 'src/interfaces/models/user.model';

import { UserGlobalConfig } from 'src/config/globals.config/user.global.config';


@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})


export class CollegesComponent implements OnInit {
  colleges: Array<College>;

  constructor(
    private router: Router,
    private collegeGetProvider: CollegeGetProvider,
    private userGetProvider: UserGetProvider,
    public userGlobalConfig: UserGlobalConfig,

  ) { }

  ngOnInit() {
    this.collegeGetProvider.getColleges()
      .subscribe((colleges: Array<College>) => {
        this.colleges = colleges;
      })
  }

  goToStudentsByCollege(college: College): void {
    localStorage.setItem('college', JSON.stringify(college));

    this.userGetProvider.getStudentsByCollege(college._id)
      .subscribe(
        (students: Array<User>) => {
          this.userGlobalConfig.studentsByCollege = students;
          this.router.navigateByUrl('/college');
        },
        (err) => alert(err.error.text)
      );
  }

}
