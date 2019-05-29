import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-vocational',
  templateUrl: './vocational.component.html',
  styleUrls: ['./vocational.component.scss']
})
export class VocationalComponent implements OnInit, OnDestroy {
  constructor(

  ) { }

  ngOnInit(): void {
    console.log('Vocational Component Init');
  }

  ngOnDestroy(): void {
    console.log('Vocational Compoment Destroy');
  }
}
