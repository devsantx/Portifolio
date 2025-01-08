import { useTranslation } from "react-i18next";
import ExperienceInfo from "./experienceInfo/ExperienceInfo";

interface ExperienceProps {
  id: string; // Propriedade para o ID da seção
}

function Experience({ id }: ExperienceProps) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="w-full flex text-center justify-center items-center py-10 mt-[-100px] md:mt-0"
    >
      {/* Contêiner do título e da grade */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-20 md:mt-10 pb-20 pt-10">
        <h1 className="text-3xl md:text-[40px] font-bold text-white uppercase tracking-wide mb-20">
          <span className="text-[#0b7bc2]">{t("exptitle")}</span>
        </h1>

        <div className="flex flex-col gap-10 md:gap-20 items-center">
          {/* Cada bloco de experiência */}
          <ExperienceInfo
            image="./src/assets/logos/sizac.png"
            title={t("emp1")}
            description={t("emp1desc")}
            period={t("emp1period")}
          />

          <ExperienceInfo
            image="./src/assets/logos/cesar.png"
            title={t("emp2")}
            description={t("emp2desc")}
            period={t("emp2period")}
          />

          <ExperienceInfo
            image="./src/assets/logos/Anais.png"
            title={t("emp3")}
            description={t("emp3desc")}
            period={t("emp3period")}
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
