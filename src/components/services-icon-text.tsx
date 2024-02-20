const iconsText = [
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_construcao-1.svg",
    description: "Construção civil",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_coworking.svg",
    description: "Centro de negócios (Coworkings)",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_tech.svg",
    description: "Empresas de Tecnologia",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_franquia.svg",
    description: "Franquias",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_holding-1.svg",
    description: "Holdings",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_hoteis-1.svg",
    description: "Hotéis e Pousadas",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_PJ-1.svg",
    description: "Prestadores de Serviços",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_saude.svg",
    description: "Profissionais e Clínicas da Área da Saúde",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_advogado.svg",
    description: "Sociedades de Advogados",
  },
  {
    img: "http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_startup-1.svg",
    description: "Startups",
  },
];

export function ServicesIconText() {
  return (
    <div className="icons-services-grid">
      {iconsText.map(({ img, description }) => (
        <div className="services-col" key={description}>
          <img src={img} alt={description} />
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
