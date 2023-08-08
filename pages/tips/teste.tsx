import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../../components/PageSeo'))

export default function teste() {
  return (
    <PageSeo
      title="Ask Your Questions About Insurance and Agencies"
      titleTemplate="%s | About Insurances"
      description="Insurance information and tips website. Before contracting any insurance service, visit our website and clarify all your doubts on the subject."
      path="/"
    >
      <main>
        <section className="bg-gray-100 bg-no-repeat bg-fixed bg-cover w-full max-w-full h-full">

        </section>

      </main>
    </PageSeo>
  )
}