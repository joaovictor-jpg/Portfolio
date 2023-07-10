import { Link } from "react-router-dom";

import style from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={style.home}>
        <div className={style.apresentacao}>
          <p>
            Olá, Sou <br />
            <span>João Victor</span> <br />
            Dev full stack
          </p>
          <Link to="/sobre" className={`${style.btn} ${style.btn_red}`}>
            Saiba mais
          </Link>
        </div>
        <figure>
          <img src="./developer-red.svg" alt="Imagem de home" />
        </figure>
      </section>
    </>
  );
}

export default Home;
