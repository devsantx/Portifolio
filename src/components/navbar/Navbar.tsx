import { useState } from "react";
import { useTranslation } from "react-i18next";

//Receber a informação da seção ativa
interface NavbarProps {
  activeSection: string;
}

function Navbar({ activeSection }: NavbarProps) {
  const [ isOpen, setIsOpen ] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const sections = [
    { id: "home", label: t("home") },
    { id: "projects", label: t("projects") },
    { id: "experience", label: t("experience") },
    { id: "feedbacks", label: t("feedbacks") },
    { id: "contact", label: t("contactTitle") },
  ];

  return (
    <div className="fixed top-5 left-0 w-full flex justify-center items-center z-50">
      <div className="w-full max-w-[1200px] h-[80px] bg-[#1e1e1d] flex items-center justify-between rounded-2xl mx-4 px-5 shadow-lg">
        {/* Logo */}
        <img
        src="./src/assets/logos/logo.png"
        alt="Logo Devsantx"
        className="w-16 h-16"
        />

        {/* Menu Desktop*/}
        <ul className="hidden md:flex items-center justify-center gap-8 text-white">
          {sections.map((section) => (
            <li
            key={section.id}
            className={"relative"}
            >
              <a
              href={`#${section.id}`}
              className={`text-white ${ activeSection === section.id ? "text-[#0b7bc2] font-bold" : "" } hover:text-[#0b7bc2] transition-all duration-300 ease-in-out`}
              >
                {section.label}
              </a>
              { activeSection === section.id && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#0b7bc2]"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Troca de idiomas */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            className={`flex items-center ${
              i18n.language === "en" ? "text-[#0b7bc2] font-bold" : "text-white"
            } hover:text-[#0b7bc2] transition-all duration-300`}
            onClick={() => changeLanguage("en")}
          >
            <span className="mr-2">EN</span>
            <img
              src="./src/assets/logos/eua.png"
              alt="Flag of the United States"
              className="w-[20px] h-[20px]"
            />
          </button>
          <button
            className={`flex items-center ${
              i18n.language === "pt" ? "text-[#0b7bc2] font-bold" : "text-white"
            } hover:text-[#0b7bc2] transition-all duration-300`}
            onClick={() => changeLanguage("pt")}
          >
            <span className="mr-2">PT</span>
            <img
              src="./src/assets/logos/brasil.png"
              alt="Bandeira do Brasil"
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>

        {/* Botão hambúrguer no mobile */}
        <button
        className="relative text-white md:hidden flex items-center justify-center w-10 h-10 z-10 mr-5"
        onClick={() => setIsOpen(!isOpen)}
        >
        <span className="absolute inset-0 opacity-50 rounded-full z-0 bg-gradient-radial from-[#0b7bc2] to-[#283c63]"></span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="relative w-6 h-6 z-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="relative w-6 h-6 z-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

                {/* Lista de navegação no mobile */}
                <ul
                className={`absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px] bg-[#1E1E1D] py-6 text-white text-xl flex flex-col items-center gap-4 rounded-[15px] shadow-lg transition-transform duration-500 ease-in-out ${
                  isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
                }`}
              >

          {sections.map((section) => (
            <li key={section.id} className="w-full text-center">
              <a
                href={`#${section.id}`}
                className={`block py-1 w-full ${
                  activeSection === section.id ? "text-[#0b7bc2] font-bold" : ""
                } hover:text-[#0b7bc2] hover:font-bold transition-all duration-300`}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar no link
              >
                {section.label}
              </a>
            </li>
          ))}

          {/* Botões de troca de idioma */}
          <div className="flex gap-3 items-center mt-6">
            <button
              className={`flex items-center ${
                i18n.language === "en" ? "text-[#0b7bc2] font-bold" : "text-white"
              } hover:text-[#0b7bc2] transition-all duration-300`}
              onClick={() => changeLanguage("en")}
            >
              <span className="mr-2">EN</span>
              <img
                src="./src/assets/logos/eua.png"
                alt="Flag of the United States"
                className="w-[20px] h-[20px]"
              />
            </button>
            <button
              className={`flex items-center ${
                i18n.language === "pt" ? "text-[#0b7bc2] font-bold" : "text-white"
              } hover:text-[#0b7bc2] transition-all duration-300`}
              onClick={() => changeLanguage("pt")}
            >
              <span className="mr-2">PT</span>
              <img
                src="./src/assets/logos/brasil.png"
                alt="Bandeira do Brasil"
                className="w-[20px] h-[20px]"
              />
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}




export default Navbar
