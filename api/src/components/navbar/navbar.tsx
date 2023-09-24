
type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="grid-header">
      <figure>
        <img src="/icons/icon_ionicHealth.png" alt="iconIonicHealth" />
      </figure>
      <nav>
        <span>
          <h3 className="user-name">João Santos da Silva</h3>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
