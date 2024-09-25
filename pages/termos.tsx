import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))

export default function Termos() {
  return (
    <PageSeo
      title="Termos e Condições de Uso"
      titleTemplate="%s | Utilização de Cookies"
      description="Nesta seção você encontra os termos de uso do meu portifólio. Saiba o que acontece quando você navega no site."
      path="/termos"
    >
      <section id='terms' className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto flex w-full max-w-full h-full">
        <div className="select-none container mx-auto pt-10 w-full max-w-full bg-gray-200 bg-opacity-50">
          <div className="w-full items-center pb-12 pl-8">
            <a href="/">
              <button id="botaoVoltar1" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-purple-500 border-4 border-white text-white hover:bg-indigo-500 rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-500 ease-in-out shadow-xl" >
                Home
              </button>
            </a>
          </div>

          <div className="font-mono flex items-center justify-center pt-2 pb-8">
            <div className="w-auto">
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600">
                Termos e Condições de Uso / Cookies
              </h1>
            </div>
          </div>


          <div className="font-mono flex flex-wrap">
            <div className="w-auto px-4 sm:px-12 md:px-36 lg:px-48">
              <div className="mx-auto align-middle">
                <h2 className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  Bem-vindo ao meu portfólio de programador web! Ao acessar e utilizar este site, você concorda com os seguintes Termos e Condições de Uso. Por favor, leia com atenção:
                </h2>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-purple-600 mx-auto font-bold leading-none mb-3">
                  1. Uso do Site
                </p>
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  Este site é destinado para exibir meus projetos, habilidades e informações relacionadas ao meu trabalho como programador web. O conteúdo aqui é oferecido para fins informativos e profissionais, e qualquer uso indevido ou reprodução não autorizada pode resultar em medidas legais. Você concorda em usar o site apenas para os fins permitidos por estes Termos.
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-purple-600 mx-auto font-bold leading-none mb-3">
                  2. Propriedade Intelectual
                </p>
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  Todo o conteúdo disponível no site, incluindo textos, imagens, código e design, é de minha propriedade ou foi licenciado para uso. Qualquer cópia, reprodução, distribuição ou modificação sem permissão é estritamente proibida.
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-purple-600 mx-auto font-bold leading-none mb-3">
                  3. Limitação de Responsabilidade
                </p>
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  Embora eu me esforce para manter o site atualizado e funcional, não posso garantir que ele esteja sempre livre de erros ou interrupções. Não assumo responsabilidade por quaisquer danos ou perdas resultantes do uso do site ou da sua incapacidade de acessá-lo.
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-purple-600 mx-auto font-bold leading-none mb-3">
                  4. Cookies
                </p>
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  Este site utiliza cookies para melhorar a experiência do usuário e garantir o funcionamento adequado. Cookies são pequenos arquivos armazenados no seu navegador que ajudam a personalizar sua navegação e a otimizar o desempenho do site.
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-purple-600 mx-auto font-bold leading-none mb-3">
                  Tipos de Cookies Utilizados:
                </p>
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  Cookies Essenciais: São necessários para o funcionamento básico do site, permitindo navegações e funcionalidades principais.
                </div>
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  Cookies de Desempenho: Coletam informações sobre como os visitantes utilizam o site, como as páginas mais visitadas e o tempo gasto nelas. Esses dados são anônimos e ajudam a melhorar a usabilidade.
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-sm md:text-md lg:text-lg pt-10 text-indigo-600 mx-auto font-bold leading-none mb-3">
                  Este termo é válido desde 14 de junho de 2024.
                </p>
                <p className="text-sm md:text-md lg:text-lg text-gray-700 mx-auto font-bold leading-none mb-3">
                  Reservo-me o direito de alterar ou atualizar estes termos e condições de uso a qualquer momento, sem aviso prévio. Recomendo que os usuários revisitem esta página periodicamente para estar cientes de quaisquer mudanças.
                </p>
              </div>

            </div>
          </div>

          <div className="w-full items-center pt-10 pl-8 pb-20">
            <a href="/">
              <button id="botaoVoltar2" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-purple-500 border-4 border-white text-white hover:bg-indigo-500 rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-500 ease-in-out shadow-xl" >
                Ir para página inicial
              </button>
            </a>
          </div>
        </div>
      </section>
    </PageSeo>
  )
}