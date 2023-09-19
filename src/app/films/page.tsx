'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Film = () => {
  const [films, setFilms] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then(data => setFilms(data.results));
    console.log('oa');
  }, []);

  return (
    <div className={'ml-5 mt-5'}>
      <h1 className={'mt-5 ml-5 mb-5 h1'}>Films Page Star Wars</h1>
      {
        films.length === 0 ? <div className={'mt-5 ml-5 mb-5 h1'}>Loading...</div> : (films.map((film, index) => (
          <div key={index} className={'inline'}>
            <Link href={`/films/${film.title}`}>
              <div className={'mx-5 mt-5 inline cursor-pointer'}>{film.title}</div>
            </Link>
          </div>
        )))
      }
    </div>
  );
}

export default Film;
