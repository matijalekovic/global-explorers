import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sr" : "en");
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center">
            <Plane className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
            {t('header.agencyName')}
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
                  {t('header.home')}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  {t('header.arrangements')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link 
                      to="/arrangements/europe" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {t('header.europe')}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {t('header.europeDesc')}
                      </p>
                    </Link>
                    <Link 
                      to="/arrangements/summer" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {t('header.summer')}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {t('header.summerDesc')}
                      </p>
                    </Link>
                    <Link 
                      to="/arrangements/winter" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {t('header.winter')}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {t('header.winterDesc')}
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
                  {t('header.gallery')}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/my-account" 
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/my-account") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {t('header.myAccount')}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/about") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {t('header.about')}
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
                  {t('header.home')}
                </Link>
                <Link 
                  to="/arrangements/europe" 
                  className="px-4 py-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  {t('header.europe')}
                </Link>
                <Link 
                  to="/arrangements/summer" 
                  className="px-4 py-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  {t('header.summer')}
                </Link>
                <Link 
                  to="/arrangements/winter" 
                  className="px-4 py-2 text-lg font-medium transition-colors hover:text-primary"
                >
                  {t('header.winter')}
                </Link>
                <Link 
                  to="/gallery" 
                  className={`px-4 py-2 text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/gallery") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {t('header.gallery')}
                </Link>
                <Link 
                  to="/my-account" 
                  className={`px-4 py-2 text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/my-account") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {t('header.myAccount')}
                </Link>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 text-lg font-medium transition-colors hover:text-primary ${
                    isActive("/about") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {t('header.about')}
                </Link>
                
                <Button 
                  variant="outline" 
                  onClick={toggleLanguage}
                  className="mx-4 mt-4 flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  {t('header.switchLanguage')}
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