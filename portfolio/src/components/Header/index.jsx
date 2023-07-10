import style from "./Header.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={style.header}>
      <Link to="/">
        <span>João Victor</span>
      </Link>
      <nav
        className={`${style.menuSandwich} ${showMenu ? style.show : ''}`}
        onClick={toggleMenu}
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <div onClick={toggleMenu} className={style.menuButtom}>
        <span className={style.linha}></span>
        <span className={style.linha}></span>
        <span className={style.linha}></span>
      </div>
    </header>
  );
}

export default Header;
