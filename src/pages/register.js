'use client'
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import Layout from '../components/layouts/DefaultLayout';

function Register() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(null);
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error: signUpError } = await signUp(email, password);

        if (signUpError) {
            setError(signUpError.message);
            return;
        }

        // else successful
        sessionStorage.setItem('userData', JSON.stringify(result.user));
        router.push("/")
    }
    return (<div className="wrapper">
        <div className="form-wrapper m-12 text-lg">
        <h1 className="text-3xl font-bold m-3">Register</h1>
            <form onSubmit={handleForm} className="form p-3">
                <label htmlFor="email" className="m-3">
            <p>Email</p>
            <input className="m-3" onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
            </label>
            <label htmlFor="password">
                <p>Password</p>
                <input className="m-3" onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
            </label>
            <button className="bg-brown rounded-md p-2 text-white hover:bg-terracotta-orange" type="submit">Register</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    </div>);
}

Register.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Register;