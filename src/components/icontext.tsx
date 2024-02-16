import { CheckCircle } from "@phosphor-icons/react";

const iconTexts = [
  {
    icon: <CheckCircle weight="fill" />,
    text: "Garanta o melhor regime tributário e fiscal para a sua empresa",
  },
  {
    icon: <CheckCircle weight="fill" />,
    text: "Controles e processos que evitam desperdicios",
  },
  {
    icon: <CheckCircle weight="fill" />,
    text: "Visão completa de todos os indicadores de resultados",
  },
  {
    icon: <CheckCircle weight="fill" />,
    text: "Atendimento 100% humanizado, lado a lado com você",
  },
];

export function Icontext() {
  return (
    <div className="about-icons">
      {iconTexts.map(({ icon, text }) => (
        <div className="icon-text" key={text}>
          {icon}
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
