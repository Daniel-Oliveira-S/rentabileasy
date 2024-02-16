import Header from "./components/header";
import "./styles/App.css";
import { CheckCircle } from "@phosphor-icons/react";
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <div className="filter-flex">
            <div className="hero-text">
              <h3>Mais que uma contabilidade</h3>
              <h2>Seu parceiro de Negócios</h2>
              <p>
                Tenha suas rotinas financeiras, fiscais e contábeis nas mãos de
                profissionais e tenha o acompanhamento com especialistas de
                negócios dedicados ao crescimento de sua empresa.
              </p>
            </div>
            <form action="" method="post">
              <label htmlFor="">
                <input type="text" />
              </label>
              <label htmlFor="">
                <input type="text" />
              </label>
              <label htmlFor="">
                <input type="text" />
              </label>
              <label htmlFor="">
                <input type="text" />
              </label>
            </form>
          </div>
        </section>
        <section id="about">
          <iframe
            src="https://www.youtube.com/embed/eHje2PAXj8c"
            title="Sobre a rentabileasy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="about-icons">
            <div className="icontext">
              <CheckCircle weight="fill" />
              <p>
                Garanta o melhor regime tributário e fiscal para a sua empresa
              </p>
            </div>
            <div className="icontext">
              <CheckCircle weight="fill" />
              <p>Controles e processos que evitam desperdicios</p>
            </div>
            <div className="icontext">
              <CheckCircle weight="fill" />
              <p>Visão completa de todos os indicadores de resultados</p>
            </div>
            <div className="icontext">
              <CheckCircle weight="fill" />
              <p>Atendimento 100% humanizado, lado a lado com você</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
