const setStyleDefault = (): void => {
  document.getElementById('navbar').style.display = '';
  document.body.style.background = '#262626';
};

// 'rgb(111, 98, 227)'
const setStyleHidden = (backgroundColor: string): void => {
  document.body.style.background = backgroundColor;
  document.getElementById('navbar').style.display = 'none';
};

const setStyleBody = (backgroundColor: string): void => {
  document.body.style.background = backgroundColor;
};


export {
  setStyleDefault,
  setStyleHidden,
  setStyleBody

};
