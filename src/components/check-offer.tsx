import { CheckFat } from "@phosphor-icons/react";
import "../styles/components.css";

const checkOffer = [
  {
    icon: <CheckFat className="check-offer desk" weight="fill" />,
    text: "Elaboração do Plano de Negócios (Planejamento estratégico, Societário, Tributário e Financeiro)",
  },
  {
    icon: <CheckFat className="check-offer" weight="fill" />,
    text: "Estruturação e Gestão de Processos;",
  },
  {
    icon: <CheckFat className="check-offer desk" weight="fill" />,
    text: "Atuação com estratégias financeiras para geração de recursos através de incentivos fiscais;",
  },
  {
    icon: <CheckFat className="check-offer" weight="fill" />,
    text: "Gestão financeira e fiscal",
  },

  {
    icon: <CheckFat className="check-offer" weight="fill" />,
    text: "Tudo isso em paralelo as rotinas contábeis",
  },
];

export function CheckOffer() {
  return (
    <div className="check-offers ">
      <h2>Oferecemos além da contabilidade:</h2>

      {checkOffer.map(({ icon, text }) => (
        <div className="check-icon" key={text}>
          {icon}
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
