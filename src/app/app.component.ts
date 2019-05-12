import { Component } from '@angular/core';
import { StyleGlobalConfig } from 'src/config/globals.config/style.global.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navBarRender: boolean = true;
  constructor(
    public styleGlobalConfig: StyleGlobalConfig,

  ) { }
}
