import { CheckOffer } from "./components/check-offer";
import Header from "./components/header";
import { Icontext } from "./components/icontext";
import "./styles/App.css";
import * as react from "react";
function App() {
  const [mobile, setMobile] = react.useState(false);

  react.useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

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
          <Icontext />
        </section>
        <section id="offers">
          <div className="offer-flex">
            <CheckOffer />
            <img src="" alt="" />
          </div>
        </section>
        <section id="indicative">
          <div className="title-text">
            <h2>
              Será que pra quem não sabe para onde ir, qualquer caminho serve,
              mesmo?
            </h2>
            <p>
              Estudos mostram que a falta de planejamento foi o principal motivo
              para 95% de empreendedores que fecharam as portas nos últimos
              anos. Entenda por que é crucial ter a Rentabileasy como seu
              parceiro de negócios:
            </p>
          </div>
          {mobile ? <img src="" alt="" /> : <img src="" alt="" />}
        </section>
        <section id="evolution"></section>
      </main>
    </>
  );
}

export default App;
