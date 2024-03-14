import { CheckOffer } from "./components/check-offer";
import { CirclesGrid } from "./components/circles-grid";
import { Cta } from "./components/cta";
import Header from "./components/header";
import { PriceCard } from "./components/price-card";
import { ServicesIconText } from "./components/services-icon-text";
import "./styles/App.css";
import * as react from "react";
import { TestimonialsSwiper } from "./utils/testimonials.swiper";
import { Phone } from "lucide-react";
import { InstagramLogo } from "@phosphor-icons/react";
import Whatsapp from './assets/wp-icon.png'

import blackWoman from "./assets/black-woman.jpg";
import { HeroForm, Newsletter } from "./utils/forms";
function App() {
  const [mobile, setMobile] = react.useState(false);



  react.useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 834);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <body>
      <Header />
      <main>
        <section id="hero">
          <div className="filter">
            <div className="container">
              <div className="hero-text">
                <h3>Mais que uma contabilidade, seu</h3>
                <h2> Parceiro de Negócios</h2>
                <p>
                  Tenha suas rotinas financeiras, fiscais e contábeis nas mãos
                  de profissionais e tenha o acompanhamento com especialistas de
                  negócios dedicados ao crescimento de sua empresa.
                </p>
              </div>
              <HeroForm />
            </div>
          </div>
        </section>
        <section id="about" className="container">
          <iframe
            src="https://www.youtube.com/embed/eHje2PAXj8c"
            title="Sobre a rentabileasy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <Cta classname="form" href="#hero">
            Fale conosco
          </Cta>
        </section>
        <section id="offers">
          <div className="offers container">
            <CheckOffer />
            <img src={blackWoman} alt="" />
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
          {mobile ? (
            <img
              className="indicative"
              src="https://news.rentabileasy.com.br/wp-content/uploads/2023/12/Group-4-1.png"
              alt=""
            />
          ) : (
            <img
              src="https://news.rentabileasy.com.br/wp-content/uploads/2023/12/comparar-3.png"
              alt=""
            />
          )}
        </section>
        <section id="evolution">
          <div className="title-text">
            <h2>Evolua de uma contabilidade, para uma parceira de negócios</h2>
            <p>Experts, contadores e administradores à sua disposição:</p>
          </div>
          <CirclesGrid />
          <Cta href="#hero" classname="evolution">
            Quero essa equipe comigo
          </Cta>
        </section>
        <section id="prices">
          <h2 className="title-text price-text">
            O melhor custo-benefício para você estruturar a sua empresa a curto,
            médio e longo prazo
          </h2>
          <PriceCard />
        </section>

        <section id="services">
          <h2 className="title-text">
            Empreendedores que mais rentabilizam com a gente:
          </h2>
          <ServicesIconText />
        </section>

        <section id="testimonials">
          <h2 className="title-text">Nossos clientes vendem por nós:</h2>
          <TestimonialsSwiper />
          <h3>Vamos rentabilizar?</h3>
          <Cta href="#hero" classname="testimonials">
            Fale com um especialista
          </Cta>
        </section>
        <div className="news">
          <h2>Receba nossa newsletter</h2>
            <Newsletter />
        </div>
            <a href="https://api.whatsapp.com/send/?phone=5511961945607&text&type=phone_number&app_absent=0" className="whats" rel="noopener noreferrer" target="_blank">
              <img src={Whatsapp} alt="" />
            </a>
        <footer>
          <div className="footer-grid">
            <p className="address">
              Av. Yojiro Takaoka, 4384
              <br />
              <br />
              Santana de parnaíba/SP
              <br />
              <br />
              Alphaville
              <br />
              <br />
              CEP 06541-038
            </p>
            <div className="contact">
              <p>
                <Phone />
                <span>+55 11 4195-6006</span>
              </p>

              <Cta
                href="https://www.instagram.com/rentabileasy_/"
                classname="p"
              >
                <InstagramLogo weight="regular" className="bold" />
                <span>Segue lá!</span>
              </Cta>
            </div>
            <div className="product">
              <p>A Rentabileasy é um produto:</p>
              <img
                src="https://news.rentabileasy.com.br/wp-content/uploads/elementor/thumbs/AbileConsultingGroup_Logo_Negatva-ppx2nc5pl1bfega4cbhs3rmdwy8s2jebp3h72mfbf0.png"
                alt=""
              />
            </div>
          </div>
          <div className="footer-copy">
            <p>&copy; Copyright 2023 Abile • Todos os direitos reservados</p>

            <p>
              Desenvolvido por{" "}
              <Cta href="https://crowd.br.com" classname="">
                <img
                  src="http://news.rentabileasy.com.br/wp-content/uploads/2023/12/logo.3942e0c5ddc8cb64ca03f061264c9d15-1.png"
                  alt=""
                />
              </Cta>
            </p>
          </div>
        </footer>
      </main>
    </body>
  );
}

export default App;
