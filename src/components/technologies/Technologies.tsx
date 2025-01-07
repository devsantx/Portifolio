import { useTranslation } from "react-i18next";

function Technologies() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-auto py-6 mt-10 md:mt-0 mb-10 md:mb-20">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-6 px-4 pt-10 pb-20">
        {/* Título */}
        <h1 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide mb-10">
          <span className="text-[#0b7bc2]">{t("technologies")}</span>
        </h1>

        {/* Logos das tecnologias */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 place-items-center gap-6 sm:gap-6 md:gap-8">
          <img
            src="/src/assets/technologies/Javascript.png"
            alt="Logo da tecnologia JavaScript"
            className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] object-contain"
          />
          <img
            src="/src/assets/technologies/Nodejs.png"
            alt="Logo da tecnologia Node.js"
            className="w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px] object-contain"
          />
          <img
            src="/src/assets/technologies/React.png"
            alt="Logo da tecnologia React"
            className="w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px] object-contain"
          />
          <img
            src="/src/assets/technologies/Typescript.png"
            alt="Logo da tecnologia TypeScript"
            className="w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] object-contain"
          />
          <img
            src="/src/assets/technologies/Tailwind.png"
            alt="Logo da tecnologia Tailwind CSS"
            className="w-[50px] h-[30px] sm:w-[60px] sm:h-[35px] md:w-[90px] md:h-[50px] object-contain"
          />
          <img
            src="/src/assets/technologies/mysql.png"
            alt="Logo da tecnologia MySQL"
            className="w-[60px] h-[40px] sm:w-[60px] sm:h-[35px] md:w-[90px] md:h-[70px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
