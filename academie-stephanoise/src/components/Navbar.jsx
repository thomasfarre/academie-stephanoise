import { useState } from 'react';
import Link from './foundations/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-neutral-900">
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between xl:justify-start xl:space-x-40 p-6 xl:px-8"
          aria-label="Global"
        >
          <div className="flex">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Académie Stéphanoise</span>
              <div className="h-28 py-5 px-1 bg-white w-fit rounded-full">
                {children}
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button onClick={toggleMenu} className="-m-2.5 p-2.5">
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <XMarkIcon className="size-7 text-neutral-50" />
              ) : (
                <Bars3Icon className="size-7 text-neutral-50" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-row space-x-2 lg:gap-x-12">
            <Link whiteText href="/activités" label="Activités" />
            <Link whiteText href="/planning" label="Planning" />
            <Link whiteText href="/contact" label="Contact" />
            <Link whiteText href="/inscription" label="S'inscrire" />
            <Link whiteText href="/blog" label="Blog" />
          </div>
        </nav>
        {menuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div onClick={toggleMenu} className="fixed inset-0 bg-neutral-900 opacity-80 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Académie Stéphanoise</span>
                  {children}
                </a>
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="size-7" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-neutral-500/10">
                  <div className="space-y-4 w-fit px-4 py-8">
                    <div>
                      <Link
                        href="#"
                        label="Activités"
                      />
                    </div>
                    <div>
                      <Link
                        href="/planning"
                        label="Planning"
                      />
                    </div>
                    <div>
                      <Link
                        href="/contact"
                        label="Contact"
                      />
                    </div>
                    <div>
                      <Link
                        href="/inscription"
                        label="S'inscrire"
                      />
                    </div>
                    <div>
                      <Link
                        href="/blog"
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
    </div>
  );
};

export default Navbar;
