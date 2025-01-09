import { useTranslation } from "react-i18next";
import React from "react";
import ProjectCard from "./cards/ProjectCards";
import { RxGithubLogo } from "react-icons/rx";

interface ProjectsProps {
  id: string; // Propriedade para o ID da seção
}

function Projects({ id }: ProjectsProps) {
  const { t } = useTranslation();

  return (
    <section id={id} className="w-full py-10 mb-0 mt-[-100px]">
      {/* Contêiner do título e da grade */}
      <div className="w-full max-w-[1200px] mx-auto px-2 md:px-0 text-center mt-20 md:mt-10 pt-10 pb-20">
        <h1 className="text-3xl md:text-[40px] font-bold text-white uppercase tracking-wide mb-20">
          <span className="text-[#0b7bc2]">{t("projects")}</span>
        </h1>

        {/* Botão */}
        <div className="flex justify-center md:justify-end pr-0 md:pr-[120px] mb-10">
          <a
            href="https://github.com/devsantx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2c] border-2 border-[#0e496f] text-[#468fbd] text-sm md:text-base font-medium rounded-lg shadow-lg hover:bg-[#0e496f] hover:text-white hover:shadow-xl transition duration-300"
          >
            {t("github")}
            <RxGithubLogo className="text-lg md:text-xl" />
          </a>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 place-items-center md:mt-0">
          <ProjectCard
            title={t("t1")}
            description={t("subtitle")}
            image="./src/assets/cards/gerenciador.png"
            url="https://github.com/devsantx/Gerenciador-de-Links"
          />
          <ProjectCard
            title={t("t2")}
            description={t("subtitle")}
            image="./src/assets/cards/devfood.png"
            url="https://github.com/devsantx/Devfood"
          />
          <ProjectCard
            title={t("t3")}
            description={t("subtitle")}
            image="./src/assets/cards/gerador.png"
            url="https://github.com/devsantx/Gerador-de-Senhas"
          />
          <ProjectCard
            title={t("t4")}
            description={t("subtitle")}
            image="./src/assets/cards/nlw.png"
            url="https://github.com/devsantx/Nearby-Nlw-Rockseat"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
