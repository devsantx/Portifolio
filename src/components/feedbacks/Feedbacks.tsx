import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import FeedbacksInfo from "./feedbackInfo/FeedbacksInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import JL from "/assets/person/joao_lucas.jfif";
import LC from "/assets/person/lucas_caua.jpg";
import TB from "/assets/person/thays_barbosa.jpg";
import RE from "/assets/person/rubia_evelyn.jpg";
import JG from "/assets/person/julia_greicy.jpg";

interface FeedbacksProps {
  id: string;
}

function Feedbacks({ id }: FeedbacksProps) {
  const { t } = useTranslation();

  // Definição dos feedbacks
  const feedbacksData = useMemo(() => {
    const rawFeedbacksData = [
      { name: "João Lucas", cargoKey: "cargo1", descriptionKey: "description1", image: `${ JL }` },
      { name: "Lucas Cauã", cargoKey: "cargo2", descriptionKey: "description2", image: `${ LC }` },
      { name: "Thays Barbosa", cargoKey: "cargo3", descriptionKey: "description3", image: `${ TB }` },
      // { name: "Wesley José", cargoKey: "cargo4", descriptionKey: "description4", image: "./src/assets/person/wesley_jose.png" },
      { name: "Rubia Evelyn", cargoKey: "cargo5", descriptionKey: "description5", image: `${ RE }` },
      // { name: "Alisson Coimbra", cargoKey: "cargo6", descriptionKey: "description6", image: "./src/assets/person/alisson_coimbra.png" },
      { name: "Julia Greicy", cargoKey: "cargo7", descriptionKey: "description7", image: `${JG}` },
    ];

    return rawFeedbacksData.map((feedback) => ({
      ...feedback,
      cargo: t(feedback.cargoKey),
      description: t(feedback.descriptionKey),
    }));
  }, [t]);

  // Agrupamento responsivo dos feedbacks
  const groupedFeedbacks = useMemo(() => {
    const groups = [];
    const itemsPerSlide = window.innerWidth >= 768 ? 3 : 2; // 6 no desktop, 2 no mobile
    for (let i = 0; i < feedbacksData.length; i += itemsPerSlide) {
      groups.push(feedbacksData.slice(i, i + itemsPerSlide));
    }
    return groups;
  }, [feedbacksData]);

  return (
    <section id={id} className="w-full flex flex-col items-center py-10 mt-[-100px]  md:mt-0">
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-12 mt-20 md:mt-10 pb-20 pt-10 relative">
        <h1 className="text-3xl md:text-[40px] font-bold text-white uppercase tracking-wide text-center mb-[100px]">
          <span className="text-[#0b7bc2]">{t("feedbacks")}</span>
        </h1>

        <div className="relative overflow-visible">
          <div className="absolute top-[-40px] left-0 z-10">
            <button className="swiper-button-prev text-white hover:text-[#0b7bc2] transition"></button>
          </div>
          <div className="absolute top-[-40px] right-0 z-10">
            <button className="swiper-button-next text-white hover:text-[#0b7bc2] transition"></button>
          </div>

          <Swiper
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Pagination]}
          >
            {groupedFeedbacks.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Mobile: 1 item por linha; Desktop: 3 itens por linha */}
                  {group.map((feedback, idx) => (
                    <FeedbacksInfo
                      key={idx}
                      name={feedback.name}
                      cargo={feedback.cargo}
                      image={feedback.image}
                      description={feedback.description}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
