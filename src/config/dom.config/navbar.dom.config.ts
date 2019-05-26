let setStyleDefault = (): void => {
  document.getElementById('navbar').style.display = '';
  document.body.style.background = '#262626';
};

let setStyleHidden = (): void => {
  document.body.style.background = 'rgb(111, 98, 227)';
  document.getElementById('navbar').style.display = 'none';
};

let setStyleBody = (backgroundColor: string): void => {
  document.body.style.background = backgroundColor;
}


export {
  setStyleDefault,
  setStyleHidden,
  setStyleBody

}