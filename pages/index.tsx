import type { NextPage } from 'next'
import Head from 'next/head'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ListPokemonByType from 'component/ListPokemonByType';
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
          <>
            <ListPokemonByType></ListPokemonByType>
          </>
        </Router>
      </main>
    </>
  )
}

export default Home
