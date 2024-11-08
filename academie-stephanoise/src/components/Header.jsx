import PropTypes from 'prop-types';
// import image1 from '../assets/academie_stephanoise_1.jpg';
// import image2 from '../assets/academie_stephanoise_2.jpg';
// import image3 from '../assets/academie_stephanoise_3.jpg';
// import image4 from '../assets/academie_stephanoise_4.jpg';
// import image5 from '../assets/academie_stephanoise_5.jpg';


const Header = () => {

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center space-x-40 p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-28 w-auto"
                src="/assets/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="font-semibold text-neutral-900">Activités</a>
            <a href="#" className="font-semibold text-neutral-900">Calendrier</a>
            <a href="#" className="font-semibold text-neutral-900">S'inscrire</a>
            <a href="#" className="font-semibold text-neutral-900">Contact</a>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. */}
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-50"></div>
          <div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=green&shade=600"
                  alt=""
                />
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-neutral-700">
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    Activités
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    Calendrier
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    S'inscrire
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-neutral-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-neutral-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            ></rect>
          </svg>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-28 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-neutral-900 sm:text-7xl font-montserrat">
                    Academie Stephanoise
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-neutral-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Un espace de sport et de convivialité à Saint-Etienne, dédié aux arts martiaux et au fitness. Un lieu où débutants et compétiteurs, enfants et adultes, se retrouvent pour partager leur passion et atteindre leurs objectifs ensemble.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-neutral-900 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
                    >
                      S'inscrire
                    </a>
                    <a href="#" className="font-semibold text-neutral-900">
                      En savoir plus <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-52 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_10.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                  </div>
                  <div className="mr-auto w-64 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_9.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_8.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                  </div>
                  <div className="w-64 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_7.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_6.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Header.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
