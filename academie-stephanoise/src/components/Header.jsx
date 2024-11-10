import PropTypes from 'prop-types';
import Heading from './foundations/Heading';
import BodyText from './foundations/BodyText';
import Button from './foundations/Button';
import Link from './foundations/Link';

const Header = () => {

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center lg:space-x-40 p-6 lg:px-8"
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
          <div className="flex space-x-2 lg:gap-x-12">
            <Link href="#" label="Activités" />
            <Link href="#" label="Calendrier" />
            <Link href="#" label="S'inscrire" />
            <Link href="#" label="Contact" />
          </div>
        </nav>
      </header>
      <main>
        <div className="relative isolate pt-16 lg:pt-0">
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
                  <Heading level={1} className="text-pretty font-montserrat">
                    Académie Stéphanoise
                  </Heading>
                  <BodyText variant="headline" className="mt-8 text-pretty sm:max-w-md lg:max-w-none">
                    Un espace de sport et de convivialité à Saint-Etienne, dédié aux arts martiaux et au fitness. Un lieu où débutants et compétiteurs, enfants et adultes, se retrouvent pour partager leur passion et atteindre leurs objectifs ensemble.
                  </BodyText>
                  <div className="mt-20 flex items-center gap-x-6">
                    <Button
                      variant="primary"
                      onClick={() => {}}
                      className="px-3.5 py-2.5"
                      label="S'inscrire"
                    />
                    <Button
                      variant="tertiary"
                      onClick={() => {}}
                      className="font-semibold text-neutral-900"
                      label="En savoir plus"
                    >
                      <span aria-hidden="true">→</span>
                    </Button>
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
