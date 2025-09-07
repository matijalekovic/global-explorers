import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">TravelAgency</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/arrangements/europe" className="block text-muted-foreground hover:text-primary transition-colors">
                Europe
              </Link>
              <Link to="/arrangements/summer" className="block text-muted-foreground hover:text-primary transition-colors">
                Summer 2025
              </Link>
              <Link to="/arrangements/winter" className="block text-muted-foreground hover:text-primary transition-colors">
                Winter 2025
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/my-account" className="block text-muted-foreground hover:text-primary transition-colors">
                My Account
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Belgrade, Serbia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+381 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@travelagency.rs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            Copyright 2025, Department of Software Engineering, Faculty of Electrical Engineering, University of Belgrade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;