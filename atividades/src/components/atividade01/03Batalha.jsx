import React from 'react';

const Hero = ({ name, img }) => (
    <div>
        <h3>{name}</h3>
        <img src={img} alt={name} />
    </div>
);

const Enemy = ({ name, img }) => (
    <div>
        <h3>{name}</h3>
        <img src={img} alt={name} />
    </div>
);

const Arena = ({ children, arena }) => {
    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { arena })
    );

    return <div>{childrenWithProps}</div>;
};

const World = ({ children }) => <div>{children}</div>;

export { Hero, Enemy, Arena, World };
