import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))

export default function Politica() {
  return (
    <PageSeo
      title="Política de Privacidade"
      titleTemplate="%s | Portifólio Matheus Lopes"
      description="Nesta página você pode ver toda a política de privacidade de dados que utilizo no site. Saiba mais sobre coletas de dados pessoais e uso de cookies."
      path="/politica"
    >
      <section id='policy' className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto flex w-full max-w-full h-full">
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
                Política de Privacidade
              </h1>
            </div>
          </div>

          <div className="font-mono flex flex-wrap">
            <div className="w-auto px-4 sm:px-12 md:px-36 lg:px-48">
              <div className="mx-auto align-middle">
                <div className="font-mono text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  <h2>
                    Bem-vindo ao meu portfólio de programador web! A sua privacidade é importante para mim, e por isso quero esclarecer como os dados são tratados neste site.
                  </h2>
                  <br />
                  <p>
                    Este site não coleta informações pessoais dos visitantes. Nenhum dado pessoal como nome, e-mail ou endereço é solicitado ou armazenado enquanto você navega.
                  </p>
                  <br />
                  <p>
                    Se houver a necessidade de coletar dados dos usuários, irei informar antecipadamente.
                  </p>
                  <br />
                  <p>
                    Utilizamos cookies apenas para melhorar a sua experiência de navegação. Esses cookies são pequenos arquivos que ajudam a otimizar o desempenho do site, garantindo que ele funcione corretamente em diferentes dispositivos e oferecendo uma navegação mais eficiente. Você pode optar por desativar os cookies nas configurações do seu navegador, se preferir.
                  </p>
                  <br />
                  <p>
                    Este site utiliza o Google Analytics, uma ferramenta que me ajuda a entender como os visitantes interagem com o conteúdo do portfólio. O Google Analytics coleta dados anônimos, como páginas visitadas, tempo de permanência e origem do tráfego, mas não identifica os usuários individualmente. Isso me auxilia a melhorar a experiência do site, ajustando o conteúdo e a usabilidade conforme o comportamento agregado dos usuários.
                  </p>
                  <br />
                  <p>
                    Fique tranquilo, sua privacidade está protegida e não há coleta ou compartilhamento de informações pessoais neste site.
                  </p>
                  <br />
                  <p>
                    Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, sinta-se à vontade para entrar em contato pelo email matheus.dev.frontend@gmail.com.
                  </p>
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-sm md:text-md lg:text-lg pt-10 text-indigo-600 mx-auto font-bold leading-none mb-3">
                  Esta política é válida desde 14 de junho de 2024.
                </p>
                <p className="text-sm md:text-md lg:text-lg text-gray-700 mx-auto font-bold leading-none mb-3">
                  Reservo-me o direito de alterar ou atualizar esta página de política de privacidade a qualquer momento, sem aviso prévio. Recomendo que os usuários revisitem esta página periodicamente para estar cientes de quaisquer mudanças.
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