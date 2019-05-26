import { Component, OnInit } from '@angular/core';
import { setStyleHidden } from 'src/config/dom.config/navbar.dom.config';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setStyleHidden();
  }

}
