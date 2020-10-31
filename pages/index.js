import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Assistant from './assistant/index';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phasmophobia Assistant</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
      </Head>
      <main className="container">
        <div className="phass__banner">
          <img src="/background.png" />
        </div>
        <Assistant />
      </main>

      <footer className={styles.footer}>
        Contact me:&nbsp;
        <a
          href="mailto:pirela_carlos@hotmail.com"
          rel="noopener noreferrer"
        >
          Ceps
        </a>
        &nbsp;&copy; {(new Date()).getFullYear()}
      </footer>
    </div>
  )
}
