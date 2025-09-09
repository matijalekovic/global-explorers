import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Calendar, Users, Search } from "lucide-react";
import summerImage from "@/assets/summer-resort.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReservation } from "@/contexts/ReservationContext";

const ArrangementsSummer = () => {
  const { t } = useLanguage();
  const { addReservation, isReserved } = useReservation();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const arrangements = [
    {
      id: 1,
      name: "Maldives Paradise",
      price: 1299,
      rating: 4.9,
      reviews: 189,
      image: summerImage,
      duration: "7 days",
      groupSize: "8-12 people",
      description: "Ultimate tropical paradise with crystal clear waters, overwater bungalows, and world-class diving.",
      highlights: ["Overwater villa", "Snorkeling", "Spa treatments", "Sunset cruise"]
    },
    {
      id: 2,
      name: "Greek Islands Hopping",
      price: 899,
      rating: 4.7,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "8 days",
      groupSize: "12-18 people",
      description: "Explore the beautiful Greek islands including Santorini, Mykonos, and Crete.",
      highlights: ["Island hopping", "Ancient ruins", "Beach time", "Greek cuisine"]
    },
    {
      id: 3,
      name: "Croatia Coast",
      price: 759,
      rating: 4.6,
      reviews: 143,
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6 days",
      groupSize: "10-16 people",
      description: "Discover the stunning Dalmatian coast with its pristine beaches and historic cities.",
      highlights: ["Plitvice Lakes", "Dubrovnik", "Split", "Boat tours"]
    }
  ];

  const filteredAndSortedArrangements = arrangements
    .filter(arrangement => 
      arrangement.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "price") {
        return a.price - b.price;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('arrangements.summer.title')}</h1>
            <p className="text-lg text-muted-foreground">{t('arrangements.summer.subtitle')}</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={t('arrangements.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder={t('common.sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">{t('arrangements.sortByName')}</SelectItem>
                <SelectItem value="price">{t('arrangements.sortByPrice')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Arrangements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedArrangements.map((arrangement) => (
              <Card key={arrangement.id} className="overflow-hidden hover:shadow-travel transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={arrangement.image} 
                    alt={arrangement.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      €{arrangement.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{arrangement.name}</CardTitle>
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{arrangement.rating}</span>
                      <span className="text-muted-foreground ml-1">({arrangement.reviews})</span>
                    </div>
                  </div>
                  <CardDescription>
                    {arrangement.description}
                  </CardDescription>
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
                  
                  <div className="pt-4 space-y-2">
                    <Button 
                      className="w-full bg-gradient-ocean hover:bg-primary-dark"
                      onClick={() => addReservation({
                        id: arrangement.id,
                        name: arrangement.name,
                        price: arrangement.price,
                        image: arrangement.image,
                        category: 'summer'
                      })}
                      disabled={isReserved(arrangement.id)}
                    >
                      {isReserved(arrangement.id) ? t('arrangements.reserved') : t('arrangements.reserveNow')}
                    </Button>
                    <Button variant="outline" className="w-full">
                      {t('arrangements.viewDetails')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAndSortedArrangements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">{t('arrangements.noResults')}</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArrangementsSummer;