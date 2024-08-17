import styles from "./Sobre.module.css";
import avatar from "./imagens/WhatsApp Image 2023-07-04 at 21.25.28.jpeg";
import sql from "./imagens/icon-sql.svg";
import { RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { BsFiletypeSql } from "react-icons/bs";

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
            Na posição de Desenvolvedor Full-Stack, é minha responsabilidade criar e manter tanto o front-end quanto o back-end de aplicativos web. Com conhecimento em Java, React.js e SQL, posso desenvolver aplicativos eficazes, escaláveis e de fácil compreensão.
          </p>
          <p>
            Tenho expertise em desenvolver aplicações dinâmicas e intuitivas, sempre priorizando a experiência do usuário.
          </p>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <RiHtml5Fill size={100} color="#16213E" />
          <RiCss3Fill size={100} color="#16213E" />
          <RiJavascriptFill size={120} color="#16213E" />
          <IoLogoSass size={120} color="#16213E" />
          <SiTailwindcss size={100} color="#16213E" />
          <RiReactjsLine size={100} color="#16213E" />
          <FaJava size={100} color="#16213E" />
          <BsFiletypeSql size={100} color="#16213E" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
