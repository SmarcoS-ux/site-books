import React from 'react'
import { NavLink, Link } from 'react-router-dom';

let linkCorrente = {
    color: '#456826'
};

const Navegacao = () => (
    <ul>
        <li>
            <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
            <NavLink exact activeStyle={linkCorrente} to="/frontend">FrontEnd</NavLink>
        </li>
        <li>
            <NavLink exact activeStyle={linkCorrente} to="/programacao">Programação</NavLink>
        </li>
        <li>
            <NavLink exact activeStyle={linkCorrente} to="/design">Design</NavLink>
        </li>
        <li>
            <NavLink exact activeStyle={linkCorrente} to="/catalogo">Catalogo</NavLink>
        </li>
    </ul>
);

export default Navegacao;