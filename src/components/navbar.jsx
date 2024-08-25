import { useState } from "react";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="pb-6 bg-white top-0 w-full lg:pb-0 lg:shadow-2xl">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <h1>KUBASSILE</h1>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            <svg
              className={`${isVisible ? "hidden" : "block"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
            <svg
              className={`${isVisible ? "block" : "hidden"} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
              href="#service"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Serviços
            </a>
            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Preços
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Sobre nós
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Contactos
            </a>
          </div>
        </nav>

        {/* <!-- xs to lg --> */}
        {isVisible && (
          <nav className="pt-4 pb-4 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="#service"
                  title=""
                  onClick={() => setIsVisible(false)}
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Serviços
                </a>

                <a
                  href="#"
                  title=""
                  onClick={() => setIsVisible(false)}
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Preços
                </a>

                <a
                  href="#"
                  title=""
                  onClick={() => setIsVisible(false)}
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Sobre nós
                </a>

                <a
                  href="#"
                  title=""
                  onClick={() => setIsVisible(false)}
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Contactos
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
