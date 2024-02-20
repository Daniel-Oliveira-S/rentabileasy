import "../styles/components.css";
import react, { useEffect } from "react";
import logo from "../assets/logo.png";
export default function Header() {
  const [menu, setMenu] = react.useState(false);
  const [isVisible, setIsVisible] = react.useState(false);
  function handleMenu() {
    setMenu(!menu);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);
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
        {isVisible && (
          <a href="#hero" className="header">
            Fale conosco
          </a>
        )}
        <button onClick={handleMenu}>Clique</button>
      </nav>
    </header>
  );
}
