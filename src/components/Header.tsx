
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-esg-green" />
          <Link to="/" className="text-xl font-bold">
            ESG Horizon
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm font-medium hover:text-esg-green transition-colors">
            Dashboard
          </Link>
          <Link to="/regulations" className="text-sm font-medium hover:text-esg-green transition-colors">
            Regulations
          </Link>
          <Link to="/jurisdictions" className="text-sm font-medium hover:text-esg-green transition-colors">
            Jurisdictions
          </Link>
          <Link to="/reporting" className="text-sm font-medium hover:text-esg-green transition-colors">
            Reporting
          </Link>
          <Link to="/risk-analysis" className="text-sm font-medium hover:text-esg-green transition-colors">
            Risk Analysis
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Log In
          </Button>
          <Button className="bg-esg-green hover:bg-esg-green/90">
            Start Free Trial
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
