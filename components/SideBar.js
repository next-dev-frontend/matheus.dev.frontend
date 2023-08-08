const SideBar = () => {
  return (
    <section className="select-none h-max w-full max-w-5xl mx-auto flex-col justify-between bg-white">
      <div className="flex flex-nowrap items-center justify-left md:justify-center px-4 md:px-0 shadow-xl md:shadow-none pt-10">
        <div className="w-auto pl-5">
          <p className="my-4 text-left lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold text-color1">
            Frequently Asked Questions About Insurance
          </p>
        </div>
      </div>

      <div className="px-4 py-6">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1 items-center">
          <a
            href="/tips/teste.tsx"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-[#142039] hover:bg-gray-100 hover:text-[#ff6341]"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium underline"> Billing </span>
          </a>
        </nav>
      </div>
    </section>
  )
}
export default SideBar