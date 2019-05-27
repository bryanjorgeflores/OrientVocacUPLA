export const entryPasswordRequirements = (entryPassword: string, repeatedPassword: string): Array<any> => ([
  { message: 'Contraseña no Vacía', condition: entryPassword !== '' },
  { message: 'Longitud entre 6 y 20', condition: entryPassword.length >= 6 && entryPassword.length <= 20 },
  { message: 'Por lo menos un caracter especial o símbolo', condition: entryPassword.search(/[\W_]+/) !== -1 },
  { message: 'Por lo menos un caracter mayúscula', condition: entryPassword.search(/[A-Z]+/) !== -1 },
  { message: 'Por lo menos un caracter minúscula', condition: entryPassword.search(/[a-z]+/) !== -1 },
  { message: 'Por lo menos un caracter número', condition: entryPassword.search(/[0-9]+/) !== -1 },
  { message: 'Ambas contraseñas coinciden', condition: entryPassword === repeatedPassword },

]);

