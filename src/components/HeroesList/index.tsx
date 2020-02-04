import './style.css';

import React from 'react';

interface IHero {
  name:string;
}

function HeroesList() {

  const [avengersList, setAvengersList] = React.useState<IHero[]>([]); //pesquisar sobre useState
  
  async function getHeroes() {
    const response = await fetch ('https://akabab.github.io/superhero-api/api/all.json');
    const heroes = await response.json();

    return heroes;
  }

  function getAvengers(heroes: IHero[]) {
    const heroNames = ['Thor', 'Black widow', 'Hulk', 'Spider-man', 'Vision'];

    const avengers = heroes.filter((hero) => {
      const exists = heroNames.includes(hero.name);

      return exists;
    });

    return avengers;
    
  }

  React.useEffect(() => {
    
    async function run() {
      const heroes = await getHeroes();
      const avengers = getAvengers(heroes);
  
      setAvengersList(avengers);
    }

    run();
  }, []);

  return (
    <div className="heroes-container">
      <div className="card">
        <h3>Black Widow</h3>

        {avengersList.map((avenger) => {
          return <h3>{avenger.name}</h3>
        })}
      </div>
    </div>
  );
}


export default HeroesList;