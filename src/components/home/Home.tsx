import React from "react";
import PersonImage from "/assets/person/Sant.png"
import { useTranslation } from "react-i18next";

interface HomeProps {
  id: string;
}

function Home({id}: HomeProps) {
  const { t } = useTranslation();

  return (
    <section id={id} className="w-full h-screen flex justify-center items-center mb-12 md:mb-24 pt-[calc(100px+15rem)] md:pt-[calc(100px+1rem)] relative">
      <div className="w-full max-w-[1200px] flex justify-center md:mt-0 mt-[-150px] items-center relative flex-col gap-8 px-8 md:px-12 pb-20 pt-10">
        {/* Imagem */}
        <div className="flex justify-center items-center rounded-full shadow-[0_20px_75px_#0B7BC2] transform transition duration-300 ease-in-out hover:scale-110">
          <img
            src={ PersonImage }
            alt="Foto profissional de Devsantx"
            className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full transform transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        {/* Texto */}
        <div className="w-full flex flex-col justify-center items-center gap-8 text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            {t("texthome")}{" "}
            <span className="text-transparent bg-gradient-to-r from-[#0b7bc2] to-[#283c63] bg-clip-text">
              {t("shome")}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#C5C5C5]">{t("subtexthome")}</p>
        </div>
        {/* Botões */}
        <div className="flex gap-4 md:gap-5">
          <button className="bg-white px-5 py-3 md:px-8 md:py-2 text-black text-sm md:text-lg font-bold rounded-full shadow-lg hover:shadow-xl">
            {t("bhome1")}
          </button>
          <a
            href="/src/assets/curriculo/Curriculo.pdf" // Ajuste o caminho para o arquivo PDF
            download
            className="border-2 border-[#0b7bc2] px-5 py-3 md:px-8 md:py-2 text-[#0b7bc2] text-sm md:text-lg font-bold rounded-full hover:bg-[#0b7bc2] hover:text-white transition"
          >
            {t("bhome2")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
