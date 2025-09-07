import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Calendar, Users, Search } from "lucide-react";
import europeImage from "@/assets/europe-city.jpg";

const ArrangementsEurope = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const arrangements = [
    {
      id: 1,
      name: "Prague & Budapest",
      price: 459,
      rating: 4.8,
      reviews: 234,
      image: europeImage,
      duration: "5 days",
      groupSize: "12-16 people",
      description: "Explore the magnificent architecture and rich history of Prague and Budapest, two jewels of Central Europe.",
      highlights: ["Historic castles", "Cultural tours", "Local cuisine", "Guided walks"]
    },
    {
      id: 2,
      name: "Berlin Adventure",
      price: 389,
      rating: 4.6,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4 days",
      groupSize: "10-14 people",
      description: "Discover the vibrant culture and fascinating history of Germany's capital city.",
      highlights: ["Berlin Wall", "Museum Island", "Brandenburg Gate", "Street art tours"]
    },
    {
      id: 3,
      name: "Rome & Florence",
      price: 629,
      rating: 4.9,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6 days",
      groupSize: "8-12 people",
      description: "Experience the art, history, and cuisine of Italy's most iconic cities.",
      highlights: ["Colosseum", "Vatican City", "Uffizi Gallery", "Tuscan cuisine"]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">European Adventures</h1>
            <p className="text-lg text-muted-foreground">Discover the rich history and culture of Europe</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search arrangements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="price">Sort by Price</SelectItem>
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
                    <Button className="w-full bg-gradient-ocean hover:bg-primary-dark">
                      Reserve Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAndSortedArrangements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No arrangements found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArrangementsEurope;