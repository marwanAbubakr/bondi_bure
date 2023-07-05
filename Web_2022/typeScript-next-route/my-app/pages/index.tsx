import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Items from './items'

const Home: NextPage = () => {
  return (
    <>
      <Items />
    </>
  )
}

export default Home
