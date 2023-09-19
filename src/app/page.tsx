'use client'

import Link from 'next/link';

const Home = () => {
  return (
    <div className={'ml-5 mt-5'}>
      <h1 className={'mt-5 ml-5 mb-5 font-extrabold'}>Home Page Star Wars</h1>
      <Link className={'mx-5 mt-5 inline cursor-pointer'} href={'/films'}>Films</Link>
      <Link className={'mx-5 mt-5 inline cursor-pointer'} href={'/about'}>About</Link>
    </div>
  );
}

export default Home;
