import React from 'react';
import Pai from './components/atividade01/01Pai.jsx';
import * as PC from './components/atividade01/02MeuPC.jsx';


const App = () => {
    return (
        
        <div>
            <Pai/>
            <br/>
            <PC.PlacaMae nome="Placa Mãe Raiz" preco="R$ 500" />
            <PC.Memoria nome="SSD 500 GB" preco="R$ 200" />
            <PC.PlacaDeVideo nome="Placa de Video RTX 3090" preco="R$ 700" />
        </div>
    );
};

export default App;
