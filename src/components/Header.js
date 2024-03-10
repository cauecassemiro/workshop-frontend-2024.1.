import React from 'react';
import './Header.css';

export default () => {
    return (
        <header className="black">
            <div className="header--logo">
                <a href="/">
                   <img src="https://logopng.com.br/logos/netflix-94.png" alt="Netflix" /> 
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}