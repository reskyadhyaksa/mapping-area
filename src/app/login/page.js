'use client'

import { useState } from "react"
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [ error, setError ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                sessionStorage.setItem('user', user)
                console.log(user)
                if ( user ){
                    router.push('/admin')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                if( errorCode == 'auth/invalid-email') {
                    setError('email-error')
                } else if ( errorCode == 'auth/invalid-credential') {
                    setError('invalid-credential')
                } else if ( errorCode == 'auth/missing-password') {
                    setError('missing-password')
                }
        });
    }
    return <>
        <div className="flex bg-white border-2 h-[95vh] justify-center items-center">
            <div className="flex flex-col border-2 rounded-md items-center px-7 py-5 gap-5">
                <h1 className="font-bold text-2xl">Login Page</h1>

                <div className="flex flex-col w-full">
                    <p className="w-full font-bold">Email</p>
                    <input className="nama bg-gray-200 focus:border-none rounded-md w-72 px-2" type="text"
                        onChange={(e) => setEmail(e.target.value)}/>
                    <span>{
                        error === 'email-error' && <h5 className="ml-1 text-sm text-red-500 font-bold">Masukkan Email Valid</h5>
                    }</span>
                </div>

                <div>
                    <p className="w-full font-bold">Password</p>
                    <input className="nama bg-gray-200 focus:border-none rounded-md w-72 px-2" type="text"
                        onChange={(e) => setPassword(e.target.value)}/>
                    <span>{
                        error === 'missing-password' && <h5 className="ml-1 text-sm text-red-500 font-bold">Masukkan Password</h5>
                    }</span>
                </div>
                <div>
                    {error === 'invalid-credential' && <h5 className="text-red-500 font-bold text-sm">Email/Password Salah</h5>
                    }
                </div>
                <a onClick={() => handleLogin()} className="font-bold bg-[#232323] text-white px-10 py-1 rounded-md ">LOGIN</a>
                
            </div>
            {/* <div>2</div> */}
        </div>
    </>
}