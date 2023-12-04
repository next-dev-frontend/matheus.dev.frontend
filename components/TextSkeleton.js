//aplicar este código

//const TextSkeleton = dynamic(() => import('../components/TextSkeleton'));

//const [loading, setLoading] = useState(true);
//useEffect(() => {
//  const timer = setTimeout(() => {
//    setLoading(false); // Atualiza o estado indicando que o texto está pronto para ser exibido
//  }, 3000); // Tempo de espera para o efeito skeleton

//  return () => clearTimeout(timer); // Limpa o temporizador se o componente for desmontado antes do término do temporizador
//}, []); // Executa somente na montagem do componente

//{loading ? (
//  <TextSkeleton count={19} />
//) : (
//  <div className="p-2 text-justify text-lg md:text-xl lg:text-2xl">
//    <p className="indent-8">
//      texto aqui
//    </p>

//  </div>
//)}



const TextSkeleton = ({ count }) => {

  const skeletonItems = Array.from({ length: count }, (_, index) => (
    <div key={index} className="w-full max-w-full h-3 md:h-5 bg-gray-400 bg-opacity-80 rounded-full mb-2"></div>
  ));

  return (
    <div role="status" className="w-full animate-pulse pt-4">

      <div className="flex items-center w-full">
        <div className="w-10 h-3 md:h-5 bg-opacity-0 rounded-full"></div>
        <div className="w-full max-w-full h-3 md:h-5 bg-gray-400 bg-opacity-80 rounded-full mb-2"></div>
      </div>

      {skeletonItems}

      <div className="flex items-center w-full">
        <div className="w-full max-w-full h-3 md:h-5 bg-gray-400 bg-opacity-80 rounded-full mb-2"></div>
        <div className="w-1/2 md:w-2/3 h-3 md:h-5 bg-opacity-0 rounded-full"></div>
      </div>

      <span className="sr-only">Carregando...</span>
    </div>
  );
};

export default TextSkeleton;

