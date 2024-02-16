import { Cta } from "./cta";

export default function Header() {
  return (
    <header>
      <a href="">
        <img src="" alt="" />
      </a>
      <nav id="nav">
        <ul id="menu">
          <li>
            <a href="#">O que é?</a>
          </li>
          <li>
            <a href="#">Para quem?</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <Cta href="#" classname="header">
          Faça um diagnóstico da sua empresa
        </Cta>
      </nav>
    </header>
  );
}
