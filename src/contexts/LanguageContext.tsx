import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'sr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.home': 'Home',
    'header.arrangements': 'Arrangements',
    'header.gallery': 'Gallery',
    'header.myAccount': 'My Account',
    'header.about': 'About Us',
    'header.europe': 'Europe',
    'header.summer': 'Summer 2025',
    'header.winter': 'Winter 2025',
    'header.europeDesc': 'Discover historic cities and culture',
    'header.summerDesc': 'Beach resorts and sunny destinations',
    'header.winterDesc': 'Ski resorts and winter adventures',
    'header.switchLanguage': 'Switch to Serbian',
    'header.agencyName': 'TravelAgency',

    // Home Page
    'home.hero.title': 'Discover Your Next',
    'home.hero.subtitle': 'Adventure',
    'home.hero.description': 'Explore breathtaking destinations, create unforgettable memories, and experience the world like never before.',
    'home.hero.explore': 'Explore Destinations',
    'home.hero.gallery': 'View Gallery',
    'home.offers.title': 'Current Offers',
    'home.offers.subtitle': 'Don\'t miss these amazing travel deals',
    'home.topRated.title': 'Top Rated Destinations',
    'home.topRated.subtitle': 'Experience our most loved travel packages',
    'home.viewAll': 'View All Arrangements',
    'home.bookNow': 'Book Now',

    // My Account
    'account.title': 'My Account',
    'account.subtitle': 'Manage your reservations and travel history',
    'account.reservations': 'Current Reservations',
    'account.visited': 'Visited Destinations',
    'account.reservationsTitle': 'Your Reservations',
    'account.reservationsDesc': 'You can cancel reservations up to 5 days before departure',
    'account.visitedTitle': 'Visited Destinations',
    'account.visitedDesc': 'Rate your experiences to help other travelers',
    'account.noReservations': 'No current reservations',
    'account.noVisited': 'No visited destinations yet',
    'account.browse': 'Browse Arrangements',
    'account.startJourney': 'Start Your Journey',
    'account.departure': 'Departure',
    'account.completed': 'Completed',
    'account.cancel': 'Cancel Reservation',
    'account.cannotCancel': 'Cannot cancel (less than 5 days)',
    'account.confirmed': 'confirmed',
    'account.rateTrip': 'Rate this trip',
    'account.rated': 'Rated',

    // About
    'about.title': 'About Us',
    'about.subtitle': 'Creating unforgettable travel experiences for over 15 years',
    'about.heroTitle': 'Your Journey Starts Here',
    'about.heroSubtitle': 'Passionate about creating magical travel experiences',
    'about.whyChoose': 'Why Choose Our Agency?',
    'about.whyChooseDesc': 'What makes us different from other travel agencies',
    'about.expertTeam': 'Expert Team',
    'about.expertDesc': 'Our experienced travel consultants have visited every destination we offer, providing you with insider knowledge and personal recommendations.',
    'about.globalNetwork': 'Global Network',
    'about.globalDesc': 'With partners worldwide, we ensure seamless travel experiences and 24/7 support wherever your adventure takes you.',
    'about.personalizedService': 'Personalized Service',
    'about.personalizedDesc': 'Every trip is tailored to your preferences and budget. We listen to your dreams and make them reality.',
    'about.journeyNumbers': 'Our Journey in Numbers',
    'about.awards': 'Awards & Recognition',
    'about.awardsDesc': 'Honored by industry leaders for our commitment to excellence',
    'about.visitOffice': 'Visit Our Office',
    'about.officeHours': 'Office Hours',
    'about.emergency': 'Emergency Contact',
    'about.emergencyDesc': '24/7 support for travelers',

    // Gallery
    'gallery.title': 'Travel Gallery',
    'gallery.subtitle': 'Experience our destinations through videos and photos',
    'gallery.videoGallery': 'Video Gallery',
    'gallery.photoGallery': 'Photo Gallery',

    // Arrangements
    'arrangements.europe.title': 'European Adventures',
    'arrangements.europe.subtitle': 'Discover the rich history and culture of Europe',
    'arrangements.summer.title': 'Summer 2025',
    'arrangements.summer.subtitle': 'Escape to paradise with our summer destinations',
    'arrangements.winter.title': 'Winter 2025',
    'arrangements.winter.subtitle': 'Embrace the magic of winter with our snow destinations',
    'arrangements.searchPlaceholder': 'Search arrangements...',
    'arrangements.sortByName': 'Sort by Name',
    'arrangements.sortByPrice': 'Sort by Price',
    'arrangements.reserveNow': 'Reserve Now',
    'arrangements.reserved': 'Reserved',
    'arrangements.viewDetails': 'View Details',
    'arrangements.noResults': 'No arrangements found matching your criteria.',

    // Common
    'common.price': 'Price',
    'common.rating': 'Rating',
    'common.duration': 'Duration',
    'common.groupSize': 'Group Size',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sortBy': 'Sort by',
    'common.name': 'Name',
    'common.lowToHigh': 'Price: Low to High',
    'common.highToLow': 'Price: High to Low',
    'common.days': 'days',
    'common.people': 'people',
  },
  sr: {
    // Header
    'header.home': 'Početna',
    'header.arrangements': 'Aranžmani',
    'header.gallery': 'Galerija',
    'header.myAccount': 'Moj Nalog',
    'header.about': 'O Nama',
    'header.europe': 'Evropa',
    'header.summer': 'Leto 2025',
    'header.winter': 'Zima 2025',
    'header.europeDesc': 'Otkrijte istorijske gradove i kulturu',
    'header.summerDesc': 'Morska letovališta i sunčane destinacije',
    'header.winterDesc': 'Skijališta i zimske avanture',
    'header.switchLanguage': 'Prebaci na engleski',
    'header.agencyName': 'TurističkaAgencija',

    // Home Page
    'home.hero.title': 'Otkrijte Vašu Sledeću',
    'home.hero.subtitle': 'Avanturu',
    'home.hero.description': 'Istražite zadivljujuće destinacije, stvorite nezaboravne uspomene i doživite svet kao nikad ranije.',
    'home.hero.explore': 'Istražite Destinacije',
    'home.hero.gallery': 'Pogledajte Galeriju',
    'home.offers.title': 'Trenutne Ponude',
    'home.offers.subtitle': 'Ne propustite ove neverovatne turističke ponude',
    'home.topRated.title': 'Najcenjenije Destinacije',
    'home.topRated.subtitle': 'Doživite naše omiljene turističke pakete',
    'home.viewAll': 'Pogledajte Sve Aranžmane',
    'home.bookNow': 'Rezervišite Sada',

    // My Account
    'account.title': 'Moj Nalog',
    'account.subtitle': 'Upravljajte svojim rezervacijama i istorijom putovanja',
    'account.reservations': 'Trenutne Rezervacije',
    'account.visited': 'Posećene Destinacije',
    'account.reservationsTitle': 'Vaše Rezervacije',
    'account.reservationsDesc': 'Možete otkazati rezervacije do 5 dana pre polaska',
    'account.visitedTitle': 'Posećene Destinacije',
    'account.visitedDesc': 'Ocenite vaša iskustva da pomognete drugim putnicima',
    'account.noReservations': 'Nema trenutnih rezervacija',
    'account.noVisited': 'Još nema posećenih destinacija',
    'account.browse': 'Pretražite Aranžmane',
    'account.startJourney': 'Počnite Vaše Putovanje',
    'account.departure': 'Polazak',
    'account.completed': 'Završeno',
    'account.cancel': 'Otkaži Rezervaciju',
    'account.cannotCancel': 'Ne može se otkazati (manje od 5 dana)',
    'account.confirmed': 'potvrđeno',
    'account.rateTrip': 'Ocenite putovanje',
    'account.rated': 'Ocenjeno',

    // About
    'about.title': 'O Nama',
    'about.subtitle': 'Stvaramo nezaboravna turistička iskustva već preko 15 godina',
    'about.heroTitle': 'Vaše Putovanje Počinje Ovde',
    'about.heroSubtitle': 'Strastveni u stvaranju čarobnih turističkih iskustava',
    'about.whyChoose': 'Zašto Izabrati Našu Agenciju?',
    'about.whyChooseDesc': 'Šta nas čini drugačijima od drugih turističkih agencija',
    'about.expertTeam': 'Stručni Tim',
    'about.expertDesc': 'Naši iskusni turistički konsultanti su posetili svaku destinaciju koju nudimo, pružajući vam unutrašnje znanje i lične preporuke.',
    'about.globalNetwork': 'Globalna Mreža',
    'about.globalDesc': 'Sa partnerima širom sveta, osiguravamo besprekorna turistička iskustva i podršku 24/7 gde god vas avantura odvede.',
    'about.personalizedService': 'Personalizovana Usluga',
    'about.personalizedDesc': 'Svako putovanje je prilagođeno vašim preferencijama i budžetu. Slušamo vaše snove i činimo ih stvarnošću.',
    'about.journeyNumbers': 'Naše Putovanje u Brojevima',
    'about.awards': 'Nagrade i Priznanja',
    'about.awardsDesc': 'Nagrađeni od strane lidera industrije za našu posvećenost izvrsnosti',
    'about.visitOffice': 'Posetite Naš Ured',
    'about.officeHours': 'Radno Vreme',
    'about.emergency': 'Hitni Kontakt',
    'about.emergencyDesc': 'Podrška 24/7 za putnike',

    // Gallery
    'gallery.title': 'Turistička Galerija',
    'gallery.subtitle': 'Doživite naše destinacije kroz video i foto galerije',
    'gallery.videoGallery': 'Video Galerija',
    'gallery.photoGallery': 'Foto Galerija',

    // Arrangements
    'arrangements.europe.title': 'Evropske Avanture',
    'arrangements.europe.subtitle': 'Otkrijte bogatu istoriju i kulturu Evrope',
    'arrangements.summer.title': 'Leto 2025',
    'arrangements.summer.subtitle': 'Pobegnite u raj sa našim letnjim destinacijama',
    'arrangements.winter.title': 'Zima 2025',
    'arrangements.winter.subtitle': 'Uživajte u čaroliji zime sa našim zimskim destinacijama',
    'arrangements.searchPlaceholder': 'Pretražite aranžmane...',
    'arrangements.sortByName': 'Sortiraj po Nazivu',
    'arrangements.sortByPrice': 'Sortiraj po Ceni',
    'arrangements.reserveNow': 'Rezerviši Sada',
    'arrangements.reserved': 'Rezervisano',
    'arrangements.viewDetails': 'Pogledaj Detalje',
    'arrangements.noResults': 'Nisu pronađeni aranžmani koji odgovaraju vašim kriterijumima.',

    // Common
    'common.price': 'Cena',
    'common.rating': 'Ocena',
    'common.duration': 'Trajanje',
    'common.groupSize': 'Veličina Grupe',
    'common.search': 'Pretraži',
    'common.filter': 'Filter',
    'common.sortBy': 'Sortiraj po',
    'common.name': 'Naziv',
    'common.lowToHigh': 'Cena: Od najniže',
    'common.highToLow': 'Cena: Od najviše',
    'common.days': 'dana',
    'common.people': 'osoba',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Initialize from localStorage or default to 'en'
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'sr') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  useEffect(() => {
    // Save to localStorage whenever language changes
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};