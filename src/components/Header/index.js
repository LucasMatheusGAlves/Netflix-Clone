import React from 'react'
import './index.css'
import logo from './logo.png'

export default ({black}) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="Logo Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-933-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFKK6v8Xsq0zuWKuGVn4zdjdzEj6PCR2PUlnsQXMNC1ac1itCk9fvQODW3oIWuCo_JANsujRABfCpLhjs7wr76mM4Jg.png?r=06d" alt="Imagem Usuário"></img>
                </a>
            </div>
        </header>
    );
}