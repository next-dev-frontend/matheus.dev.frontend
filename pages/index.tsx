import dynamic from 'next/dynamic'
const PageSeo = dynamic(() => import('../components/PageSeo'))
const TabBar = dynamic(() => import('../components/TabBar'))

export default function Home() {
  return (
    <PageSeo
      title="Desenvolvedor Web Frontend"
      titleTemplate="%s | React Nextjs Tailwind"
      description="Procurando alguém para criar sites institucionais? Acesse o site e veja os serviços que disponibilizamos pra você obter um site 100% seguro, com excelência nos quisitos performance, acessibilidade, melhores práticas de programação, SEO e Aplicativos Progressivos. Tudo isso utilizando linguagens e frameworks modernos e robustos como React.js e Next.js, além de TailwindCSS e Typescript. Acesse agora."
      path="/"
    >
      <main>
        <TabBar />
      </main>
    </PageSeo>
  )
}