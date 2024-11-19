import { useState, useEffect } from "react";
import Heading from "./foundations/Heading";
import BodyText from "./foundations/BodyText";
import Button from "./foundations/Button";
import Link from "./foundations/Link";
import {
  Bars3Icon,
  XMarkIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import NavigationMenu from "./NavigationMenu";

const Header = ({ images }) => {
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
                src={images.logo.src}
                alt="Académie Stéphanoise"
                width={images.logo.attributes.width}
                height={images.logo.attributes.height}
                className="h-32 object-cover w-auto"
              />
            </a>
          </div>
          <NavigationMenu logo={images.logo} />
        </nav>
      </header>
      <main>
        <div className="relative isolate pt-16 xl:pt-0 overflow-hidden">
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
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-60 xl:px-8 xl:pt-20">
              <div className="mx-auto max-w-2xl gap-x-28 xl:mx-0 xl:flex xl:max-w-none xl:items-center">
                <div className="relative w-full xl:shrink-0 xl:max-w-xl">
                  <Heading level={1} className="">
                    Académie Stéphanoise
                  </Heading>
                  <BodyText
                    variant="headline"
                    className="mt-8 text-pretty sm:max-w-md xl:max-w-none"
                  >
                    Un espace de sport et de convivialité à Saint-Etienne, dédié
                    aux arts martiaux et au fitness. Un lieu où débutants et
                    compétiteurs, enfants et adultes, se retrouvent pour
                    partager leur passion et atteindre leurs objectifs ensemble.
                  </BodyText>
                  <div className="mt-12 xl:mt-20 flex items-center gap-x-8">
                    <a href="/inscription">
                      <Button
                        variant="primary"
                        onClick={() => {}}
                        className="px-6 py-4"
                        label="Nous rejoindre"
                    >
                        <UserPlusIcon className="w-5 h-5 mr-2 text-emerald-100" />
                      </Button>
                    </a>
                    <a href="#about-section">
                      <Button
                        variant="tertiary"
                        className="font-semibold text-neutral-900"
                        label="En savoir plus"
                      >
                        <span aria-hidden="true">→</span>
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 xl:mt-0 xl:pl-0">
                  <div className="ml-auto w-52 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 xl:order-none">
                    <div className="relative">
                      <img
                        src={images.gallery[0].src}
                        alt="Gallery image 1"
                        width={images.gallery[0].attributes.width}
                        height={images.gallery[0].attributes.height}
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                  </div>
                  <div className="mr-auto w-64 flex-none space-y-8 sm:mr-0 sm:pt-52 xl:pt-36">
                    <div className="relative">
                      <img
                        src={images.gallery[1].src}
                        alt="Gallery image 2"
                        width={images.gallery[1].attributes.width}
                        height={images.gallery[1].attributes.height}
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                    <div className="relative">
                      <img
                        src={images.gallery[2].src}
                        alt="Gallery image 3"
                        width={images.gallery[2].attributes.width}
                        height={images.gallery[2].attributes.height}
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                  </div>
                  <div className="w-64 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={images.gallery[3].src}
                        alt="Gallery image 4"
                        width={images.gallery[3].attributes.width}
                        height={images.gallery[3].attributes.height}
                        className="aspect-[2/3] w-full rounded-2xl bg-neutral-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10"></div>
                    </div>
                    <div className="relative">
                      <img
                        src={images.gallery[4].src}
                        alt="Gallery image 5"
                        width={images.gallery[4].attributes.width}
                        height={images.gallery[4].attributes.height}
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
