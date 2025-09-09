import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Calendar, Users, Search } from "lucide-react";
import winterImage from "@/assets/winter-ski.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReservation } from "@/contexts/ReservationContext";

const ArrangementsWinter = () => {
  const { t } = useLanguage();
  const { addReservation, isReserved } = useReservation();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const arrangements = [
    {
      id: 1,
      name: "Alpine Adventure",
      price: 789,
      rating: 4.7,
      reviews: 156,
      image: winterImage,
      duration: "6 days",
      groupSize: "10-14 people",
      description: "Experience world-class skiing in the heart of the Alps with stunning mountain views.",
      highlights: ["Ski lessons", "Mountain views", "Cozy chalets", "Après-ski"]
    },
    {
      id: 2,
      name: "Lapland Magic",
      price: 1199,
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5 days",
      groupSize: "8-12 people",
      description: "Meet Santa Claus, witness the Northern Lights, and enjoy husky sledding in Finnish Lapland.",
      highlights: ["Northern Lights", "Husky sledding", "Santa's village", "Ice hotel"]
    },
    {
      id: 3,
      name: "Austrian Ski Week",
      price: 659,
      rating: 4.5,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1548777123-4b4d6b6c0d62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "7 days",
      groupSize: "12-18 people",
      description: "Perfect ski week in Austria's famous resorts with excellent slopes and mountain cuisine.",
      highlights: ["All-inclusive", "Ski pass", "Mountain dining", "Group lessons"]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('arrangements.winter.title')}</h1>
            <p className="text-lg text-muted-foreground">{t('arrangements.winter.subtitle')}</p>
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
                        category: 'winter'
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

export default ArrangementsWinter;