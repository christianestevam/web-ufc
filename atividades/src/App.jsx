import React from 'react';
import Pai from './components/atividade01/01Pai.jsx';
import PC from './components/atividade01/02MeuPC.jsx';
import { Hero, Enemy, Arena, World } from './components/atividade01/03Batalha.jsx';

const App = () => {
    return (
        
        <div>
            <Pai/>
            <br/>
            <PC.PlacaMae nome="Placa Mãe Raiz" preco="R$ 500" />
            <PC.Memoria nome="SSD 500 GB" preco="R$ 200" />
            <PC.PlacaDeVideo nome="Placa de Video RTX 3090" preco="R$ 700" />

            <World>
            <Arena arena="Cidade Republica – Underground Arena">
                <Hero name="Korra" img="korra.png" />
                <Enemy name="Amon Dobrador de Sague" img="amon.png" />
            </Arena>
        </World>
        </div>
       
    );
};

export default App;
