"use client"

import Login from '../components/Login';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Page() {
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [token, setToken] = useState('');
    const router = useRouter()

    useEffect(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }
        if (loginSuccess && router && typeof window !== 'undefined') { // Add typeof window check
          router.push(`/main`)
        }
    }, [loginSuccess, router, token]) // Remove router from the dependency array


    return (
        <div>
            <Login setLoginSuccess={setLoginSuccess} setJWTToken= {setToken}/>
            <p>Login Success: {loginSuccess.toString()}</p>
            <p>Token: {token}</p>
          </div>
      );
}