
import React from 'react';


interface dataNavBar {
  name: string;
}

const NavBar: React.FC<dataNavBar> = ({name}) => {
  return (
    <>
      <header className="grid-header">
      <figure>
        <img src="/icons/icon_ionicHealth.png" alt="iconIonicHealth" />
      </figure>
      <nav>
        <span>
          <h3 className="user-name">{name}</h3>
        </span>
      </nav>
    </header>
    </>
  )
};
export default NavBar;
