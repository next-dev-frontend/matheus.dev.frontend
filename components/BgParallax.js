function BgParallax() {
  return (
    <div>
      <section id="bgParallax" className="select-none relative mx-auto bg-center flex items-center justify-center w-full max-w-full h-96 md:h-3/4 px-4 py-8">
        <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/backgrounds/bg6-insurances.webp)' }} />
        <span className="sr-only">Image Background</span>
        <div className="sticky p-4 h-max max-w-3xl text-white bg-gray-900 bg-opacity-30">
          <h2 className="sticky p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center md:text-left">
            "Security is not the end goal. It's a starting point."
          </h2>
          <p className="text-3xl">- Wendy Kopp</p>
        </div>
      </section>
    </div>
  );
}

export default BgParallax;