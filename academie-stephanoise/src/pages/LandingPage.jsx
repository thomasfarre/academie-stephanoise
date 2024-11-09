import Header from "../components/Header";
import ActivityCard from "../components/ActivityCard";
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

  const selfDefenseIcon = (
    <img
      src="/assets/icons/selfdef_picto.png"
      alt="Self Defense Icon"
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
      <Header />
      <div className="max-w-7xl mx-auto pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ActivityCard
            name="Boxe"
            level="Intermédiaire"
            description="Cours de boxe dynamique et technique, conçu pour améliorer la forme physique générale, la coordination et la confiance en soi. Idéal pour ceux qui souhaitent apprendre les bases tout en profitant d'un entraînement intensif et stimulant."
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
            description="Combinez différentes disciplines comme la boxe, la lutte et le jiu-jitsu pour un entraînement complet. Parfait pour les pratiquants souhaitant améliorer leurs compétences globales en combat."
            duration="1 heure 30"
            frequency="Deux fois par semaine"
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
            description="Maîtrisez l'art de l'escrime à lame courte, une discipline axée sur la précision, l’agilité et la technique. Idéal pour développer la concentration et les réflexes dans des situations de combat rapproché."
            duration="1 heure"
            frequency="Hebdomadaire"
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
            description="Découvrez l'art du grappling brésilien avec la Luta Livre, une discipline axée sur la lutte au sol et le contrôle du corps. Adapté à tous, ce cours améliore la force, la technique et la résilience mentale."
            duration="1 heure 30"
            frequency="Deux fois par semaine"
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
            description="Améliorez votre condition physique avec des exercices fonctionnels, combinant cardio et renforcement musculaire. Idéal pour développer l’endurance, la force et l’agilité."
            duration="1 heure"
            frequency="Trois fois par semaine"
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
  );
};

export default LandingPage;
