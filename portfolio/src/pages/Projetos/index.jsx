import styles from "./Projetos.module.css";

import Card from "../../components/Card";

import { useState, useEffect } from "react";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/joaovictor-jpg/repos?page=1&per_page=50",
        {
          method: "GET",
          header: {
            "Content-type": "application/json",
          },
        }
      )
        .then((resp) => resp.json())
        .then((data) => {
          setRepositories(data);
        })
        .catch((err) => console.log(err));
    };
    buscarRepositorios();
  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <section className={styles.lista}>
          {
            repositories.map((repo) => (
              <Card
                key={repo.id}
                name={repo.name}
                description={repo.description}
                html_url={repo.html_url}
                language={repo.language}
              />
            ))
          }
        </section>
      ) : (
        <p>Carregando repósitorio...</p>
      )}
    </section>
  );
}

export default Projetos;
