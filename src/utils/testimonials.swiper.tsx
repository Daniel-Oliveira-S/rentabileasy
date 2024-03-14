import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/utils.css";
export function TestimonialsSwiper() {
  const vera = {
    name1: "Vera Maria Garaude - Garaude escritório de advocacia",
    text1:
      "Clientes há 7 anos, a empresa oferece assessoria completa. Após o falecimento de meu pai, foram cruciais na gestão empresarial, contábil e tributária, proporcionando redução de impostos e tranquilidade operacional.",
  };

  const silvana = {
    name2: "Silvana Perez - Espaço Ser - Saúde, Educação e Reabilitação",
    text2:
      "Atendimento eficiente e consultoria excelente. A empresa proporciona tranquilidade na gestão contábil, permitindo mais tempo e criatividade para investir no negócio. Recomendamos para outras empresas sem hesitação.",
  };
  const juliana = {
    name3: "Juliana Rodrigues - All Smiles Odontologia",
    text3:
      "Empresa idônea, profissionais competentes e atenciosos. Reestruturou a All Smiles Odontologia, elevando-nos a um novo patamar e impulsionando nossa lucratividade. Recomendo a outras empresas.",
  };

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      draggable={true}
      loop={true}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={true || { delay: 150 }}
      className="mySwiper"
    >
      <SwiperSlide className="slide" style={{
        display: "flex",
      }}>
        <p>{vera.text1}</p>
        <p>{vera.name1}</p>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <p>{silvana.text2}</p>
        <p>{silvana.name2}</p>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <p>{juliana.text3}</p>
        <p>{juliana.name3}</p>
      </SwiperSlide>
    </Swiper>
  );
}
