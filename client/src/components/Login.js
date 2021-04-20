import * as react from 'react'

export default function Login() {
    const googleLogin = () => {
        window.open("http://localhost:5000/auth/google","self")
    }
    return (
        <div>
             <h1>Login</h1>
             <div>
                 <a onClick={googleLogin}>
                     Log In with Google
                 </a>
             </div>
        </div>    
    )
}