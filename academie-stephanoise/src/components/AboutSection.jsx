import { Heading } from './foundations/Heading';
import { BodyText } from './foundations/BodyText';

export default function AboutSection() {
  return (
    <div id="about-section" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 xl:overflow-visible xl:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-[39%] stroke-neutral-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-red-200">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 xl:mx-0 xl:max-w-none xl:grid-cols-2 xl:items-start xl:gap-y-10">
        <div className="xl:col-span-2 xl:col-start-1 xl:row-start-1 xl:mx-auto xl:grid xl:w-full xl:max-w-7xl xl:grid-cols-2 xl:gap-x-8 xl:px-8">
          <div className="xl:pr-4">
            <div className="xl:max-w-lg">
              <BodyText variant="label">Qui sommes nous ?</BodyText>
              <Heading level={2} className="mt-2 text-pretty">
                Plus qu'une salle de sport, un lieu de vie
              </Heading>
              <BodyText variant="headline" className="mt-6">
                Bien plus qu’une salle de sport, un lieu de vie où le sport rassemble, la mixité s’incarne, et le vivre-ensemble prend tout son sens.
              </BodyText>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 pb-0 xl:pb-12 xl:sticky xl:top-4 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:overflow-hidden">
          <img
            loading="lazy"
            alt=""
            src="/assets/academie_stephanoise_about.png"
            className="w-[38rem] max-w-none rounded-2xl bg-neutral-900 shadow-xl ring-1 ring-neutral-400/10"
          />
        </div>
        <div className="xl:col-span-2 xl:col-start-1 xl:row-start-2 xl:mx-auto xl:grid xl:w-full xl:max-w-7xl xl:grid-cols-2 xl:gap-x-8 xl:px-8">
          <div className="xl:pr-4">
            <div className="max-w-xl xl:max-w-lg">
              <BodyText variant="paragraph">
                Un lieu vivant où nous espérons que vous prendrez beaucoup de plaisir à venir vous entrainer.
En 2015, une idée germe petit à petit dans la tête d’une équipe de passionnés : ouvrir une salle de sports de combat et de remise en forme sur Saint-Etienne. Mais bien plus qu’une simple salle de sport telle qu’il en existe tant d’autres. L’idée est de créer un lieu de vie accessible au plus grand nombre, un lieu où le vivre ensemble et la mixité ne sont pas que des slogans creux, un lieu où le sport rassemble : l'Académie Stéphanoise.
Découvrez notre association dédiée aux arts martiaux et au fitness. Vous pourrez apprendre le Krav maga, le MMA, la Luta Livre, le Full contact, ou pratiquer le CrossFit, le Pilates, et la remise en forme. Que vous soyez débutant ou compétiteur, adulte ou enfant, rejoignez-nous, notre club est ouvert à tous et s’adapte à chaque objectif.

              </BodyText>
              <div className="bg-neutral-800 w-20 h-0.5 mt-6"></div>
              <BodyText variant="paragraph" className="mt-6">
                Consultez la liste complète de nos activités et découvrez le planning de chaque discipline pour trouver celle qui vous convient. Pour toute question, n’hésitez pas à nous contacter : notre équipe est là pour vous accompagner et répondre à vos besoins. Que ce soit pour en savoir plus sur un cours ou pour rejoindre notre communauté, nous sommes à votre disposition !
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
