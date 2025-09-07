import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Calendar, MapPin, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MyAccount = () => {
  const { t } = useLanguage();
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "Prague & Budapest",
      startDate: "2025-04-15",
      price: 459,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      status: "confirmed",
      canCancel: true
    },
    {
      id: 2,
      name: "Maldives Paradise",
      startDate: "2025-06-20",
      price: 1299,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      status: "confirmed",
      canCancel: true
    }
  ]);

  const [visitedDestinations, setVisitedDestinations] = useState([
    {
      id: 1,
      name: "Rome & Florence",
      completedDate: "2024-09-15",
      price: 629,
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      userRating: 0
    },
    {
      id: 2,
      name: "Berlin Adventure",
      completedDate: "2024-11-03",
      price: 389,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      userRating: 5
    }
  ]);

  const cancelReservation = (id: number) => {
    setReservations(reservations.filter(reservation => reservation.id !== id));
  };

  const rateDestination = (id: number, rating: number) => {
    setVisitedDestinations(
      visitedDestinations.map(destination =>
        destination.id === id ? { ...destination, userRating: rating } : destination
      )
    );
  };

  const canCancelReservation = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffDays = Math.ceil((start.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays > 5;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('account.title')}</h1>
            <p className="text-lg text-muted-foreground">{t('account.subtitle')}</p>
          </div>

          <Tabs defaultValue="reservations" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reservations">{t('account.reservations')}</TabsTrigger>
              <TabsTrigger value="visited">{t('account.visited')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reservations" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{t('account.reservationsTitle')}</h2>
                <p className="text-muted-foreground">
                  {t('account.reservationsDesc')}
                </p>
              </div>
              
              {reservations.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <p className="text-lg text-muted-foreground mb-4">{t('account.noReservations')}</p>
                    <Button>{t('account.browse')}</Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {reservations.map((reservation) => (
                    <Card key={reservation.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-48 h-48 md:h-auto">
                          <img 
                            src={reservation.image} 
                            alt={reservation.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold">{reservation.name}</h3>
                              <div className="flex items-center text-muted-foreground mt-2">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{t('account.departure')}: {new Date(reservation.startDate).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">€{reservation.price}</div>
                              <Badge variant={reservation.status === 'confirmed' ? 'default' : 'secondary'}>
                                {t('account.confirmed')}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex justify-end gap-2">
                            {canCancelReservation(reservation.startDate) ? (
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => cancelReservation(reservation.id)}
                              >
                                <X className="w-4 h-4 mr-2" />
                                {t('account.cancel')}
                              </Button>
                            ) : (
                              <Badge variant="outline">
                                {t('account.cannotCancel')}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="visited" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{t('account.visitedTitle')}</h2>
                <p className="text-muted-foreground">
                  {t('account.visitedDesc')}
                </p>
              </div>
              
              {visitedDestinations.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <p className="text-lg text-muted-foreground mb-4">{t('account.noVisited')}</p>
                    <Button>{t('account.startJourney')}</Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {visitedDestinations.map((destination) => (
                    <Card key={destination.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-48 h-48 md:h-auto">
                          <img 
                            src={destination.image} 
                            alt={destination.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold">{destination.name}</h3>
                              <div className="flex items-center text-muted-foreground mt-2">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{t('account.completed')}: {new Date(destination.completedDate).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold">€{destination.price}</div>
                              <Badge variant="secondary">{t('account.completed')}</Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{t('account.rateTrip')}:</span>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    onClick={() => rateDestination(destination.id, star)}
                                    className="transition-colors hover:scale-110"
                                  >
                                    <Star 
                                      className={`w-5 h-5 ${
                                        star <= destination.userRating 
                                          ? 'fill-yellow-400 text-yellow-400' 
                                          : 'text-gray-300 hover:text-yellow-400'
                                      }`} 
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                            
                            {destination.userRating > 0 && (
                              <Badge variant="outline">
                                {t('account.rated')} {destination.userRating}/5
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyAccount;