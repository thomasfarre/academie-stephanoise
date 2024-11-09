import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
const LandingPage = () => {
  const handleSignUp = () => {
    console.log("S'inscrire au cours");
  };

  const handleViewCalendar = () => {
    console.log('Voir le calendrier');
  };

  const boxeIcon = (
    <img src="/assets/icons/boxe_picto.png" alt="Boxe Icon" className="h-20 w-20" />
  );

  return (
    <div>
      <Header/>
      <div className='max-w-7xl mx-auto pb-40'>
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
      </div>
    </div>
  );
};

export default LandingPage;
