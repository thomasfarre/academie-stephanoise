import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";


const navigation = {
  discover: [
    { name: "Activités", href: "/activités" },
    { name: "Planning", href: "/planning" },
    { name: "Blog", href: "/blog" },
  ],
  join: [
    { name: "S'inscrire", href: "/inscription" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/fclubstephanoise",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fclub42/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@fclubcontact47",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer({ paddingTop, paddingTopXl, children }) {
  return (
    <footer className="bg-neutral-900">
      <div className={`mx-auto max-w-7xl px-6 pb-8 ${paddingTop} xl:px-8 ${paddingTopXl}`}>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="h-28 py-5 px-1 bg-white w-fit rounded-full">
            {children}

            </div>
            <p className="text-balance text-sm/6 text-neutral-300">
              Il n’y a pas de victoire individuelle dans un lieu où chacun se
              soutient pour avancer.
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-neutral-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">
                  Découvrir
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.discover.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-neutral-400 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 lg:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">
                  Nous rejoindre
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.join.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm/6 text-neutral-400 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="mt-10 md:mt-0 space-y-4">
                <h3 className="text-sm font-semibold text-white">
                  Coordonnées
                </h3>
                <div className="flex items-center text-sm text-neutral-400 pt-4">
                  <EnvelopeIcon
                    className="size-5 mr-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:fclub.contact@gmail.com"
                    className="hover:text-white"
                  >
                    fclub.contact@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-sm text-neutral-400">
                  <PhoneIcon
                    className="size-5 mr-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a href="tel:0768702556" className="hover:text-white">
                    07 68 70 25 56
                  </a>
                </div>
                <div className="flex items-start text-sm text-neutral-400">
                  <MapPinIcon
                    className="size-5 mr-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>27 B, rue de Terrenoire 42000 Saint Etienne</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm/6 font-semibold text-white">
                Permanence accueil
              </h3>
              <div className="space-y-2 text-sm/6 text-neutral-400">
                <div>
                  <span className="font-semibold">Lundi:</span>
                  <span> 18h - 20h</span>
                </div>
                <div>
                  <span className="font-semibold">Mardi:</span>
                  <span> 18h30 - 19h30</span>
                </div>
                <div>
                  <span className="font-semibold">Mercredi:</span>
                  <span> 14h30 - 19h</span>
                </div>
                <div>
                  <span className="font-semibold">Jeudi:</span>
                  <span> 17h - 19h30</span>
                </div>
                <div>
                  <span className="font-semibold">Vendredi:</span>
                  <span> 17h - 19h</span>
                </div>
                <div>
                  <span className="font-semibold">Samedi/Dimanche:</span>
                  <span> FERME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-neutral-400">
            &copy; 2024 Made by Omar{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              id="Layer_1"
              width="200"
              height="200"
              fill="#000"
              version="1.1"
              viewBox="0 0 512 512"
              className="size-4 inline-flex"
            >
              <g id="SVGRepo_iconCarrier">
                <g fill="#E46A53">
                  <path d="M286.404 457.273h-60.808c-28.605-1.357-51.851 21.317-51.686 51.686v3.04a242.35 242.35 0 0 1 164.181 0v-3.04c.163-30.368-23.081-53.043-51.687-51.686M270.999 350.252H241c-10.186 0-18.444 8.258-18.444 18.445v17.837c0 10.186 8.258 18.445 18.445 18.445H271c10.186 0 18.445-8.258 18.445-18.445v-17.837c-.001-10.188-8.258-18.445-18.446-18.445M445.784 153.195l-11.753-11.753c-6.253-6.253-16.393-6.253-22.645 0 0 0-44.023 44.407-44.764 45.845h-61.368v48.646h75.198c8.163 0 65.332-60.094 65.332-60.094 6.254-6.251 6.254-16.391 0-22.644M100.613 141.412c-6.253-6.253-16.393-6.253-22.645 0l-11.753 11.753c-6.253 6.253-6.253 16.393 0 22.645 0 0 57.169 60.094 65.332 60.094h75.198v-48.646h-61.368c-.74-1.44-44.764-45.846-44.764-45.846M245.055 158.1h-19.458V78.442c0-32.576-26.408-58.983-58.983-58.983H146.45c-5.319 0-9.632-4.312-9.632-9.632v-.195c0-5.319 4.312-9.632 9.632-9.632h20.164c43.322 0 78.442 35.12 78.442 78.442zM286.404 158.1h-19.458V78.442C266.945 35.12 302.065 0 345.387 0h20.164c5.319 0 9.632 4.312 9.632 9.632v.195c0 5.319-4.312 9.632-9.632 9.632h-20.164c-32.576 0-58.983 26.408-58.983 58.983zM397.786 316.269l-7.509-7.51a72.17 72.17 0 0 0-51.032-21.139h-35.397v-19.458h35.395c24.476 0 47.487 9.531 64.793 26.838l7.51 7.509c3.762 3.762 3.762 9.861 0 13.622l-.137.137c-3.763 3.762-9.862 3.761-13.623.001M392.314 363.699l-7.509-7.51a72.17 72.17 0 0 0-51.032-21.139h-35.397v-19.458h35.395c24.476 0 47.487 9.531 64.793 26.838l7.51 7.509c3.762 3.762 3.762 9.861 0 13.622l-.137.137c-3.764 3.762-9.863 3.761-13.623.001M100.593 316.269l-.137-.137c-3.762-3.762-3.762-9.861 0-13.622l7.51-7.509c17.306-17.307 40.315-26.838 64.792-26.838h35.395v19.458h-35.395c-19.28 0-37.403 7.507-51.033 21.139l-7.51 7.51c-3.762 3.76-9.861 3.76-13.622-.001M106.065 363.699l-.137-.137c-3.762-3.762-3.762-9.861 0-13.622l7.51-7.509c17.306-17.307 40.315-26.838 64.792-26.838h35.395v19.458H178.23c-19.28 0-37.403 7.507-51.033 21.139l-7.51 7.51c-3.761 3.76-9.86 3.76-13.622-.001"></path>
                </g>
                <g fill="#CA463D">
                  <path d="M268.162 150.803h-24.323c-21.829 0-39.525 17.696-39.525 39.525v121.615c0 21.829 17.696 39.525 39.525 39.525h24.323c21.829 0 39.525-17.696 39.525-39.525V190.328c-.001-21.829-17.697-39.525-39.525-39.525M270.999 403.762H241c-10.186 0-18.444 8.258-18.444 18.445v17.837c0 10.187 8.258 18.445 18.445 18.445H271c10.186 0 18.445-8.258 18.445-18.445v-17.837c-.001-10.187-8.258-18.445-18.446-18.445M439.202 32.806v69.29h-69.29c.652 37.05 30.868 66.888 68.074 66.888 37.613 0 68.105-30.491 68.105-68.105 0-37.205-29.84-67.423-66.889-68.073M72.798 31.62v69.29h69.29c-.652 37.05-30.868 66.888-68.074 66.888-37.613 0-68.105-30.491-68.105-68.105 0-37.205 29.84-67.421 66.889-68.073"></path>
                </g>
              </g>
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
}
