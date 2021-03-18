import React, { useEffect, useState } from 'react'
import Api from './api'
import './App.css'

import Movies from './components/Movies/index'
import FeaturedMovie from './components/FeaturedMovie/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      let list = await Api.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let ramdomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[ramdomChosen];
      let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && <FeaturedMovie item={featuredData}/>}

      <section className="lists">
        {movieList.map((item, key) => (
          <Movies key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />
    </div>
  )
}