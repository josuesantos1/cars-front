import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import users from '../api/users'

export default function Home() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const router = useRouter()

  const handlerEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlerPassword = (e) => {
    setPassword(e.target.value)
  }

  const HandlerSignIn = async () => {
    const user = {email, password}

    users.signIn(user).then(user => {
      localStorage.setItem("token", user.token);
      router.push("/admin")
    }).catch(e => {
      localStorage.clear()
    })
  }

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
        <div className={styles.form}>
            <input type='email' placeholder="e-mail" onChange={handlerEmail}/>
            <input type='password' placeholder="password" onChange={handlerPassword}/>
            <button onClick={HandlerSignIn}>login</button>
            <a>esqueci minha senha</a>
        </div>
      </main>
    </div>
  )
}
