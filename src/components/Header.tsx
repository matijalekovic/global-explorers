import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu, Plane, Globe } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [language, setLanguage] = useState("en");

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sr" : "en");
  };

  const getText = (en: string, sr: string) => language === "en" ? en : sr;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center">
            <Plane className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            {getText("TravelAgency", "TurističkaAgencija")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {getText("Home", "Početna")}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  {getText("Arrangements", "Aranžmani")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link 
                      to="/arrangements/europe" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {getText("Europe", "Evropa")}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {getText("Discover historic cities and culture", "Otkrijte istorijske gradove i kulturu")}
                      </p>
                    </Link>
                    <Link 
                      to="/arrangements/summer" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {getText("Summer 2025", "Leto 2025")}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {getText("Beach resorts and sunny destinations", "Morska letovališta i sunčane destinacije")}
                      </p>
                    </Link>
                    <Link 
                      to="/arrangements/winter" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {getText("Winter 2025", "Zima 2025")}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {getText("Ski resorts and winter adventures", "Skijališta i zimske avanture")}
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/gallery" 
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/gallery") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {getText("Gallery", "Galerija")}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/my-account" 
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/my-account") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {getText("My Account", "Moj Nalog")}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/about") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {getText("About Us", "O Nama")}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link 
                  to="/" 
                  className={`px-4 py-2 text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {getText("Home", "Početna")}
                </Link>
                <Link 
                  to="/arrangements/europe" 
                  className="px-4 py-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  {getText("Europe", "Evropa")}
                </Link>
                <Link 
                  to="/arrangements/summer" 
                  className="px-4 py-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  {getText("Summer 2025", "Leto 2025")}
                </Link>
                <Link 
                  to="/arrangements/winter" 
                  className="px-4 py-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  {getText("Winter 2025", "Zima 2025")}
                </Link>
                <Link 
                  to="/gallery" 
                  className={`px-4 py-2 text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/gallery") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {getText("Gallery", "Galerija")}
                </Link>
                <Link 
                  to="/my-account" 
                  className={`px-4 py-2 text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/my-account") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {getText("My Account", "Moj Nalog")}
                </Link>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/about") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {getText("About Us", "O Nama")}
                </Link>
                
                <Button 
                  variant="outline" 
                  onClick={toggleLanguage}
                  className="mx-4 mt-4 flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  {getText("Switch to Serbian", "Prebaci na engleski")}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;