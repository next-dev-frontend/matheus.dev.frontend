export default function page500() {
  return (
    <section id="page500" className="select-none relative flex flex-wrap flex-shrink md:flex-shrink-0 items-center justify-center m-auto bg-no-repeat w-full max-w-full h-screen">
      <div className="absolute grid h-screen place-content-center w-full max-w-full bg-gray-200 bg-opacity-70">
        <div className="text-center">
          <strong className="text-9xl font-black text-purple-600">500</strong>
          <p className="mt-4 text-indigo-600 pb-8">Erro no servidor. Tente mais tarde.</p>
          <div className="w-full mx-auto items-center pt-10 pb-20">
            <a href="/">
              <button id="botaoVoltar2" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-purple-500 border-4 border-white text-white hover:bg-indigo-500 rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-500 ease-in-out shadow-xl" >
                Voltar para página inicial
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}