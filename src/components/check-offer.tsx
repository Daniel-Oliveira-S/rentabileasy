import { Check } from "lucide-react";

const checkOffer = [
  {
    icon: <Check />,
    text: "Elaboração do Plano de Negoócios (Planejamento estratégico, Societário, Tributário e Financeiro)",
  },
  {
    icon: <Check />,
    text: "Estruturação e Gestão de Processos;",
  },
  {
    icon: <Check />,
    text: "Atuação com estratégias financeiras para geração de recursos através de incentivos fiscais;",
  },
  {
    icon: <Check />,
    text: "Gestão financeira e fiscal",
  },

  {
    icon: <Check />,
    text: "Tudo isso em paralelo as rotinas contábeis",
  },
];

export function CheckOffer() {
  return (
    <div className="check-offer">
      {checkOffer.map(({ icon, text }) => (
        <div className="icon-text" key={text}>
          {icon}
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
