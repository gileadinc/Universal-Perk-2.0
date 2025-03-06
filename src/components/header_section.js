import Image from "next/image";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Universal Perk</span>
            <Image
              alt=""
              src="/logo.svg"
              width={40}
              height={40}
              className="h-10 w-auto text-[#bcb]"
            />
          </a>
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all"
        >
          Let&apos;s Build Your AI Agent
        </button>
      </nav>
    </header>
  );
};

export default Header;
