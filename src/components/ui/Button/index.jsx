import { PokebolaContext } from '@context/PokebolaContext';
import {
  actionAnimationBajar,
  actionAnimationCerrar,
  actionAnimationStop,
  actionClickReset,
} from '@reducers/pokebolaReducer';
import React, { useContext } from 'react';
import './index.scss';

const Button = ({ searchPokemon, searching }) => {
  const { dispatchAnimation, dispatchCounterCLick } =
    useContext(PokebolaContext);
  return (
    <div className="container-buttons">
      <button
        className="btn"
        onClick={() => {
          if (!searching) {
            dispatchCounterCLick(actionClickReset);
            dispatchAnimation(actionAnimationBajar);
            searchPokemon();
          }
        }}
      >
        Search Random Pokemon
      </button>
      {/* <button
      className='btn'
        onClick={() => {
          dispatchAnimation(actionAnimationBajar);
        }}
      >
        Bajar pokebola
      </button>
      <button  className='btn' onClick={() => dispatchAnimation(actionAnimationStop)}>
        detener
      </button>
      <button
       className='btn'
        onClick={() => {
          dispatchAnimation(actionAnimationCerrar);
        }}
      >
        IGNORAR
      </button> */}
    </div>
  );
};

export default Button;
