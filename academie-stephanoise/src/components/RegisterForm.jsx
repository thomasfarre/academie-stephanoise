import {
  ArrowDownOnSquareIcon,
  ExclamationTriangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import BodyText from "../components/foundations/BodyText.jsx";
import Button from "../components/foundations/Button.jsx";
import Heading from "../components/foundations/Heading.jsx";

const RegisterForm = () => {
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [showInPersonForm, setShowInPersonForm] = useState(false);
  const [activity, setActivity] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const onlineFormRef = useRef(null);
  const inPersonFormRef = useRef(null);

  useEffect(() => {
    if (showOnlineForm && onlineFormRef.current) {
      onlineFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (showInPersonForm && inPersonFormRef.current) {
      inPersonFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showOnlineForm, showInPersonForm]);

  const handleOnlineButtonClick = () => {
    setShowOnlineForm(true);
    setShowInPersonForm(false);
    setActivity("");
    setCategory("");
    setDuration("");
  };

  const handleInPersonButtonClick = () => {
    setShowInPersonForm(true);
    setShowOnlineForm(false);
    setCategory("");
    setActivity("");
    setDuration("");
  };

  const handleActivityChange = (newActivity) => {
    setActivity(newActivity);
    setCategory("");
    setDuration("");
  };

  const getLink = () => {
    if (category && activity === "sports") {
      switch (category) {
        case "adulte":
          return "https://www.helloasso.com/associations/fclub/adhesions/adhesions-sports-de-combat-adulte-1";
        case "ado":
          return "https://www.helloasso.com/associations/fclub/adhesions/adhesion-sports-de-combat-ados-2025-2026";
        case "enfant":
          return "https://www.helloasso.com/associations/fclub/adhesions/adhesion-2025-2026-sport-combat-enfant";
        default:
          return null;
      }
    }
    if (duration && activity === "cross-training") {
      switch (duration) {
        case "cross-training-6mois":
          return "https://www.helloasso.com/associations/fclub/adhesions/cross-training-6-mois-aout-2025";
        case "prepa-3mois":
          return "https://www.helloasso.com/associations/fclub/adhesions/prepa-physique-6-mois";
        case "prepa-6mois":
          return "https://www.helloasso.com/associations/fclub/adhesions/prepa-physique-6-mois";
        case "crossfit-prepa-1an":
          return "https://www.helloasso.com/associations/fclub/adhesions/cross-training-1-an-aout-2025";
        default:
          return null;
      }
    }
    return null;
  };

  const getPrice = () => {
    if (activity === "sports") {
      switch (category) {
        case "adulte":
          return 340;
        case "ado":
          return 230;
        case "enfant":
          return 210;
        default:
          return null;
      }
    } else if (activity === "cross-training") {
      switch (duration) {
        case "cross-training-6mois":
          return 210;
        case "prepa-3mois":
          return 150;
        case "prepa-6mois":
          return 150;
        case "crossfit-prepa-1an":
          return 480;
        default:
          return null;
      }
    }
    return null;
  };

  const getInPersonLink = () => {
    // switch (category) {
    //   case "adulte":
    //     return "/adulte-form.pdf";
    //   case "enfant":
    //     return "/enfant-form.pdf";
    //   default:
    //     return null;
    // }
    return "/files/fiche-inscription.pdf";
  };

  return (
    <div className="relative isolate">
      <div>
        <div className="relative lg:static">
          <section className=" min-h-[70vh]">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-neutral-50">
              <svg
                aria-hidden="true"
                className="absolute left-[max(0%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-[39%] stroke-neutral-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
                <rect
                  fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-0">
              <div className="py-12 max-w-6xl grid grid-cols-1 md:grid-cols-6 gap-8 lg:pb-24">
                {/* Carte 1 : Inscription en ligne */}
                <div
                  onClick={handleOnlineButtonClick}
                  className="bg-white shadow-lg rounded-lg col-span-3 p-8 w-full flex flex-col items-center text-center cursor-pointer group transition ease-out duration-300 hover:shadow-xl"
                >
                  <Heading level={3}>En ligne</Heading>
                  <BodyText
                    variant="paragraph"
                    className="pt-4 text-balance max-w-sm mx-auto"
                  >
                    Accédez à notre plateforme en ligne et complétez votre
                    inscription rapidement via HelloAsso.
                  </BodyText>

                  <Button
                    className="mt-8 group-hover:text-emerald-600"
                    label="Inscription en ligne"
                    variant="tertiary"
                  ></Button>
                </div>

                {/* Carte 2 : Inscription en présentiel */}
                <div
                  onClick={handleInPersonButtonClick}
                  className="bg-white shadow-lg rounded-lg col-span-3 p-8 w-full flex flex-col items-center text-center cursor-pointer group transition ease-out duration-300 hover:shadow-xl"
                >
                  <Heading level={3}>En présentiel</Heading>
                  <BodyText
                    variant="paragraph"
                    className="pt-4 text-balance max-w-sm mx-auto"
                  >
                    Téléchargez votre fiche d'inscription et apportez-la
                    complétée avec votre règlement au club.
                  </BodyText>
                  <Button
                    label="Inscription en présentiel"
                    variant="tertiary"
                    className="mt-8 group-hover:text-emerald-600"
                  >
                  </Button>
                </div>
                <div className="col-span-3">
                  {/* Online Form Section */}
                  {showOnlineForm && (
                    <div
                      ref={onlineFormRef}
                      className="bg-white border-2 border-neutral-200 shadow-lg rounded-lg p-8 w-full"
                    >
                      <Heading level={3}>Formulaire en ligne</Heading>
                      <BodyText
                        variant="paragraph"
                        className="pt-2 italic text-sm"
                      >
                        Veuillez remplir tout les champs ci-dessous pour voir le
                        bouton d'inscription.
                      </BodyText>
                      <div className="pt-4">
                        {/* Form fields go here */}
                        <div className="pt-8">
                          <label className="block text-neutral-500 text-sm font-bold mb-4">
                            Choisissez votre activité
                          </label>
                          <div class="flex flex-wrap gap-4">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                id="sports"
                                name="activity"
                                value="sports"
                                className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                onChange={() => handleActivityChange("sports")}
                              />
                              <label
                                htmlFor="sports"
                                className="ml-3 block text-sm font-medium text-neutral-900"
                              >
                                Sports de combat
                              </label>
                            </label>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                id="cross-training"
                                name="activity"
                                value="cross-training"
                                className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                onChange={() =>
                                  handleActivityChange("cross-training")
                                }
                              />
                              <label
                                htmlFor="cross-training"
                                className="ml-3 block text-sm font-medium text-neutral-900"
                              >
                                Cross training / Prépa physique
                              </label>
                            </label>
                          </div>
                        </div>

                        {activity === "sports" && (
                          <div className="pt-8">
                            <label className="block text-neutral-500 text-sm font-bold mb-4">
                              Choisissez votre catégorie
                            </label>
                            <div className="flex flex-wrap gap-4">
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  id="adulte"
                                  name="category"
                                  value="adulte"
                                  className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                  onChange={() => setCategory("adulte")}
                                />
                                <label
                                  htmlFor="adulte"
                                  className="ml-3 block text-sm font-medium text-neutral-900"
                                >
                                  Adulte
                                </label>
                              </label>
                              <label className="inline-flex items-center ">
                                <input
                                  type="radio"
                                  id="enfant"
                                  name="category"
                                  value="enfant"
                                  className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                  onChange={() => setCategory("enfant")}
                                />
                                <label
                                  htmlFor="enfant"
                                  className="ml-3 block text-sm font-medium text-neutral-900"
                                >
                                  Enfant
                                </label>
                              </label>
                              <label className="inline-flex items-center ">
                                <input
                                  type="radio"
                                  id="ado"
                                  name="category"
                                  value="ado"
                                  className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                  onChange={() => setCategory("ado")}
                                />
                                <label
                                  htmlFor="ado"
                                  className="ml-3 block text-sm font-medium text-neutral-900"
                                >
                                  Ado
                                </label>
                              </label>
                            </div>
                          </div>
                        )}

                        {activity === "cross-training" && (
                          <div className="pt-8">
                            <label className="block text-neutral-500 text-sm font-bold mb-4">
                              Choisissez la durée
                            </label>
                            <div className="flex flex-wrap gap-4">
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  id="cross-training-6mois"
                                  name="duration"
                                  value="cross-training-6mois"
                                  className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                  onChange={() =>
                                    setDuration("cross-training-6mois")
                                  }
                                />
                                <label
                                  htmlFor="cross-training-6mois"
                                  className="ml-3 block text-sm font-medium text-neutral-900"
                                >
                                  Cross training 6 mois
                                </label>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  id="prepa-3mois"
                                  name="duration"
                                  value="prepa-3mois"
                                  className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                  onChange={() => setDuration("prepa-3mois")}
                                />
                                <label
                                  htmlFor="prepa-3mois"
                                  className="ml-3 block text-sm font-medium text-neutral-900"
                                >
                                  Prépa 3 mois
                                </label>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  id="prepa-6mois"
                                  name="duration"
                                  value="prepa-6mois"
                                  className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                  onChange={() => setDuration("prepa-6mois")}
                                />
                                <label
                                  htmlFor="prepa-6mois"
                                  className="ml-3 block text-sm font-medium text-neutral-900"
                                >
                                  Prépa 6 mois
                                </label>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  id="crossfit-prepa-1an"
                                  name="duration"
                                  value="crossfit-prepa-1an"
                                  className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                  onChange={() =>
                                    setDuration("crossfit-prepa-1an")
                                  }
                                />
                                <label
                                  htmlFor="crossfit-prepa-1an"
                                  className="ml-3 block text-sm font-medium text-neutral-900"
                                >
                                  Cross Training et Prépa 1 an
                                </label>
                              </label>
                            </div>
                          </div>
                        )}

                        {getLink() && (
                          <div className="mt-4">
                            <a href={getLink()} target="_blank">
                              <Button
                                className="mt-16"
                                label="M'inscrire sur HelloAsso"
                                variant="primary"
                              >
                                <UserPlusIcon className="size-5 mr-2 text-emerald-100" />
                              </Button>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* In-Person Form Section */}
                  {showInPersonForm && (
                    <div
                      ref={inPersonFormRef}
                      className="bg-white border-2 border-neutral-200 shadow-lg rounded-lg p-8 w-full"
                    >
                      <Heading level={3}>Formulaire présentiel</Heading>
                      <BodyText
                        variant="paragraph"
                        className="pt-2 italic text-sm"
                      >
                        Veuillez remplir tout les champs ci-dessous pour voir le
                        bouton d'inscription.
                      </BodyText>
                      <div className="pt-4">
                        <div className="pt-8">
                          <label className="block text-neutral-500 text-sm font-bold mb-4">
                            Choisissez votre catégorie
                          </label>
                          <div className="flex flex-wrap gap-4">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                id="adulte"
                                name="category"
                                value="adulte"
                                className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                onChange={() => {
                                  setCategory("adulte");
                                  setActivity("sports");
                                }}
                              />
                              <label
                                htmlFor="adulte"
                                className="ml-3 block text-sm font-medium text-neutral-900"
                              >
                                Adulte
                              </label>
                            </label>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                id="enfant"
                                name="category"
                                value="enfant"
                                className="size-4 border-neutral-300 text-emerald-600 focus:ring-emerald-600"
                                onChange={() => {
                                  setCategory("enfant");
                                  setActivity("sports");
                                }}
                              />
                              <label
                                htmlFor="enfant"
                                className="ml-3 block text-sm font-medium text-neutral-900"
                              >
                                Enfant
                              </label>
                            </label>
                          </div>
                        </div>

                        {getInPersonLink() && (
                          <>
                            <div className="mt-12">
                              <Button
                                label="Télécharger le formulaire"
                                variant="primary"
                                onClick={() =>
                                  (window.location.href = getInPersonLink())
                                }
                              >
                                <ArrowDownOnSquareIcon className="size-5 mr-2 text-emerald-100" />
                              </Button>
                            </div>
                            <div className="pt-12">
                              <div className="flex items-end space-x-2">
                                <ExclamationTriangleIcon className="size-5 flex-shrink-0 text-red-500" />
                                <BodyText
                                  variant="label"
                                  className="text-red-600"
                                >
                                  Important
                                </BodyText>
                              </div>
                              <div className="pt-4">
                                <BodyText variant="paragraph">
                                  Veuillez apporter le formulaire complété avec
                                  votre règlement au club.
                                </BodyText>
                                <BodyText variant="paragraph" className="pt-2">
                                  Vous avez jusqu'à un mois à compter de la date
                                  d'inscription pour fournir un{" "}
                                  <a
                                    href="/files/certificat-medical.pdf"
                                    download
                                    className="text-emerald-600 underline"
                                  >
                                    certificat médical
                                  </a>
                                </BodyText>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {/* Price Section */}
                {(() => {
                  if (
                    (activity === "sports" && category) ||
                    (activity === "cross-training" && duration)
                  ) {
                    return (
                      <div className="col-span-3 bg-neutral-50  p-8 w-full">
                        {/* Section des tarifs */}
                        <Heading level={3}>Tarifs</Heading>
                        <BodyText variant="paragraph" className="pt-2">
                          {activity === "sports" && category && (
                            <span>
                              Le tarif plein pour les sports de combat <br></br>
                              catégorie{" "}
                              {category === "adulte"
                                ? "adulte"
                                : category === "ado"
                                ? "ado"
                                : "enfant"}{" "}
                              est de :{" "}
                              <span className="font-medium block text-3xl mt-2">
                                {getPrice()} €
                              </span>
                            </span>
                          )}
                          {activity === "cross-training" && duration && (
                            <span>
                              Le tarif pleinpour le cross-training, durée{" "}
                              {duration === "cross-training-6mois"
                                ? "6 mois"
                                : duration === "prepa-3mois"
                                ? "3 mois"
                                : duration === "prepa-6mois"
                                ? "6 mois"
                                : "1 an"}{" "}
                              est de{" "}
                              <span className="font-medium block text-3xl mt-2">
                                {getPrice()} €
                              </span>
                            </span>
                          )}
                        </BodyText>

                        {/* Types de paiement acceptés */}
                        <BodyText variant="paragraph" className="pt-4">
                          <strong>Types de règlement acceptés :</strong>
                          <ul className="list-disc list-inside gap-2 mt-2 grid grid-cols-2 text-sm">
                            <li>Carte</li>
                            <li>Espèce</li>
                            <li>Chèque</li>
                            <li>Chèque vacances</li>
                            <li>Coupon sport</li>
                            <li>Pass'Sport</li>
                            <li>Pass'Région</li>
                          </ul>
                        </BodyText>

                        {/* Engagement */}
                        <BodyText variant="paragraph" className="pt-2">
                          <strong>Engagement :</strong> de septembre à juin.
                        </BodyText>

                        {/* Contact */}
                        <BodyText variant="paragraph" className="pt-2">
                          Pour plus d'informations, veuillez{" "}
                          <a
                            href="/contact"
                            target="_blank"
                            className="text-blue-500 underline"
                          >
                            contacter directement le club
                          </a>
                          .
                        </BodyText>
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
