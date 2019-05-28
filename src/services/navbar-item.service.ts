import { NavbarItem } from 'src/interfaces/navbar-item.interface';

export const studentNavbarItems: Array<NavbarItem> = [
  { icon: 'assets/icons.assets/book.ico', title: 'Evaluaciones', action: 'goTo', dir: '/evaluations' },
  { icon: 'assets/icons.assets/book.ico', title: 'Resultados', action: 'goTo', dir: '/results' },
  { icon: 'assets/icons.assets/book.ico', title: 'Último', action: 'goTo', dir: '/last' },
  { icon: 'assets/icons.assets/book.ico', title: 'Salir', action: 'logout', dir: '/login' },

];

export const administratorNavbarItems: Array<NavbarItem> = [
  { icon: 'assets/icons.assets/book.ico', title: 'Inicio', action: 'goTo', dir: '/evaluations' },
  { icon: 'assets/icons.assets/book.ico', title: 'Colegios', action: 'goTo', dir: '/schools' },
  { icon: 'assets/icons.assets/book.ico', title: 'Alumnos', action: 'openBarSearchStudents', dir: 'content' },
  { icon: 'assets/icons.assets/book.ico', title: 'Salir', action: 'logout', dir: '/login' },

];
