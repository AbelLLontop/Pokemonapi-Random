import { PokebolaContext } from '@context/PokebolaContext';
import { actionAnimationAbrir, actionAnimationMoverse, actionAnimationStop, actionAnimationSubir, actionClickAdd, animationsPokebola } from '@reducers/pokebolaReducer';
import React, { useContext, useEffect, useState } from 'react';
import BottomPokebola from './components/BottomPokebola';
import TopPokebola from './components/TopPokebola';


import './index.scss';

const Pokebola = ({ pokemon }) => {
  const {animation, dispatchAnimation,dispatchCounterCLick,counterCLick}=useContext(PokebolaContext);


  const controllerAnimationsEnd = (animationName) => {
    switch(animationName){
      case animationsPokebola.bajar:
        dispatchAnimation(actionAnimationMoverse);
        break;
      // case animationsPokebola.stop:
      //   dispatchAnimation(actionAnimationAbrir);
      //   break;
      case animationsPokebola.subir_top:
      case animationsPokebola.subir_botom:
        dispatchAnimation(actionAnimationSubir);
        break;
    }  
  }

  useEffect(()=>{
    if(counterCLick ==3){
      dispatchAnimation(actionAnimationAbrir);
    }
  },[counterCLick])

 
  return (
<>
<div
      onClick={() => dispatchCounterCLick(actionClickAdd) }
        onAnimationEnd={(a) => {controllerAnimationsEnd(a.animationName)}}
        className={`pokebola ${animation} `       
      }
      >
        <TopPokebola />
        <BottomPokebola />
        <img src={pokemon} alt="" />
      </div>
    
</>
     
     

  );
};



export default Pokebola;