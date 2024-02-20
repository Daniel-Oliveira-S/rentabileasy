import { Cta } from "./cta";

const priceCard = [
  {
    title: "Para ME",
    price: (
      <p>
        A partir de
        <br />
        <strong>R$ 299,00</strong>
      </p>
    ),
    cta: (
      <Cta href="#" classname="price-card">
        Quero contratar
      </Cta>
    ),
  },
  {
    title: "Para EPP",
    price: (
      <p>
        A partir de
        <br />
        <strong>R$ 599,00</strong>
      </p>
    ),
    cta: (
      <Cta href="#" classname="price-card">
        Quero contratar
      </Cta>
    ),
  },
  {
    title: "Gestão Completa",
    price:
      "Acesse um orçamento personalizado sob medida com diagnóstico gratuito",
    cta: (
      <Cta href="#" classname="price-card">
        Quero contratar
      </Cta>
    ),
  },
];

export function PriceCard() {
  return (
    <div className="cards-container">
      {priceCard.map(({ title, price, cta }) => (
        <div className="card" key={title}>
          <h3>{title}</h3>
          <p>{price}</p>
          {cta}
        </div>
      ))}
    </div>
  );
}
