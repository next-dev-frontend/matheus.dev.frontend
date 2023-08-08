import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))
const SliderImages = dynamic(() => import('../components/SliderImages'))
const AboutInsurances = dynamic(() => import('../components/AboutInsurances'))

export default function Home() {
  return (
    <PageSeo
      title="Ask Your Questions About Insurance and Agencies"
      titleTemplate="%s | About Insurances"
      description="Insurance information and tips website. Before contracting any insurance service, visit our website and clarify all your doubts on the subject."
      path="/"
    >
      <main>
        <SliderImages />
        <AboutInsurances />
      </main>
    </PageSeo>
  )
}