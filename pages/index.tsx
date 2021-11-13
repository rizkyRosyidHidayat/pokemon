import type { NextPage } from 'next'
import Head from 'next/head'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PokemonStarter from 'component/PokemonStarter';
import DetailPokemon from 'component/DetailPokemon';
import MyPokemonList from 'component/MyPokemonList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PokeLab</title>
        <meta name="description" content="PokeLab is apps pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Router>
          <Routes>
            <Route path="/" element={<PokemonStarter></PokemonStarter>}></Route>
            <Route path="/detail/:name" element={<DetailPokemon></DetailPokemon>}></Route>
            <Route path="/pocket" element={<MyPokemonList></MyPokemonList>}></Route>
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default Home
