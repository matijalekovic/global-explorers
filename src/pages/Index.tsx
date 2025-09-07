import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, MapPin, Calendar, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-beach.jpg";
import europeImage from "@/assets/europe-city.jpg";
import summerImage from "@/assets/summer-resort.jpg";
import winterImage from "@/assets/winter-ski.jpg";

const Index = () => {
  const { t } = useLanguage();
  const featuredArrangements = [
    {
      id: 1,
      title: "Prague & Budapest",
      category: "Europe",
      price: "€459",
      rating: 4.8,
      reviews: 234,
      image: europeImage,
      duration: "5 days",
      groupSize: "12-16 people",
      highlights: ["Historic architecture", "Cultural tours", "Local cuisine"]
    },
    {
      id: 2,
      title: "Maldives Paradise",
      category: "Summer 2025",
      price: "€1,299",
      rating: 4.9,
      reviews: 189,
      image: summerImage,
      duration: "7 days",
      groupSize: "8-12 people",
      highlights: ["Luxury resort", "Snorkeling", "Spa treatments"]
    },
    {
      id: 3,
      title: "Alpine Adventure",
      category: "Winter 2025",
      price: "€789",
      rating: 4.7,
      reviews: 156,
      image: winterImage,
      duration: "6 days",
      groupSize: "10-14 people",
      highlights: ["Skiing lessons", "Mountain views", "Cozy chalets"]
    }
  ];

  const currentOffers = [
    {
      title: "Early Bird Summer 2025",
      description: "Book your summer vacation now and save up to 25%",
      validity: "Valid until March 31st",
      discount: "25% OFF"
    },
    {
      title: "Last Minute Europe Tours",
      description: "Discover amazing European cities with special prices",
      validity: "Departing this month",
      discount: "€200 OFF"
    },
    {
      title: "Winter Sports Special",
      description: "Perfect ski packages for winter enthusiasts",
      validity: "February departures",
      discount: "Free equipment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('home.hero.title')}
            <span className="block text-transparent bg-gradient-sunset bg-clip-text">
              {t('home.hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('home.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3">
              {t('home.hero.explore')}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              {t('home.hero.gallery')}
            </Button>
          </div>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.offers.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('home.offers.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentOffers.map((offer, index) => (
              <Card key={index} className="hover:shadow-travel transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <Badge variant="secondary" className="bg-gradient-sunset text-white">
                      {offer.discount}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {offer.validity}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Arrangements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.topRated.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('home.topRated.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArrangements.map((arrangement) => (
              <Card key={arrangement.id} className="overflow-hidden hover:shadow-travel transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={arrangement.image} 
                    alt={arrangement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      {arrangement.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {arrangement.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{arrangement.title}</CardTitle>
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{arrangement.rating}</span>
                      <span className="text-muted-foreground ml-1">({arrangement.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {arrangement.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {arrangement.groupSize}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {arrangement.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-ocean hover:bg-primary-dark">
                      {t('home.bookNow')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/arrangements/europe">
              <Button variant="outline" size="lg" className="px-8">
                {t('home.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
