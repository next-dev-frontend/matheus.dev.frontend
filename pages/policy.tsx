import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))

export default function Policy() {
  return (
    <PageSeo
      title="Privacy Policy"
      titleTemplate="%s | About Insurances"
      description="Your privacy is important to us. It is Site About Insurance policy. Respect your privacy regarding any information we may collect from you on the site"
      path="/policy"
    >
      <section id='policy' className="bg-gray-200 mx-auto flex w-full max-w-full h-full">
        <div className="select-none container mx-auto pt-10 w-full max-w-5xl">
          <div className="w-full items-center pb-12 pl-8">
            <a href="/">
              <button id="navAction1" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-[#142039] border-4 border-white text-white hover:bg-white hover:text-[#142039] hover:border-[#ff6341] rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl" >
                Back to Home Page
              </button>
            </a>
          </div>

          <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none">
            <div className="w-auto">
              <h1 className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-dark-green">
                Privacy Policy
              </h1>
            </div>
          </div>

          <div className="w-full mb-6">
            <div className="h-1 mx-8 my-0 py-0 bg-light-green bg-opacity-25" />
          </div>

          <div className="flex flex-wrap">
            <div className="w-auto px-8">
              <div className="mx-auto align-middle">
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  <p>
                    Your privacy is important to us. It is the policy of the
                    About Insurances Site respect the privacy of the user in
                    relation to any information that we may collect from the
                    About Insurances website, and other websites that we own
                    and operate.
                  </p>
                  <p>
                    We only ask for personal information when we really need
                    it them to provide you with a service. We do this by fair
                    and lawful means, with your knowledge and consent. We also
                    let you know why we are collecting and how it will be
                    used.
                  </p>
                  <p>
                    We only retain collected information for as long as
                    necessary to provide the requested service. When we store
                    data, we protect within commercially acceptable means to
                    prevent loss and theft, as well as unauthorized access,
                    disclosure, copying, use or modification.
                  </p>

                  <p>
                    We do not share personally identifiable information
                    publicly or with third parties, except as required by law.
                  </p>

                  <p>
                    Our website may have links to external websites that are
                    not operated by us. Please be aware that we have no
                    control over the content and practices of these sites and
                    cannot accept responsibility for their respective privacy
                    policies.
                  </p>

                  <p>
                    You are free to refuse our request for personal
                    information, understanding that we may not be able to
                    provide you with some of your desired services.
                  </p>
                  <p>
                    Your continued use of our website will be deemed
                    acceptance of our practices around privacy and personal
                    information. If you have any questions about how we handle
                    user data and personal information, contact us.
                  </p>
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  User Commitment
                </p>
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  The user undertakes to make proper use of the contents and
                  information that About Insurances offers on the website and
                  with an enunciative, but not limiting character:
                  <p>
                    A- Not to engage in activities that are illegal or
                    contrary to good faith and public order;
                  </p>
                  <p>
                    B- Do not disseminate propaganda or content of a racist,
                    xenophobic, bethan or bad luck nature, any type of illegal
                    pornography, in support of terrorism or against human
                    rights;
                  </p>
                  <p>
                    C- Do not cause damage to the physical (hardware) and
                    logical (software) systems of the About Insurance Site, of
                    its suppliers or third parties, to introduce or
                    disseminate computer viruses or any other hardware systems
                    or software that are capable of causing the aforementioned
                    damage.
                  </p>
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  More information
                </p>
                <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  We hope to have clarified well how our website usage policy
                  works, as mentioned earlier, if there is anything that
                  you're not sure if you need it or not, it's generally safer
                  to leave cookies activated if you interact with one of the
                  features you use on our site.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-lg md:text-2xl lg:text-3xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  Modifications
                </p>
                <p className="text-justify indent-8 text-sm md:text-lg lg:text-xl pb-4 text-gray-700">
                  About Insurances may revise this website usage policy at any
                  time, Without previous warning. By using this site, you
                  agree to be bound by the current version of these terms
                  presented above.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-lg md:text-2xl lg:text-3xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  Applicable law
                </p>
                <p className="text-justify indent-8 text-sm md:text-lg lg:text-xl pb-4 text-gray-700">
                  This site use policy is governed by and interpreted in
                  accordance with the laws followed by the About Insurance
                  Site and you irrevocably submit to the exclusive
                  jurisdiction of the courts in that state or locality.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-sm md:text-md lg:text-lg pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  This policy is effective from March 14, 2023 01:42 AM
                </p>
              </div>
            </div>
          </div>

          <div className="w-full items-center pt-10 pl-8 pb-20">
            <a href="/">
              <button id="navAction1" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-[#142039] border-4 border-white text-white hover:bg-white hover:text-[#142039] hover:border-[#ff6341] rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl" >
                Back to Home Page
              </button>
            </a>
          </div>
        </div>
      </section>
    </PageSeo>
  )
}