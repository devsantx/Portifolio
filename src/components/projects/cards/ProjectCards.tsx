import { RxArrowTopRight } from "react-icons/rx";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="md:w-[400px] w-[350px] bg-[#1E1E1D] flex flex-col rounded-3xl shadow-lg overflow-hidden text-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 no-underline"
      aria-label={`Abrir o projeto ${title}`}
    >
      {/* Imagem do card */}
      <img
        src={image}
        alt={`Imagem do projeto ${title}`}
        className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-110"
      />
      <hr className="border-t-1 border-[#0b7bc2]" />
      {/* Conteúdo do card */}
      <div className="p-4 flex flex-col gap-4">
        {/* Conteúdo principal */}
        <div className="flex items-center">
          {/* Textos alinhados à esquerda */}
          <div className="flex-1 text-left">
            <p className="text-sm text-gray-300 uppercase transition-colors duration-300 group-hover:text-[#0b7bc2]">
              {description}
            </p>
            <h1 className="text-2xl font-bold uppercase transition-colors duration-300 group-hover:text-[#0b7bc2]">
              {title}
            </h1>
          </div>
          {/* Ícone alinhado à direita */}
          <div>
            <RxArrowTopRight className="text-3xl text-white hover:text-[#0b7bc2] transition-colors duration-200" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
