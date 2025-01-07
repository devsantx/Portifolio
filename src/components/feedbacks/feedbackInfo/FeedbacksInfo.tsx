import { useState } from "react";
import { RxQuote } from "react-icons/rx";

type FeedbacksInfoProps = {
  image: string;
  description: string;
  name: string;
  cargo: string;
};

function FeedbacksInfo({ image, description, name, cargo }: FeedbacksInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar se o texto está expandido

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded); // Alterna entre expandido e colapsado
  };

  // Função para truncar o texto sem cortar palavras
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength).trim();
    return `${truncated.slice(0, truncated.lastIndexOf(" "))}...`;
  };

  return (
    <div className="relative overflow-visible z-10 p-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col border-2 border-[rgba(11,123,194,0.5)] rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:border-[#0b7bc2] shadow-lg p-6 hover:bg-[#1c2b3a] z-10 relative">
          {/* Aspas */}
          <div className="flex items-start">
            <RxQuote className="text-3xl text-[#0b7bc2] opacity-50" />
          </div>

          {/* Descrição */}
          <div className="flex flex-col">
            <p
              onClick={toggleExpanded}
              className={`text-sm md:text-base text-justify text-[#8491A0] mt-2 break-words cursor-pointer ${
                isExpanded ? "overflow-visible" : "overflow-hidden text-ellipsis line-clamp-3"
              }`}
              title={!isExpanded ? "Clique para expandir" : "Clique para recolher"} // Texto de dica
            >
              {isExpanded ? description : truncateText(description, 100)}
            </p>
          </div>

          {/* Informações do Usuário */}
          <div className="flex items-center gap-3 mt-4">
            <img
              src={image}
              alt={`Foto da pessoa ${name}`}
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div>
              <h1 className="text-base md:text-xl font-bold text-left text-white">{name}</h1>
              <p className="text-sm md:text-base text-[#a3cef1]">{cargo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbacksInfo;
