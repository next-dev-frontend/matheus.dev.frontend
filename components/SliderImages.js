import Image from "next/legacy/image";
import { useState, useEffect } from "react";

function SlideImages() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/backgrounds/bg1-insurances.webp",
    "/backgrounds/bg2-insurances.webp",
    "/backgrounds/bg3-insurances.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (

    <section id="carousel" className="select-none relative mx-auto flex bg-center bg-no-repeat items-center justify-center w-full max-w-full h-96 md:h-3/4 px-4 py-8">
      <Image
        src={images[currentSlide]}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <span className="sr-only">Image Background</span>
      <div className="sticky h-max max-w-3xl p-4 text-white bg-gray-900 bg-opacity-30">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-outline-gray1 md:font-outline-gray2 font-bold text-center md:text-left">
          <span className="inline-block">&#8220;</span>
          {currentSlide === 0
            ? "Security is not the end goal. It's a starting point."
            : currentSlide === 1
              ? "Driving race cars is risky, not having life insurance is riskier"
              : "By failing to prepare, you are preparing to fail."}
          <span className="inline-block">&#8221;</span>
        </h2>
        <p className="text-2xl text-center pt-4">
          {currentSlide === 0
            ? "- Wendy Kopp"
            : currentSlide === 1
              ? "- Danica Patrick"
              : "- Benjamin Franklin"
          }
        </p>
      </div>
    </section>

  );
}

export default SlideImages;