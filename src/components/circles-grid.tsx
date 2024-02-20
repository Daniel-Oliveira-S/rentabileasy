import circle1 from "../assets/circle-first.png";
import circle2 from "../assets/circle-second.png";
import circle3 from "../assets/circle-third.png";

const circlesGrid = [
  {
    img: circle1,
    title: "Não são robôs, são experts",
    text: "Profissionais com visão de sócios e donos, para fortalecer seu negócio e seus planos futuros",
  },
  {
    img: circle2,
    title: "Parceria e Novos Negócios",
    text: "Traremos ainda sugestões de inovação, ferramentas parceiras, tecnologias, melhorias, como: Plano de Saúde, Contas digitais, Consultoria, Certificado digital, etc",
  },
  {
    img: circle3,
    title: "Consultoria Estratégica.",
    text: "Estamos há mais de 40 anos rentabilizando negócios, dando total segurança e suporte para empreendedores fazerem a diferença.",
  },
];
export function CirclesGrid() {
  return (
    <div className="circles-grid">
      {circlesGrid.map(({ img, title, text }) => (
        <div className="circle" key={title}>
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
