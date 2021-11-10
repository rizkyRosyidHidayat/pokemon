import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import styles from '../styles/Home.module.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from 'component/About'

const Home: NextPage = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <NextLink href="/settings">Settings (SSR)</NextLink>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/" element={<About></About>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default Home
