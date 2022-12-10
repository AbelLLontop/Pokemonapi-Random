export const animationsPokebola = {
    moverse: 'wobble-hor-bottom',
    stop: 'stop-animation',
    subir: 'bounce-out-top',
    bajar: 'bounce-in-top',
    abrir: 'disarm',
    cerrar: 'assemble',
    subir_top:'slide-in-top',
    subir_botom:'slide-in-bottom'
  };


 export  const reducerAnimation = (estado, action) => {
    switch (action.type) {
      case 'moverse':
        return 'wobble-hor-bottom';
      case 'subir':
        return 'bounce-out-top';
      case 'bajar':
        return 'bounce-in-top';
      case 'abrir':
        return 'disarm';
      case 'cerrar':
        return 'assemble';
      case 'stop':
        return 'stop-animation';
      default:
        throw new Error();
    }
  };


  export  const reducerClicks = (estado, action) => {
    switch (action.type) {
      case 'add':
        return estado + 1;
      case 'reset':
        return 0;
      default:
        throw new Error();
    }
  };


  export const actionClickAdd = { type: 'add' };
  export const actionClickReset = { type: 'reset' };


export const actionAnimationStop = { type: 'stop' };
export const actionAnimationBajar = { type: 'bajar' };
export const actionAnimationAbrir = { type: 'abrir' };
export const actionAnimationCerrar = { type: 'cerrar' };
export const actionAnimationSubir = { type: 'subir' };
export const actionAnimationMoverse = { type: 'moverse' };

