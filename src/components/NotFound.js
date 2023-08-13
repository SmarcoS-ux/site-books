import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main className='principal'>
            <h2>404!</h2>
            <p>Página não encontrada ou removida. 
                <br/><br/>
                <Link to='/'>Ir para Home</Link>
            </p>
        </main>
    );
}
