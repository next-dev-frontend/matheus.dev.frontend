import Contact from './Contact'

const Footer = () => {
  return (
    <section id="footer" className="select-none relative flex mx-auto w-full max-w-full border-[#142039] border-opacity-70 border-t-4">
      <footer className="bg-gray-200 bg-center bg-cover bg-fixed bg-no-repeat w-screen">
        <Contact />
      </footer>
    </section>
  )
}

export default Footer