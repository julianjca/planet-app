import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import SearchInput from '../components/SearchInput'
import Planets from '../components/Planets'

const HomePage = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br /> <span>The Planet App</span>
        </h1>
        <SearchInput />
        <Planets planets={data.results} />
      </main>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('https://swapi.dev/api/planets')
  const data = await res.json()

  return {
    props: {
      data,
    }
  }
}

export default HomePage
