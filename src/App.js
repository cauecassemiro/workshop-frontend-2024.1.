import React, { useEffect, useState } from 'react';
import tvmaze from './tvmaze';
import Header from './components/Header';
import BuscarComponent from './components/BuscarComponent';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  

useEffect(()=>{
  const loadAll = async () => {
    let list = await tvmaze.getHomeList();
    setMovieList(list);
  }

    loadAll();
}, []);

useEffect(()=>{
  const scrollListener = () => {
    if(window.scrollY > 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  }

  window.addEventListener('scroll', scrollListener);
  return () => {
    window.removeEventListener('scroll', scrollListener);

  }

}, []);

  return (
    <div className="page">

    <Header black={blackHeader}/>

      <section className="listas">
        {movieList.map((item, key)=> (
          <div style={{ display: 'flex'}}>
            {item.items.map(filme => (
              <div>
              <h2 key={filme.show.id}>{filme.show.name}</h2>
              <img style={{ width: '100px', height: '100px'}} src={filme.show.image.original}></img>
              <p>Lançamento: {filme.show.premiered}</p>
              <p>Avaliação: {filme.show.rating.average}</p>
              <div>
                  <div dangerouslySetInnerHTML={{ __html: filme.show.summary}} />
            </div>
          </div>
          ))}
          </div>
        ))}
      </section>
      <section>
        <BuscarComponent />
      </section>
    </div>
  );
}