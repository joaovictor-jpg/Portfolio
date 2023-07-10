import { BsArrowRight } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";

function Card({ name, description, html_url, language }) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      {description !== null ? <p>{description}</p> : <h4>Pacotes</h4>}
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <h4>{language}</h4>
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="noopenner norefferer"
          className={styles.botao}
        >
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Card;
