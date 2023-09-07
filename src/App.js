import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import './index.css';

import Topo from './components/Topo';
import Home from './components/Home';
import Frontend from './components/Frontend.js';
import Programacao from './components/Programacao';
import Design from './components/Design';
import Catalogo from './components/Catalogo';
import NotFound from './components/NotFound';
import Rodape from './components/Rodape';
import Livro from './components/Livro';



class App extends Component {

    state = {
        livros: []
    };

    async componentDidMount(){
        try{
            const {data: livros} = await Axios.get("/api/todosOsLivros.json");
            this.setState({livros});

        } catch (error){
            console.log(error);

            /*document
                .querySelectorAll(".principal")[0]
                .queryAdjacentHTML("beforeend", "<p class='erro'>Mensagem de Erro.</p>");*/
        }
    }

    render() {
        return(
            <Router>
                <>
                    <Topo/>
                    <Routes>
                        <Route exact path="/" element={<Home livros={this.state.livros}/>}/>
                        <Route exact path="/frontend" element={<Frontend livros={this.state.livros}/>}/>
                        <Route exact path="/programacao" element={<Programacao livros={this.state.livros}/>}/>
                        <Route exact path="/design" element={<Design livros={this.state.livros}/>}/>
                        <Route exact path="/catalogo" element={<Catalogo livros={this.state.livros}/>}/>
                        <Route path="/livros/:livroSlug" element={(props) => {
                            const livro = this.state.livros.find(
                                (livro) => livro.slug === props.match.params.livroSlug
                                );
                            if (livro){
                                console.log(livro);
                                return <Livro livros={livro}/>
                        
                            } else 
                                console.log(livro);
                                return <NotFound/>;
                        }}
                        />
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>  
                    <Rodape/>         
                </>
            </Router>
        );
    }
}


export default App;
