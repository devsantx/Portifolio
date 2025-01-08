import { useTranslation } from "react-i18next";
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

interface ContactProps {
  id: string; // Propriedade para o ID da seção
}

function Contact({ id }: ContactProps) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="w-full flex text-center justify-center items-center py-10 mt-20 md:mt-0"
    >
      {/* Contêiner principal */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-20 md:mt-10 text-white pb-10 pt-10">
        <h1 className="text-3xl md:text-[40px] font-bold text-[#0b7bc2] uppercase tracking-wide mb-10">
          {t("contactTitle")}
        </h1>

        <div className="text-left px-4 md:px-8">
          <h2 className="text-xl font-bold mb-4">{t("contactSubtitle")}</h2>
          <p className="mb-8 text-justify text-[#8491A0]">{t("contactDescription")}</p>

          {/* Informações de contato com ícones */}
          <div className="flex flex-col gap-6">
            {/* E-mail */}
            <div className="flex items-center gap-3 text-[#C5C5C5] hover:text-[#0b7bc2]">
              <FaEnvelope className=" text-2xl" />
              <a href="mailto:kauansantana2721@gmail.com">
                kauansantana2721@gmail.com
              </a>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/devsantx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C5C5C5] hover:text-[#0b7bc2]"
              >
                <FaInstagram className="text-2xl" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/devsantx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C5C5C5] hover:text-[#0b7bc2]"
              >
                <FaLinkedin className="text-2xl" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/devsantx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C5C5C5] hover:text-[#0b7bc2]"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
