import React from 'react';

const Filho = ({ altura, peso }) => {
    const imc = peso / (altura * altura);
    let mensagem;

    if (imc < 18) {
        mensagem = <h3>Abaixo do peso</h3>;
    } else if (imc > 25) {
        mensagem = <h3>Acima do peso</h3>;
    } else {
        mensagem = <h3>Peso ideal</h3>;
    }

    return (
        <div>
            {mensagem}
        </div>
    );
};

export default Filho;