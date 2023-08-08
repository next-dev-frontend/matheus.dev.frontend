import Image from 'next/legacy/image'

const AboutInsurances = () => {
  return (
    <section id="insurances" className="select-none container mx-auto pt-10 pb-10 w-full max-w-5xl">
      <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none">
        <div className="w-auto pl-5">
          <h1 className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl text-[#142039] font-bold">
            How to search and choose reliable insurance companies?
          </h1>
        </div>
      </div>

      <div className="w-full mb-6">
        <div className="h-1 mx-8 my-0 py-0 bg-gray-400 bg-opacity-25" />
      </div>

      <div className="flex flex-wrap text-gray-700">
        <div className="w-auto md:w-1/2 px-8 text-md md:text-xl lg:text-2xl">
          <div className="mx-auto align-middle">
            <div>
              <br />
              General insurance covers a wide range of non-life insurance products, including car insurance, home
              insurance, travel insurance, and health insurance, among others. If you are looking for information and
              instructions related to general insurance, there are several resources available online. Here are some
              tips on how to find reliable and helpful information:
              <br />
              <br />
              <span>Check the websites of reputable insurance companies: </span>
              Many insurance companies have dedicated sections on their websites that provide information about their
              products, as well as general information about insurance. These sections may include FAQs, articles, and
              guides that can help you understand the different types of insurance and how they work.
              <br />
              <br />
              <span>Visit government websites:</span>
              Government websites, such as those of the Department of Financial Services or the National Association of
              Insurance Commissioners, can provide information about insurance regulations, consumer protection, and how
              to file a complaint or report fraud.
              <br />
              <br />
              <span>Look for online forums and communities: </span>
              There are many online communities where people discuss insurance-related topics and share their
              experiences. These forums can provide valuable insights and advice on choosing the right insurance policy
              and dealing with insurance claims.
              <br />
              <br />
              <span>Consult with an insurance agent or broker: </span>
              If you need personalized advice on insurance, you can contact an insurance agent or broker. They can help
              you assess your insurance needs, compare policies from different insurers, and provide guidance on how to
              file a claim.
              <br />
              <br />
              When looking for information and instructions about general insurance, it is important to be cautious and
              verify the accuracy of the information you find. Make sure to check multiple sources and consult with a
              professional if you have any doubts or questions.
            </div>
          </div>
        </div>
        <div className="float-right block w-full lg:w-lg xl:w-xl md:w-1/2 h-auto px-4 md:px-8 p-8 pl-8 md:pl-4 xl:pl-2">
          <div className="relative rounded-md shadow-xl p-2 w-full h-auto max-w-full">
            <Image
              className="rounded mask mask-parallelogram-3"
              src="/backgrounds/bg-insurances.webp"
              alt="insurances template img"
              width={1080}
              height={1080}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <a href="https://go.hotmart.com/X80760498R?src=aboutinsurances" rel="noopener noreferrer" target="_blank" role="button">
            <div className="relative rounded-md shadow-xl p-2 w-full h-auto max-w-full">
              <Image
                className="rounded mask mask-parallelogram-3"
                src="/templates/business-template2.webp"
                alt="business plan template img"
                width={468}
                height={60}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </a>

          <a href="https://go.hotmart.com/A80579208O?src=aboutinsurances" rel="noopener noreferrer" target="_blank" role="button">
            <div className="relative rounded-md shadow-xl p-2 w-full h-auto max-w-full">
              <Image
                className="rounded mask mask-parallelogram-3"
                src="/templates/kaspersky-template.webp"
                alt="Kaspersky Template img"
                width={1200}
                height={1200}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
export default AboutInsurances