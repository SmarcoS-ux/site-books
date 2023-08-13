import React from 'react'

import Home from './Home';

export default function Principal() {
    const tituloPagina = "React";
    const dados = [
        {isbn: "987-85-7522-xxx-x", titulo: "React", autor: "Maujor"},
        {isbn: "978-85-7522-776-3", titulo: "Design UX", autor: "Will"},
        {isbn: "987-85-7522-550-9", titulo: "Laravel para Ninjas", autor: "Jack"},
    ]

    return (
        <main className='principal'>
            <Home dados={dados}
                  tituloPagina={tituloPagina}/>
        </main> 
    )
}
