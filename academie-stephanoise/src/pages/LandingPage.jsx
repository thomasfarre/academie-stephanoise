import ActivityCard from "../components/ActivityCard";
import { Heading } from "../components/foundations/Heading";
import AboutSection from "../components/AboutSection";
import CoachCard from "../components/CoachCard";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
const LandingPage = () => {
  const handleSignUp = () => {
    console.log("S'inscrire au cours");
  };

  const handleViewCalendar = () => {
    console.log("Voir le calendrier");
  };

  const kravMagaIcon = (
    <img
      src="/assets/icons/krav_picto.png"
      alt="Krav Maga Icon"
      className="h-20 w-20"
    />
  );

  const boxeIcon = (
    <img
      src="/assets/icons/boxe_picto.png"
      alt="Boxe Icon"
      className="h-20 w-20"
    />
  );

  const mmaIcon = (
    <img
      src="/assets/icons/mma_picto.png"
      alt="MMA Icon"
      className="h-20 w-20"
    />
  );

  const tolparIcon = (
    <img
      src="/assets/icons/tolpar_picto.png"
      alt="Tolpar Icon"
      className="h-20 w-20"
    />
  );

  const lutaLivreIcon = (
    <img
      src="/assets/icons/lutalivre_picto.png"
      alt="Luta Livre Icon"
      className="h-20 w-20"
    />
  );

  const crosstrainingIcon = (
    <img
      src="/assets/icons/crosstraining_picto.png"
      alt="Cross Training Icon"
      className="h-20 w-20"
    />
  );

  return (
    <div>
      <div className="bg-neutral-50 pt-32 pb-24 lg:pb-48 -mt-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Heading level={3}>Nos activités</Heading>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActivityCard
              name="Boxe"
              bgColor="bg-orange-100"
              level="Intermédiaire"
              description="Cours de boxe dynamique et technique, conçu pour améliorer la forme physique générale, la coordination et la confiance en soi. Idéal pour ceux qui souhaitent apprendre les bases."
              duration="1 heure"
              benefits={[
                "Amélioration de la condition physique",
                "Renforcement musculaire",
                "Techniques de défense personnelle",
                "Développement de la coordination",
                "Augmentation de la confiance en soi",
              ]}
              schedule="Plusieurs fois par semaine"
              icon={boxeIcon}
              onSignUp={handleSignUp}
              onViewCalendar={handleViewCalendar}
            />
            <ActivityCard
              name="Krav Maga"
              level="Tous niveaux"
              bgColor="bg-blue-100"
              description="Apprenez des techniques de défense réalistes pour vous protéger dans des situations de la vie quotidienne. Le Krav Maga est basé sur des mouvements simples et efficaces, parfait pour tous les niveaux."
              duration="1 heure"
              schedule="Une fois par semaine"
              benefits={[
                "Augmentation de la confiance en soi",
                "Techniques de défense en situation réelle",
                "Amélioration de la condition physique",
                "Réaction rapide sous pression",
              ]}
              icon={kravMagaIcon}
              onSignUp={handleSignUp}
              onViewCalendar={handleViewCalendar}
            />

            <ActivityCard
              name="MMA (Mixed Martial Arts)"
              level="Intermédiaire à avancé"
              bgColor="bg-green-100"
              description="Combinez différentes disciplines comme la boxe, la lutte et le jiu-jitsu pour un entraînement complet. Parfait pour les pratiquants souhaitant améliorer leurs compétences globales en combat."
              duration="1 heure 30"
              schedule="Deux fois par semaine"
              benefits={[
                "Développement de compétences multiples",
                "Amélioration de la force et de l'endurance",
                "Réflexes et coordination",
                "Gestion de la résistance mentale",
              ]}
              icon={mmaIcon}
              onSignUp={handleSignUp}
              onViewCalendar={handleViewCalendar}
            />
            <ActivityCard
              name="Tolpar (Escrime lame courte)"
              level="Tous niveaux"
              bgColor="bg-purple-100"
              description="Maîtrisez l'art de l'escrime à lame courte, une discipline axée sur la précision, l’agilité et la technique. Idéal pour développer la concentration et les réflexes dans des situations de combat rapproché."
              duration="1 heure"
              schedule="Hebdomadaire"
              benefits={[
                "Développement de la précision et de l’agilité",
                "Amélioration de la concentration",
                "Compétences en combat rapproché",
                "Contrôle et discipline mentale",
              ]}
              icon={tolparIcon}
              onSignUp={handleSignUp}
              onViewCalendar={handleViewCalendar}
            />
            <ActivityCard
              name="Luta Livre"
              level="Tous niveaux"
              bgColor="bg-red-100"
              description="Découvrez l'art du grappling brésilien avec la Luta Livre, une discipline axée sur la lutte au sol et le contrôle du corps. Adapté à tous, ce cours améliore la force, la technique et la résilience mentale."
              duration="1 heure 30"
              schedule="Deux fois par semaine"
              benefits={[
                "Amélioration de la force et de la flexibilité",
                "Techniques de grappling avancées",
                "Contrôle et gestion de l’adversaire",
                "Développement de la résilience mentale",
              ]}
              icon={lutaLivreIcon}
              onSignUp={handleSignUp}
              onViewCalendar={handleViewCalendar}
            />
            <ActivityCard
              name="Cross Training / Préparation Physique"
              level="Tous niveaux"
              bgColor="bg-yellow-100"
              description="Améliorez votre condition physique avec des exercices fonctionnels, combinant cardio et renforcement musculaire. Idéal pour développer l’endurance, la force et l’agilité."
              duration="1 heure"
              schedule="Trois fois par semaine"
              benefits={[
                "Renforcement musculaire complet",
                "Amélioration de l'endurance",
                "Augmentation de l'agilité",
                "Conditionnement physique optimal",
              ]}
              icon={crosstrainingIcon}
              onSignUp={handleSignUp}
              onViewCalendar={handleViewCalendar}
            />
          </div>
        </div>
      </div>
      <div className="">
        <AboutSection />
      </div>
      <div className="bg-neutral-900 pt-28 pb-96">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Heading level={3} white="true">
            Nos coachs
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <CoachCard
              name="Luc Hernandez"
              disciplines="Luta Livre, MMA"
              bio="Passionné d'arts martiaux depuis sa plus tendre enfance, Luc Hernandez a consacré sa vie à l'entraînement, au perfectionnement et à la transmission de ses connaissances. Devenu un pédagogue hors pair, il possède un talent unique pour faire aimer le combat au sol et le MMA, en instillant à ses élèves confiance, technique et discipline. Doté d'une grande patience et d'une pédagogie naturelle, il sait motiver et guider chaque pratiquant, quel que soit son niveau, vers une progression constante. Son CV sportif parle pour lui :"
              qualifications={[
                "Ceinture noire de Luta Livre",
                "1er Dan de Luta Livre",
                "Ceinture noire 2ème Dan Judo",
                "Gant noire de Kick Boxing",
                "BMF2 FFKMDA",
                "BPJEPS sport de combat",
                "BF2 MMA",
                "Mitaine noire CNMMA",
                "Médaillé tournoi jujitsu combat",
                "Brevet d'état Judo-jujitsu",
              ]}
              photo="/assets/luc_hernandez.jpg"
            />
            <CoachCard
              name="Nori Berramdane"
              disciplines="Boxe Pied Poing"
              bio="L'équipe de l'Académie Stéphanoise est heureuse de compter Nori parmi le staff enseignant ! Initié très tôt à la pratique martiale, il obtiendra une ceinture marron en full contact et plusieurs titres de champion de la Loire. Amoureux de sports de combat, c'est tout naturellement que Nori s'oriente vers le MMA et la Luta Livre où il obtient le grade de ceinture jaune. Les petit plus ? Nori est un enseignant efficace qui n'a pas oublié d'être drôle."
              qualifications={[
                "Ceinture marron de Full Contact",
                "Titulaire d'un BMF2 FFKMDA",
                "Pratiquant de Luta Livre et de judo",
                "Gant noir de Kick-Boxing",
                                "Ceinture marron de Full Contact",
                "Titulaire d'un BMF2 FFKMDA",
                "Pratiquant de Luta Livre et de judo",
                "Gant noir de Kick-Boxing",
              ]}
              photo="/assets/nori_berramdane.jpg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-28 px-6 lg:px-8 -mt-52">
        <CallToActionSection />
      </div>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Heading level={3} className="">
            Notre instagram
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <img
              src="/assets/academie_stephanoise_1.jpg"
              alt="Actualité 1"
              className="w-full h-96 object-cover rounded-md shadow-md saturate-0"
            />
            <img
              src="/assets/academie_stephanoise_2.jpg"
              alt="Actualité 2"
              className="w-full h-96 object-cover rounded-md shadow-md saturate-0"
            />
            <img
              src="/assets/academie_stephanoise_3.jpg"
              alt="Actualité 3"
              className="w-full h-96 object-cover rounded-md shadow-md saturate-0"
            />
          </div>
        </div>
      </div>
      <div className="-mt-64">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
