import styles from "./Sobre.module.css";
import avatar from "./imagens/WhatsApp Image 2023-07-04 at 21.25.28.jpeg";
import css from "./imagens/icon-css.svg";
import html from "./imagens/icon-html.svg";
import js from "./imagens/icon-js.svg";
import c from "./imagens/icon-c.svg";
import react from "./imagens/icon-react.svg";
import sql from "./imagens/icon-sql.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="João victor" className={styles.avatar} />
        <div className={styles.textos}>
          <h2 className={styles.alignment}>Sobre</h2>
          <p>
            Sou <span>João Victor</span> <br /> <strong>Dev Full Stack</strong>
          </p>
          <p>Trabalho com desenvolvimento Web</p>
          <p>
            Como Desenvolvedor Full-Stack, tenho a responsabilidade de
            desenvolver e manter o front-end e back-end de aplicativos para web.
            Com a minha experiência em C#, React.js e SQL, sou capaz de criar
            aplicativos eficientes, escaláveis e de fácil compreensão.
          </p>
          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas,{" "}
            <br /> com foco na experiência do usuário.
          </p>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt="Ícon do Html" className={styles.icon} />
          <img src={css} alt="Ícon do css" className={styles.icon} />
          <img src={js} alt="Ícon do js" className={styles.icon} />
          <img src={react} alt="Ícon do react" className={styles.icon} />
          <img src={c} alt="Ícon do node" className={styles.icon} />
          <img src={sql} alt="João victor sql" className={styles.icon} />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
