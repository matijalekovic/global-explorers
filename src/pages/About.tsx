import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, Heart, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const awards = [
    {
      year: "2024",
      title: "Best Travel Agency",
      organization: "European Travel Awards",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Customer Choice Award",
      organization: "TripAdvisor",
      icon: <Heart className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Excellence in Service",
      organization: "World Travel Organization",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Travelers" },
    { number: "150+", label: "Destinations" },
    { number: "15", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Our team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {t('about.heroTitle')}
                  </h2>
                  <p className="text-xl">{t('about.heroSubtitle')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('about.whyChoose')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('about.whyChooseDesc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-travel transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Expert Team</CardTitle>
                  <CardDescription>
                    Our experienced travel consultants have visited every destination we offer, 
                    providing you with insider knowledge and personal recommendations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-travel transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Global Network</CardTitle>
                  <CardDescription>
                    With partners worldwide, we ensure seamless travel experiences 
                    and 24/7 support wherever your adventure takes you.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-travel transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Personalized Service</CardTitle>
                  <CardDescription>
                    Every trip is tailored to your preferences and budget. 
                    We listen to your dreams and make them reality.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Statistics */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey in Numbers</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-lg text-muted-foreground">
                Honored by industry leaders for our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="hover:shadow-travel transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {award.icon}
                    </div>
                    <Badge variant="outline" className="mb-2">{award.year}</Badge>
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                    <CardDescription>{award.organization}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Location & Contact */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.8936170596726!2d20.455465!3d44.787197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3bf38b2f1%3A0x1c4d72da9dc70b2a!2sFaculty%20of%20Electrical%20Engineering%2C%20University%20of%20Belgrade!5e0!3m2!1sen!2srs!4v1234567890"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <div className="font-semibold">Faculty of Electrical Engineering</div>
                        <div className="text-sm text-muted-foreground">University of Belgrade, Serbia</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-3" />
                      <span>+381 11 123 4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-3" />
                      <span>info@travelagency.rs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-6">
                    <h3 className="font-semibold mb-2">Emergency Contact</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      24/7 support for travelers
                    </p>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-primary mr-2" />
                      <span className="font-medium">+381 11 911 0000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;