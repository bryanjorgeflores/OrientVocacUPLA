/* Para el selector de Fill Forward 
  statusFinalRotate(select: any, valueRotate: number) {
    select.style.transform = `rotate(${valueRotate * 3.6}deg)`
  }
  
  * Su Ejecucion.
  setTimeout(() => {
        this.statusFinalRotate(select, valueRotate);
      }, delay + 1000);
  */

let animateProgressBar = (select: any, valueRotate: number, delay: number): any => {
  select.animate([
    { transform: 'rotate(0deg)' },
    { transform: `rotate(${valueRotate * 3.6}deg)` },
  ], {
      delay,
      duration: 1000,
      fill: 'forwards'
    }
  );
}

export {
  animateProgressBar,
  
}