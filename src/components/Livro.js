import React from 'react'

export default function Livros({livros}) {
    return (
        <main className='principal'>
            <div className='pag-livro'>
                <h2>{livros.titulo}</h2>
                <div className='livro'>
                    <img src={"/imagens/capas/" + livros.id + ".jpg"} 
                         alt="Thumbnail da capa do livro..."
                    />
                    <ul>
                       <li>ISBN: {livros.isbn}</li> 
                       <li>Ano: {livros.ano}</li> 
                       <li>Páginas: {livros.paginas}</li> 
                       <li>Preço: R${livros.preco},00</li>  
                    </ul>
                    <hr/>
                    <h3>Descrição do livro</h3>
                    <p>{livros.descricao}</p>
                </div>
            </div>
        </main>
    );
}

