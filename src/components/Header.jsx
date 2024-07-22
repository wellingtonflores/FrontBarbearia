import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        function checkLoginStatus(){
            const token = localStorage.getItem('token')
            if(token){
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        }
        checkLoginStatus()

        window.addEventListener('storage', checkLoginStatus)

        return () => window.removeEventListener('storage', checkLoginStatus)
    }, [])

    function handleLogout(){
        localStorage.removeItem('token');
        setLoggedIn(false)
        navigate('/')
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <a href="/" style={{ fontSize: "50px" }}>Página Inicial</a>
            {isLoggedIn ? (
                <div>
                    <a href="/agendar" style={{ fontSize: "50px" }}>Agendar</a>
                    <button onClick={handleLogout} style={{ fontSize: "50px" }}>Logout</button>
                </div>
                
            ) : (
                <>
                    <a href="/login" style={{ fontSize: "50px" }}>Login</a>
                    <a href="/registro" style={{ fontSize: "50px" }}>Registrar-se</a>
                </>
            )}
        </div>
    );
}
