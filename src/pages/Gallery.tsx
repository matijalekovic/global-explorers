import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const Gallery = () => {
  const videoGallery = [
    {
      id: 1,
      title: "European Cities Tour",
      thumbnail: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Summer Beach Paradise",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2:30"
    },
    {
      id: 3,
      title: "Winter Ski Adventures",
      thumbnail: "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4:12"
    }
  ];

  const imageGallery = [
    {
      category: "Europe",
      images: [
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c11a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      category: "Summer 2025",
      images: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      category: "Winter 2025",
      images: [
        "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1548777123-4b4d6b6c0d62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Video Gallery Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Gallery</h1>
              <p className="text-lg text-muted-foreground">Experience our destinations through videos and photos</p>
            </div>
            
            <h2 className="text-2xl font-bold mb-8">Video Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {videoGallery.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-travel transition-shadow duration-300 group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute bottom-4 right-4 bg-black/70 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{video.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Image Gallery Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Photo Gallery</h2>
            {imageGallery.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Badge variant="outline">{category.category}</Badge>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.images.map((image, imageIndex) => (
                    <Card key={imageIndex} className="overflow-hidden hover:shadow-card transition-shadow duration-300 group cursor-pointer">
                      <img 
                        src={image} 
                        alt={`${category.category} destination ${imageIndex + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;