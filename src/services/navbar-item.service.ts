import { NavbarItem } from 'src/interfaces/navbar-item.interface';

export const StudentNavbarItems: Array<NavbarItem> = [
  {
    icon: 'assets/icons.assets/book.ico', title: 'Evaluaciones',
    action: () => {
      this.router.navigateByUrl('/evaluations');
    }
  },
  {
    icon: 'assets/icons.assets/book.ico', title: 'Resultados',
    action() {
      alert('resultados');
    }
  },
  {
    icon: 'assets/icons.assets/book.ico', title: 'Último',
    action() {
      alert(this);
    }
  },
  {
    icon: 'assets/icons.assets/book.ico', title: 'Salir',
    action() {
      localStorage.clear();
      this.router.navigateByUrl('/login');
    }
  },


];

export const AdministratorNavbarItems: Array<NavbarItem> = [
  { icon: 'assets/icons.assets/book.ico', title: 'Inicio', action: `/evaluations` },
  { icon: 'assets/icons.assets/book.ico', title: 'Colegios', action: `/colleges` },
  { icon: 'assets/icons.assets/book.ico', title: 'Alumnos', action: `openBarSearchStudents(content)` },
  { icon: 'assets/icons.assets/book.ico', title: 'Salir', action: `logout()` },

];
