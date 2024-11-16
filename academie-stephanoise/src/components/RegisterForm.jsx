import { useState, useRef, useEffect } from "react";
import Heading from "../components/foundations/Heading.jsx";
import BodyText from "../components/foundations/BodyText.jsx";
import Button from "../components/foundations/Button.jsx";
import { CursorArrowRaysIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

const RegisterForm = () => {
  const [showOnlineForm, setShowOnlineForm] = useState(false);
  const [showInPersonForm, setShowInPersonForm] = useState(false);
  const [activity, setActivity] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
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
  };

  const handleInPersonButtonClick = () => {
    setShowInPersonForm(true);
    setShowOnlineForm(false);
  };

  const handleActivityChange = (newActivity) => {
    setActivity(newActivity);
    setCategory('');
    setDuration('');
  };

  const getLink = () => {
    if (category && activity === 'sports') {
      return `/${category}-link`;
    }
    if (duration && activity === 'cross-training') {
      return `/${duration}-link`;
    }
    return null;
  };

  const getPrice = () => {
    if (activity === 'sports') {
      switch (category) {
        case 'adulte':
          return 340;
        case 'feminin':
          return 215;
        case 'ado':
          return 230;
        case 'enfant':
          return 210;
        default:
          return null;
      }
    } else if (activity === 'cross-training') {
      switch (duration) {
        case 'cross-training-6mois':
          return 210;
        case 'prepa-3mois':
          return 150;
        case 'prepa-6mois':
          return 150;
        case 'crossfit-prepa-1an':
          return 480;
        default:
          return null;
      }
    }
    return null;
  };

  const getInPersonLink = () => {
    switch (category) {
      case 'adulte':
        return '/adulte-form.pdf';
      case 'feminin':
        return '/feminin-form.pdf';
      case 'enfant':
        return '/enfant-form.pdf';
      default:
        return null;
    }
  };

  return (
    <section className="max-w-7xl mx-auto pt-12 pb-24">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Carte 1 : Inscription en ligne */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col items-center text-center">
          <Heading level={4}>En ligne</Heading>
          <BodyText variant="paragraph" className="pt-2">
            Accédez à notre plateforme en ligne et complétez votre inscription
            rapidement via HelloAsso.
          </BodyText>
          <Button className="mt-6" label="Inscription en ligne" variant="primary" onClick={handleOnlineButtonClick}>
            <CursorArrowRaysIcon className="w-6 h-6 mr-2 text-neutral-200" />
          </Button>
        </div>

        {/* Carte 2 : Inscription en présentiel */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col items-center text-center">
          <Heading level={4}>En présentiel</Heading>
          <BodyText variant="paragraph" className="pt-2 text-balance">
            Téléchargez votre fiche d'inscription et apportez-la complétée avec
            votre règlement au club.
          </BodyText>
          <Button label="Inscription en présentiel" variant="primary" className="mt-6" onClick={handleInPersonButtonClick}>
            <ClipboardDocumentCheckIcon className="w-6 h-6 mr-2 text-neutral-200" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Online Form Section */}
        {showOnlineForm && (
        <div ref={onlineFormRef} className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-8">
          <Heading level={4}>Formulaire d'inscription en ligne</Heading>
          <form className="pt-4">
            {/* Form fields go here */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Choisissez votre activité
              </label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="activity"
                    value="sports"
                    className="form-radio"
                    onChange={() => handleActivityChange('sports')}
                  />
                  <span className="ml-2">Sports de combat</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="activity"
                    value="cross-training"
                    className="form-radio"
                    onChange={() => handleActivityChange('cross-training')}
                  />
                  <span className="ml-2">Cross training / Prépa physique</span>
                </label>
              </div>
            </div>

            {activity === 'sports' && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Choisissez votre catégorie
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="adulte"
                      className="form-radio"
                      onChange={() => setCategory('adulte')}
                    />
                    <span className="ml-2">Adulte</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="category"
                      value="feminin"
                      className="form-radio"
                      onChange={() => setCategory('feminin')}
                    />
                    <span className="ml-2">Féminin</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="category"
                      value="enfant"
                      className="form-radio"
                      onChange={() => setCategory('enfant')}
                    />
                    <span className="ml-2">Enfant</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="category"
                      value="ado"
                      className="form-radio"
                      onChange={() => setCategory('ado')}
                    />
                    <span className="ml-2">Ado</span>
                  </label>
                </div>
              </div>
            )}

            {activity === 'cross-training' && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Choisissez la durée
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="duration"
                      value="cross-training-6mois"
                      className="form-radio"
                      onChange={() => setDuration('cross-training-6mois')}
                    />
                    <span className="ml-2">Cross training 6 mois</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="duration"
                      value="prepa-3mois"
                      className="form-radio"
                      onChange={() => setDuration('prepa-3mois')}
                    />
                    <span className="ml-2">Prépa 3 mois</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="duration"
                      value="prepa-6mois"
                      className="form-radio"
                      onChange={() => setDuration('prepa-6mois')}
                    />
                    <span className="ml-2">Prépa 6 mois</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="duration"
                      value="crossfit-prepa-1an"
                      className="form-radio"
                      onChange={() => setDuration('crossfit-prepa-1an')}
                    />
                    <span className="ml-2">Crossfit et Prépa 1 an</span>
                  </label>
                </div>
              </div>
            )}

            {getLink() && (
              <div className="mt-4">
                <a href={getLink()} className="text-blue-500 underline">
                  Cliquez ici pour plus d'informations
                </a>
              </div>
            )}

            <Button label="Soumettre" variant="primary" className="mt-4" />
          </form>
        </div>
      )}

      {/* In-Person Form Section */}
      {showInPersonForm && (
        <div ref={inPersonFormRef} className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-8">
          <Heading level={4}>Formulaire d'inscription en présentiel</Heading>
          <div className="pt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Choisissez votre catégorie
              </label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="adulte"
                    className="form-radio"
                    onChange={() => setCategory('adulte')}
                  />
                  <span className="ml-2">Adulte</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="category"
                    value="feminin"
                    className="form-radio"
                    onChange={() => setCategory('feminin')}
                  />
                  <span className="ml-2">Féminin</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="category"
                    value="enfant"
                    className="form-radio"
                    onChange={() => setCategory('enfant')}
                  />
                  <span className="ml-2">Enfant</span>
                </label>
              </div>
            </div>

            {getInPersonLink() && (
              <div className="mt-4">
                <a href={getInPersonLink()} className="text-blue-500 underline">
                  Cliquez ici pour télécharger le formulaire
                </a>
              </div>
            )}

            <BodyText variant="paragraph" className="pt-2">
              Veuillez apporter le formulaire complété avec votre règlement au club.
            </BodyText>
          </div>
        </div>
      )}

      {/* Price Section */}
      {(() => {
        if ((activity === 'sports' && category) || (activity === 'cross-training' && duration)) {
          return (
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-8">
              <Heading level={4}>Tarifs</Heading>
              <BodyText variant="paragraph" className="pt-2">
                {activity === 'sports' && category && (
                  <span>
                    Le tarif pour {category === 'adulte' ? 'les adultes' : category === 'feminin' ? 'les féminins' : category === 'ado' ? 'les ados' : 'les enfants'} est de {getPrice()} €.
                  </span>
                )}
                {activity === 'cross-training' && duration && (
                  <span>
                    Le tarif pour {duration === 'cross-training-6mois' ? 'le cross training 6 mois' : duration === 'prepa-3mois' ? 'la prépa 3 mois' : duration === 'prepa-6mois' ? 'la prépa 6 mois' : 'le crossfit et prépa 1 an'} est de {getPrice()} €.
                  </span>
                )}
              </BodyText>
              <BodyText variant="paragraph" className="pt-2">
                Des réductions sont disponibles. Veuillez nous contacter pour plus d'informations.
              </BodyText>
            </div>
          );
        }
        return null;
      })()}
      </div>
    </section>
  );
};

export default RegisterForm;
