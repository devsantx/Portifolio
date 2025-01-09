import React from "react";

type ExperienceInfoProps = {
  image: string
  title: string
  description: string
  period: string
}

function ExperienceInfo({ image, title, description, period }: ExperienceInfoProps) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1100px] mx-auto px-4">
      {/* Header com imagem e informações principais */}
      <div className="flex flex-row items-center gap-4">
        {/* Imagem */}
        <img
          src={image}
          alt={title}
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover"
        />
        {/* Título e Período */}
        <div className="flex flex-col">
          <h1 className="text-base md:text-2xl font-bold text-left break-words">{title}</h1>
          {/* Período alinhado à esquerda */}
          <p className="text-sm md:text-lg text-[#8491A0] text-left">{period}</p>
        </div>
      </div>

      {/* Descrição */}
      <div className="flex flex-col justify-start gap-2">
        <p className="md:text-lg text-sm text-justify text-[#8491A0] break-words">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ExperienceInfo;
