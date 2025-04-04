import styles from "./Contatos.module.css";

import { GoMail } from "react-icons/go";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

function Contatos() {
  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre</p>
      <div className={styles.icons}>
        <a
          href="mailto:joaovictormdasilva676@gmail.com"
          target="_blank"
          rel="nopener noreferre"
        >
          <GoMail className={styles.icon} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5521973711216"
          target="_blank"
          rel="nopener noreferre"
        >
          <BsWhatsapp className={styles.icon} />
        </a>
        <a
          href="https://github.com/joaovictor-jpg"
          target="_blank"
          rel="nopener noreferre"
        >
          <BsGithub className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/joaoperfilv2/"
          target="_blank"
          rel="nopener noreferre"
        >
          <BsLinkedin className={styles.icon} />
        </a>
      </div>
    </section>
  );
}

export default Contatos;
