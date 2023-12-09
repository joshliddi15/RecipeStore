'use client'
import React, {useState} from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation';
import Layout from "@/components/Layout";
import Link from "next/link";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
          setError(error);
          return;
        }

        sessionStorage.setItem('userData', JSON.stringify(result.user));
        router.push("/")
    }
    return (<div className="wrapper">
      <div className="form-wrapper m-12 text-lg">
          <h1 className="text-3xl font-bold m-3">Log in</h1>
          <form onSubmit={handleForm} className="form p-3">
              <label htmlFor="email" className="m-3">
                  <p>Email</p>
                  <input className="m-3" onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
              </label>
              <label htmlFor="password">
                  <p>Password</p>
                  <input className="m-3" onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
              </label>
              <button className="bg-brown rounded-md p-2 text-white hover:bg-terracotta-orange" type="submit">Log In</button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="m-12 text-lg">
        <p>Don&#39;t have an account? <Link className="text-blue-700 underline" href="/register">Sign Up</Link></p>
      </div>
    </div>);
}

Login.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Login;