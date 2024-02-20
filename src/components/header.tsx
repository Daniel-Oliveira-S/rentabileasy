import { Cta } from "./cta";
import "../styles/components.css";
import react from "react";

export default function Header() {
  const [menu, setMenu] = react.useState(false);
  function handleMenu() {
    setMenu(!menu);
  }
  return (
    <header>
      <nav id="nav" className={`${menu ? "active" : ""}`}>
        <a href="" className="logo">
          <img
            src="https://www.rentabileasy.com.br/assets/logo-fxJgpJWW.png"
            alt=""
          />
        </a>
        <ul id="menu">
          <li>
            <a href="#hero">Sobre</a>
          </li>
          <li>
            <a href="#services">Para quem</a>
          </li>
          <li>
            <a href="#offers">Serviços</a>
          </li>
          <li>
            <a href="https://news.rentabileasy.com.br/blog/">Blog</a>
          </li>
        </ul>
        <Cta
          href="https://typebot.co/diagnostico-rentabileasy"
          classname="header"
          target="_blank"
        >
          Quero um diagnóstico gratuito
        </Cta>
        <button onClick={handleMenu}>Clique</button>
      </nav>
    </header>
  );
}
