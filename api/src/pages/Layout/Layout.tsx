import React from 'react';

interface dataLayout {
    name: string;
}

const Layout: React.FC<dataLayout> = ({ name }) => {

    return (
        <div>
            <p>Olá, {name}!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam, ratione nostrum provident voluptate aspernatur consectetur, in quidem earum enim tempora nisi rem quae id ut culpa! Sed, error voluptas.</p>
        </div>
    );
};

export default Layout;