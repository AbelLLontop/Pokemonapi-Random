
import Pokebola from '@components/common/Pokebola';
import Button from '@components/ui/Button';
import Loader from '@components/ui/Loader';
import PokebolaProvider from '@providers/PokebolaProvider';
import React, { useEffect, useState } from 'react';
import './index.scss';
import urlRandomPokemon from './utils/urlRandomPokemon';





const Home = () => {
  const [pokemon, setPokemon] = useState('');
  const [searching, setSearching] = useState(false);

  const searchPokemon = () =>{
    setSearching(true);
    urlRandomPokemon().then(img => {
      setPokemon(img);
      setSearching(false);

    })
      
    }

  return (<div className='Home'>
   
  <PokebolaProvider>
      <div className="container">
      <div className="header">
  <h1>POKE RANDOM</h1>
  <p>Dev Abel Llontop Meza</p>
    </div>

        {searching && <Loader/>}
        {!searching && <Pokebola pokemon={pokemon} />}
  
          <Button searchPokemon={searchPokemon} searching={searching}/>

      </div>
    </PokebolaProvider>
  </div>
    
  );
};

export default Home;

