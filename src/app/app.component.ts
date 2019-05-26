import { Component, OnInit } from '@angular/core';
import { StyleGlobalConfig } from 'src/config/globals.config/style.global.config';
import { setStyleHidden } from 'src/config/dom.config/navbar.dom.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(
    public styleGlobalConfig: StyleGlobalConfig,

  
  ) { }

}
