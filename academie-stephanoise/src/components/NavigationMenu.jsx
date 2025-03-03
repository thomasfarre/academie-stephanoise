import { useState, useEffect } from "react";
import Button from "./foundations/Button";
import Link from "./foundations/Link";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const NavigationMenu = ({ logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
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
      <div className="hidden lg:flex lg:flex-row space-x-2 lg:gap-x-12 xl:ml-40">
        <div className="relative group">
          <button className="transition duration-300 ease-out focus:outline-none font-semibold text-stone-950 hover:text-stone-700 flex items-center">
            Activités
            <ChevronDownIcon className="ml-1 h-5 w-5" />
          </button>
          <div className="absolute hidden group-hover:block bg-white border border-neutral-300 z-50 shadow-lg rounded-lg p-4 space-y-2 w-60">
            <div>
              <Link href="/boxe-pieds-poings" label="Boxe pieds-poings" />
            </div>
            <div>
              <Link href="/krav-maga" label="Krav Maga" />
            </div>
            <div>
              <Link href="/mma" label="MMA" />
            </div>
            <div>
              <Link href="/tolpar" label="Tolpar" />
            </div>
            <div>
              <Link href="/luta-livre" label="Luta Livre" />
            </div>
            <div>
              <Link href="/cross-training" label="Cross Training" />
            </div>
          </div>
        </div>
        <Link href="/planning" label="Planning" />
        <Link href="/contact" label="Contact" />
        <Link href="/inscription" label="S'inscrire" />
        <Link href="/tarifs" label="Tarifs" />
        <Link href="/blog" label="Blog" />
      </div>

      {menuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-neutral-900 opacity-80 z-50"
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Académie Stéphanoise</span>
                <img
                  src={logo.src}
                  alt="Académie Stéphanoise"
                  width={112}
                  height={112}
                  className="h-28 w-auto"
                />
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
                    <Link href="/activités" label="Activités" />
                  </div>
                  <div>
                    <Link href="/planning" label="Planning" />
                  </div>
                  <div>
                    <Link href="/contact" label="Contact" />
                  </div>
                  <div>
                    <Link href="/inscription" label="S'inscrire" />
                  </div>
                  <div>
                    <Link href="/tarifs" label="Tarifs" />
                  </div>
                  <div>
                    <Link href="/blog" label="Blog" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationMenu;
