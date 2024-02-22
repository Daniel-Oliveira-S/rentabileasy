import "../styles/components.css";
import react from "react";
import logo from "../assets/logo.png";
import { Cta } from "./cta";
export default function Header() {
  const [menu, setMenu] = react.useState(false);
  function handleMenu() {
    setMenu(!menu);
  }

  const url = window.location.href;
  url.replace("#", "");
  return (
    <header>
      <nav id="nav" className={`${menu ? "active" : ""}`}>
        <a href="#hero" className="logo">
          <img src={logo} alt="" />
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
        <Cta href="#hero" classname="header">
          Fale conosco
        </Cta>
        <button onClick={handleMenu}>Clique</button>
      </nav>
    </header>
  );
}
