import { Component, OnInit } from '@angular/core';
import { CollegeGetProvider } from 'src/providers/get.providers/college.get.provider';
import { College } from 'src/interfaces/models/college.model';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {
  colleges: Array<College>;

  constructor(
    private collegeGetProvider: CollegeGetProvider,

  ) { }

  ngOnInit() {
    this.collegeGetProvider.getColleges()
      .subscribe((colleges: Array<College>) => {
        this.colleges = colleges;
      })
  }

}
