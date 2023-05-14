import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Pet Adopt" />
                </header>

                <main>
                    <h1>Faça novos Amigos</h1>
                    <p>
                        Aqui você pode encontrar o seu amigo dos sonhos e alegrar-se com eles
                    </p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um pet</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;
