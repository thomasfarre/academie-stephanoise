import { Button } from "./foundations/Button";
import { Heading } from "./foundations/Heading";
import { BodyText } from "./foundations/BodyText";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function CallToActionSection() {
  return (
    <div className="bg-white border-2 mx-4  border-neutral-200 rounded-2xl shadow-lg max-w-4xl lg:mx-auto">
      <div className="px-6 py-8 sm:px-6 sm:py-16  xl:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heading level={2} className="text-balance">
            Prêt à essayer ? Réservez votre première séance !
          </Heading>
          <BodyText
            variant="paragraph"
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg/8"
          >
            Curieux de découvrir nos cours ? Que ce soit pour un moment intense
            ou une initiation en douceur, venez nous rencontrer et trouvez
            l'activité qui vous correspond. Contactez-nous pour réserver votre
            séance d'essai gratuite !
          </BodyText>

          <div className="mt-12 flex items-center justify-center gap-x-6">
            <a href="/contact">
              <Button
                variant="primary"
                className="px-6 py-4"
                label="Contactez-nous"
              >
                <PhoneIcon className="size-6 mr-2 text-emerald-100" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
