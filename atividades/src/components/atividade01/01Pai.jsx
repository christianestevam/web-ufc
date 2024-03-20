import React from 'react';
import Filho from './01Filho.jsx';

const Pai = () => {
    return (
        <div>
            <Filho altura={1.8} peso={90} />
        </div>
    );
};

export default Pai;
