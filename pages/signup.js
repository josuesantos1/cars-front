import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'


import styles from '../styles/Home.module.css'
import users from '../api/users'

export default function SignUp() {

  const [first, setFirst] = useState()
  const [last, setLast] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const router = useRouter()

  const handlerFirst = (e) => {
    setFirst(e.target.value)
  }

  const handlerLast = (e) => {
    setLast(e.target.value) 
  }
  
  const handlerEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlerPassword = (e) => {
    setPassword(e.target.value)
  }

  const HandlerSignUp = async () => {
    const user = {first, last, email, password}

    users.signUp(user).then(user => {
      localStorage.setItem("token", user.data.token);
      router.push("/admin")
    }).catch(e => {
      localStorage.clear()
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cars - SignUp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cars
        </h1>
        <div className={styles.form}>
            <input type='text' placeholder="first name" onChange={handlerFirst}/>
            <input type='text' placeholder="last name" onChange={handlerLast}/>
            <input type='email' placeholder="e-mail" onChange={handlerEmail}/>
            <input type='password' placeholder="password" onChange={handlerPassword}/>
            <button onClick={HandlerSignUp}>login</button>
            <a>esqueci minha senha</a>
        </div>
      </main>
    </div>
  )
}
