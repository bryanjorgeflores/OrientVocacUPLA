import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/models/user.model';
import { NavbarItem } from 'src/interfaces/navbar-item.interface';
import { studentNavbarItems, administratorNavbarItems } from 'src/services/navbar-item.service';

@Injectable()

export class UserGlobalConfig {
  public studentsBySchool: Array<User>;
  public typeUser: string;

  public studentNavbarItems: Array<NavbarItem> = studentNavbarItems;
  public administratorNavbarItems: Array<NavbarItem> = administratorNavbarItems;
}
