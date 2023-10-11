import React from 'react';

interface dataFooter {
  name: string;
}

const Footer: React.FC<dataFooter> = ({ name }) => {
  const styleComponent: React.CSSProperties = {
    
  };

  return (
    <div style={styleComponent}>
      <p>Olá, {name}!</p>
    </div>
  );
};

export default Footer;