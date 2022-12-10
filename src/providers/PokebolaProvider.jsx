import { PokebolaContext } from '@context/PokebolaContext';
import { reducerAnimation, reducerClicks } from '@reducers/pokebolaReducer';
import React, { useReducer, useState } from 'react'

const PokebolaProvider = ({children}) => {
    const [animation, dispatchAnimation] = useReducer(reducerAnimation, 'none');
    const [counterCLick, dispatchCounterCLick] = useReducer(reducerClicks, 0);



  return (
    <PokebolaContext.Provider value={{animation,dispatchAnimation,counterCLick, dispatchCounterCLick}}>
        {children}
    </PokebolaContext.Provider>
  )
}

export default PokebolaProvider