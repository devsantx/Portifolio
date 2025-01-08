import { RxArrowUp } from "react-icons/rx";

function Footer() {
  // Função para rolar suavemente para a seção 'home'
  const scrollToTop = () => {
    const section = document.getElementById("home");
    section?.scrollIntoView({
      behavior: "smooth", // Aplica o scroll suave
      block: "start", // A posição de início do scroll
    });
  };

  return (
    <footer className="w-full mb-[200px]">
      <div className="max-w-[1200px] flex justify-center gap-10 items-center mx-auto px-4 py-8">
        <button className="text-white text-xl border-2 border-[#0b7bc2] p-4 rounded-full ">
          <a href="#home">&copy; 2024 - DEVSANTX</a>
        </button>
        <button
          className="text-white text-xl border-2 border-[#0b7bc2] p-4 rounded-full "
          onClick={scrollToTop} // Chama a função ao clicar no botão
        >
          <RxArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
