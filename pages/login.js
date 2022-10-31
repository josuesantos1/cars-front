import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cars - Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cars
        </h1>
        <form className={styles.form}>
            <input type='email' placeholder="e-mail"/>
            <input type='password' placeholder="password"/>
            <button type='submit'>login</button>
            <a>esqueci minha senha</a>
        </form>
      </main>
    </div>
  )
}