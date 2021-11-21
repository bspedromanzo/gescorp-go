import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='headerContainer'>
            <div className='headerPhoto'>
                <p>Mz</p>
            </div>
            <div className='headerButtons'>
                <Link to="/" className='headerButton'>Listagem</Link>
                <Link to="/register" className='headerButton'>Cadastrar</Link>
            </div>
        </div>
    )
}

export default Header