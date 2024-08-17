import style from "./Header.module.css";

import { Link, NavLink } from "react-router-dom";
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
        <NavLink className={({isActive}) => `${isActive && style.active}`} to="/">Home</NavLink>
        <NavLink className={({isActive}) => `${isActive && style.active}`} to="/sobre">Sobre</NavLink>
        <NavLink className={({isActive}) => `${isActive && style.active}`} to="/projetos">Projetos</NavLink>
        <NavLink className={({isActive}) => `${isActive && style.active}`} to="/contatos">Contatos</NavLink >
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
