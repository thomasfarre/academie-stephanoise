import { useState, useEffect } from 'react';
import Heading from './foundations/Heading';
import BodyText from './foundations/BodyText';
import Button from './foundations/Button';
import Link from './foundations/Link';
import { Bars3Icon, XMarkIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    console.log("Menu toggled:", menuOpen);
  }, [menuOpen]);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between xl:justify-start xl:space-x-40 p-6 xl:px-8"
          aria-label="Global"
        >
          <div className="flex">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-32 object-cover w-auto"
                src="/favicon.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <Button onClick={toggleMenu} variant="icon" className="-m-2.5">
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <XMarkIcon className="size-7" />
              ) : (
                <Bars3Icon className="size-7" />
              )}
            </Button>
          </div>
          <div className="hidden lg:flex lg:flex-row space-x-2 lg:gap-x-12">
            <Link href="/activités" label="Activités" />
            <Link href="#" label="Calendrier" />
            <Link href="#" label="S'inscrire" />
            <Link href="#" label="Contact" />
            <Link href="#" label="Blog" />
          </div>
        </nav>
        {menuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div onClick={toggleMenu} className="fixed inset-0 bg-neutral-900 opacity-80 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Académie Stéphanoise</span>
                  <img className="h-28 w-auto" src="/assets/logo.png" alt="" />
                </a>
                <Button
                  onClick={toggleMenu}
                  type="button"
                  variant="icon"
                  className="-m-2.5"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="size-7" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-neutral-500/10">
                  <div className="space-y-4 w-fit px-4 py-8">
                    <div>
                      <Link
                        href="/activités"
                        label="Activités"
                      />
                    </div>
                    <div>
                      <Link
                      href="#"
                        label="Calendrier"
                      />
                    </div>
                    <div>
                      <Link
                        href="#"
                      label="S'inscrire"
                      />
                    </div>
                    <div>
                      <Link
                        href="#"
                        label="Contact"
                      />
                    </div>
                    <div>
                      <Link
                        href="#"
                        label="Blog"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <main>
        <div className="relative isolate pt-16 xl:pt-0">
          <svg
            className="absolute inset-x-0 top-20 translate-x-40 -z-10 h-[64rem] w-full stroke-neutral-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
            <svg x="50%" y="-1" className="overflow-visible fill-red-200">
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
            <div className="mx-auto max-w-7xl px-6 pb-24 xl:pb-12 pt-36 sm:pt-60 xl:px-8 xl:pt-20">
              <div className="mx-auto max-w-2xl gap-x-28 xl:mx-0 xl:flex xl:max-w-none xl:items-center">
                <div className="relative w-full xl:shrink-0 xl:max-w-xl">
                  <Heading level={1} className="">
                    Académie Stéphanoise
                  </Heading>
                  <BodyText variant="headline" className="mt-8 text-pretty sm:max-w-md xl:max-w-none">
                    Un espace de sport et de convivialité à Saint-Etienne, dédié aux arts martiaux et au fitness. Un lieu où débutants et compétiteurs, enfants et adultes, se retrouvent pour partager leur passion et atteindre leurs objectifs ensemble.
                  </BodyText>
                  <div className="mt-12 xl:mt-20 flex items-center gap-x-8">
                    <Button
                      variant="primary"
                      onClick={() => {}}
                      className="px-6 py-4"
                      label="Nous rejoindre"
                    >
                      <UserPlusIcon className="w-5 h-5 mr-2 text-emerald-100" />
                    </Button>

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
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 xl:mt-0 xl:pl-0">
                  <div className="ml-auto w-52 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 xl:order-none">
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_10.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                  </div>
                  <div className="mr-auto w-64 flex-none space-y-8 sm:mr-0 sm:pt-52 xl:pt-36">
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_9.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_8.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                  </div>
                  <div className="w-64 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_7.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="/assets/academie_stephanoise_6.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
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

export default Header;
