import Image from "next/legacy/image";

const Sobre = () => {
  return (
    <div className="font-mono text-justify p-4 h-max max-w-3xl text-gray-700 bg-gray-200 rounded border-2 border-gray-400">

      <h1 className="flex p-2 text-xl md:text-2xl lg:text-3xl md:text-left">
        <span className="animate-waving-hand">👋🏻 &nbsp;</span> <span className="underline decoration-wavy decoration-indigo-500"> Sejam todos bem-vindos</span>.
      </h1>

      <p className="indent-8 p-2 text-sm md:text-md lg:text-lg text-center md:text-left text-justify">
        Olá, meu nome é Matheus, tenho 43 anos e sou formado em Ciência da Computação desde 2016. Em dezembro de 2020, decidi iniciar minha nova jornada como programador, utilizando React/Next.js, TailwindCSS e Typescript para desenvolvimento Web, de forma moderna, eficiente e segura.
      </p>

      <p className="p-2 text-sm md:text-md lg:text-lg md:text-left text-justify">
        🚀 Aqui vocês podem ver alguns de meus projetos e informações sobre os serviços que presto como desenvolvedor web front-end e web designer! Entre em contato comigo, caso necessite de algum serviço ou informação.
      </p>

      <p className="p-2 pb-6 text-sm md:text-md lg:text-lg text-center md:text-left text-justify">
        🛠️ Minha intenção sempre foi alcançar o máximo que o React.js oferece para criação de sites e aplicativos progressivos. Hoje tenho uma estrutura completa desenvolvida com React.js/Next.js para obter 100% de qualificação em Segurança, Alto Desempenho, Acessibilidade, SEO e PWA. Tudo isso aplicando as melhores práticas de programação e utilizando ferramentas como ESLint e Prettier para aumento de produtividade.
      </p>

      <div className="relative border-4 border-gray-500 border-dashed rounded">
        <Image
          src="/backgrounds/lighthouse.webp"
          alt="insurances template img"
          width={781}
          height={149}
          layout="responsive"
          objectFit="cover"
          className="rounded"
          priority
        />
      </div>

    </div>
  );
}
export default Sobre;