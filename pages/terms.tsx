import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))

export default function Terms() {
  return (
    <PageSeo
      title="Terms and Conditions of Use - Cookies"
      titleTemplate="%s | About Insurances"
      description="By accessing the About Insurances website, you agree to abide by these terms of service,
             all applicable laws and regulations and agree that you are responsible for
             compliance with all applicable local laws..."
      path="/terms"
    >
      <section id='terms' className="bg-gray-200 mx-auto flex w-full max-w-full h-full">
        <div className="select-none container mx-auto pt-10 w-full max-w-5xl">
          <div className="w-full items-center pb-12 pl-8">
            <a href="/">
              <button id="buttomBack" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-[#142039] border-4 border-white text-white hover:bg-white hover:text-[#142039] hover:border-[#ff6341] rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl" >
                Back to Home Page
              </button>
            </a>
          </div>

          <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none">
            <div className="w-auto">
              <h1 className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-dark-green">
                Terms and Conditions of Use - Cookies
              </h1>
            </div>
          </div>

          <div className="w-full mb-6">
            <div className="h-1 mx-8 my-0 py-0 bg-light-green bg-opacity-25" />
          </div>

          <div className="flex flex-wrap">
            <div className="w-auto px-8">
              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  1. Terms
                </p>
                <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  By accessing the About Insurances website, the user agrees
                  to abide by these terms of service, all applicable laws and
                  regulations and agree that you are responsible for
                  compliance with all applicable local laws. The materials
                  contained on this site are protected by copyright and
                  trademark laws. applicable commercials.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  2. License Use
                </p>
                <div className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  Permission is granted to temporarily download one copy of
                  the materials. (information or software) on the About
                  Insurances website, for viewing purposes only transitory
                  personal and non-commercial. This is the granting of a
                  license, not a transfer of title, and under this license you
                  may not:
                  <p>
                    1- Modify or copy the materials contained on the website;
                  </p>
                  <p>
                    2- Use the materials for any commercial purpose or for
                    public display (commercial or non-commercial);
                  </p>
                  <p>
                    3- Attempt to decompile or reverse engineer any software
                    contained on the About Insurances website;
                  </p>
                  <p>
                    4- Remove any copyright or other proprietary notations
                    from the materials; or
                  </p>
                  <p>
                    5- Transfer the materials to another person or 'mirror'
                    the materials on any other server.
                  </p>
                  <p>
                    This license will automatically terminate if you violate
                    any of these restrictions and may be terminated by the
                    About Insurances website at any time. When you close the
                    view such materials or upon termination of this license,
                    you must delete all such materials downloaded into your
                    possession, whether in electronic or printed form.
                  </p>
                </div>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  3. disclaimer
                </p>
                <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  The materials on the About Insurances website are provided
                  "as is". About Insurances does not offer warranties, express
                  or implied, and hereby disclaims and disclaims all other
                  warranties, including, without limitation, implied
                  warranties or conditions of merchantability, fitness for a
                  specific purpose or non-infringement of intellectual
                  property or other violation of rights. In addition, the
                  About Insurances website does not guarantee or make any
                  representations regarding the accuracy, the likely results
                  or reliability of using the materials on its website or
                  otherwise in connection with these materials or on sites
                  linked to this site.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  4. Limitations
                </p>
                <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  In no event shall the About Insurances website or its
                  suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit or due to
                  business interruption) arising out of the use of, or
                  inability to use, the materials on the About Insurances
                  website, even if About Insurances or an authorized
                  representative of the About Insurances website has been
                  notified orally or in writing of the possibility of such
                  damages. As some jurisdictions do not allow limitations on
                  implied warranties, or limitations of liability for damages
                  consequential or incidental, these limitations may not apply
                  to you.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  6. Links
                </p>
                <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  The About Insurances website has not reviewed all websites
                  that link to its website and is not responsible for the
                  content of any linked site. The inclusion of any link does
                  not imply endorsement by About Insurances of the site. Use
                  of any website linked is at the user's own risk.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-2xl md:text-3xl lg:text-4xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  7. Use of Cookies
                </p>
                <p className="text-justify indent-8 text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
                  About Insurances does not use cookies on its website. The
                  About Insurances website was developed with the purpose of
                  publicizing the company and the services provided. the users
                  will only have access to static content with company
                  information and the services offered. About Insurances is
                  not responsible for cookies contained in third-party links
                  or websites, published on the website. At the moment the
                  site does not collect any customer information and store it
                  in web browsers. In case of any changes to the website,
                  which In the absence of the use of cookies, this term will
                  be changed in accordance with applicable law.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-lg md:text-2xl lg:text-3xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  Modifications
                </p>
                <p className="text-justify indent-8 text-sm md:text-lg lg:text-xl pb-4 text-gray-700">
                  The About Insurances website may revise these terms of
                  service for its website at any time without notice. By using
                  this website, you agree to be bound by the current version
                  of these terms of service.
                </p>
              </div>

              <div className="mx-auto align-middle">
                <p className="text-lg md:text-2xl lg:text-3xl pt-10 text-dark-green mx-auto font-bold leading-none mb-3">
                  Applicable law
                </p>
                <p className="text-justify indent-8 text-sm md:text-lg lg:text-xl pb-4 text-gray-700">
                  These terms and conditions are governed by and construed in
                  accordance with the laws followed by the About Insurances
                  website and you irrevocably submit to the exclusive
                  jurisdiction of the courts in that state or locality.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full items-center pt-10 pl-8 pb-20">
            <a href="/">
              <button id="buttomBack2" className="inline-block w-max mx-auto text-md md:text-lg lg:text-xl lg:mx-0 hover:no-underline bg-[#142039] border-4 border-white text-white hover:bg-white hover:text-[#142039] hover:border-[#ff6341] rounded-full mt-4 lg:mt-0 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-100 duration-1000 ease-in-out shadow-xl" >
                Back to Home Page
              </button>
            </a>
          </div>
        </div>
      </section>
    </PageSeo>
  )
}