import React, { useState } from 'react';
import tvmaze from '../tvmaze';

const BuscarComponent = () => {
    const [query, setQuery] = useState('');
    const [autor, setAutor] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearchClick = async () => {
        var autor =  await tvmaze.getEpisode(query);
        setAutor(autor);
    };
    
    return (
        <div>
            <input 
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Digite sua pesquisa"
        />
        <button onClick={handleSearchClick}>Pesquisar</button>
        {autor[0] && autor[0].items.map(item => (
            <p key={item.person.id}>{item.person.name}</p>
        ))}
       </div>
        
    );
};

export default BuscarComponent;