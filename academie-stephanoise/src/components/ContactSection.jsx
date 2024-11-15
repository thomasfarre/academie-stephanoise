import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Heading from "./foundations/Heading";
import BodyText from "./foundations/BodyText";

export default function ContactSection() {
  return (
    <div className="relative isolate">
      <div className="grid-cols-1 grid lg:grid-cols-2">
        <div className="relative lg:static">
          <div className="px-6 pb-8 pt-24  sm:pt-32  ml-auto max-w-[40rem] lg:pr-24 lg:pt-48 lg:pb-60">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-neutral-50 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-neutral-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-red-200">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <Heading level={2}>Contactez-nous</Heading>
            <div className="mt-6">
              <BodyText variant="headline">
                Vous souhaitez en savoir plus sur nos activités ou venir nous
                rencontrer ? Contactez-nous par téléphone ou passez directement
                nous voir à la salle. Nous sommes également joignables par email
                si nécessaire.
              </BodyText>
            </div>
            <dl className="mt-10 space-y-8 text-base/7 text-neutral-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-neutral-400"
                  />
                </dt>
                <dd>
                  27 B, rue de Terrenoire
                  <br />
                  42000 Saint Etienne
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-neutral-400"
                  />
                </dt>
                <dd>
                  <a href="tel:0768702556" className="hover:text-neutral-900">
                    07 68 70 25 56
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-neutral-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:fclub.contact@gmail.com"
                    className="hover:text-neutral-900"
                  >
                    fclub.contact@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none -mt-1.5">
                  <span className="sr-only">Hours</span>
                  <ClockIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-neutral-400"
                  />
                </dt>
                <dd>
                  <BodyText variant="label">Horaires</BodyText>
                  <ul className="mt-2">
                    <li>Lundi : 18h - 20h</li>
                    <li>Mardi : 18h30 - 19h30</li>
                    <li>Mercredi : 14h30 - 19h</li>
                    <li>Jeudi : 17h - 19h30</li>
                    <li>Vendredi : 17h - 19h</li>
                    <li>
                      Samedi/Dimanche :{" "} FERME
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div>
          <iframe
            className="min-h-[40rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.921073660843!2d4.410019776487918!3d45.431092335646866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a95d2f1180f7%3A0xa58a82af78c7b262!2s27B%20Rue%20de%20Terrenoire%2C%2042100%20Saint-%C3%89tienne!5e0!3m2!1sfr!2sfr!4v1731676493591!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
