import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from 'component/About'
import Card from 'component/Card'
import ListPokemonByType from 'component/ListPokemonByType';
const Home: NextPage = () => {
  return (
    <Router>
      <>
        <ListPokemonByType></ListPokemonByType>
      </>
    </Router>
  )
}

export default Home
