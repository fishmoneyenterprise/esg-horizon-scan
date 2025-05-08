
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  MapPin, 
  Folder, 
  FileText, 
  BarChart, 
  ShieldCheck, 
  PieChart, 
  Workflow, 
  FileBarChart, 
  TrendingUp, 
  Clock
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb]">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Video Background */}
        <section className="relative h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video 
              autoPlay 
              muted 
              loop 
              className="object-cover w-full h-full"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-business-team-meeting-discussing-work-metrics-32641-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          {/* Content over video */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center animate-fade-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Navigate the Evolving ESG Regulatory Landscape with Confidence
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white opacity-90">
                  Stay ahead of climate risk requirements and ESG regulations with our comprehensive intelligence platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-esg-blue hover:bg-white/90" asChild>
                    <Link to="/dashboard">
                      Explore Platform
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                    <Link to="#">
                      Request Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>
        
        {/* Features Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-esg-blue">Our Platform Features</h2>
              <p className="text-lg text-esg-darkGray">
                Simplify your ESG compliance journey with our comprehensive suite of tools designed specifically for regulatory intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <Card className="shadow-sm hover:shadow-md transition-all border-0">
                <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                  <div className="bg-esg-lightBlue rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <FileText className="text-esg-blue h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Document Management</h3>
                  <p className="text-gray-600">
                    Upload, store, and organize all your ESG-related documents in one secure location with intelligent categorization.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature Card 2 */}
              <Card className="shadow-sm hover:shadow-md transition-all border-0">
                <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                  <div className="bg-esg-lightGreen rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Folder className="text-esg-green h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Centralized Repository</h3>
                  <p className="text-gray-600">
                    Access all regulations, standards, and policy documents from a single, searchable, centralized database.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature Card 3 */}
              <Card className="shadow-sm hover:shadow-md transition-all border-0">
                <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                  <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <FileBarChart className="text-esg-amber h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Reporting</h3>
                  <p className="text-gray-600">
                    Generate detailed, customizable reports on ESG metrics, trends, and compliance status for all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Why Climate Risk Matters */}
        <section className="py-20 bg-[#f9fafb]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-esg-blue">Why Climate Risk Management Matters</h2>
              <p className="text-lg text-esg-darkGray">
                Climate change presents unprecedented challenges to businesses. Robust ESG regulation compliance is not just about avoiding penalties—it's about future-proofing your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover shadow-sm hover:shadow-md transition-all border-0">
                <CardContent className="pt-6">
                  <div className="bg-esg-lightBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <TrendingUp className="text-esg-blue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Increasing Regulatory Pressure</h3>
                  <p className="text-gray-600">
                    ESG regulations are expanding globally at an unprecedented rate, with over 700 new climate-related policies introduced in the past two years alone.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover shadow-sm hover:shadow-md transition-all border-0">
                <CardContent className="pt-6">
                  <div className="bg-esg-lightGreen rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <ShieldCheck className="text-esg-green h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Financial & Reputational Risk</h3>
                  <p className="text-gray-600">
                    Non-compliance can result in significant financial penalties and lasting damage to brand reputation in an increasingly environmentally-conscious marketplace.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover shadow-sm hover:shadow-md transition-all border-0">
                <CardContent className="pt-6">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="text-esg-amber h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Advantage</h3>
                  <p className="text-gray-600">
                    Organizations with robust ESG compliance frameworks attract more investment, customers, and talent than those falling behind in sustainability practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-esg-blue">Comprehensive ESG Regulatory Intelligence</h2>
              <p className="text-lg text-esg-darkGray">
                Our platform provides all the tools you need to navigate the complex landscape of ESG regulations across multiple jurisdictions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-start">
                <div className="bg-esg-lightBlue rounded-full p-3 mb-4">
                  <MapPin className="text-esg-blue h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Jurisdiction-Specific Monitoring</h3>
                <p className="text-gray-600">
                  Track ESG regulatory changes across multiple jurisdictions with real-time alerts and updates tailored to your business footprint.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-start">
                <div className="bg-esg-lightBlue rounded-full p-3 mb-4">
                  <Folder className="text-esg-blue h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Centralized Repository</h3>
                <p className="text-gray-600">
                  Store, manage, and access all your ESG regulations in one centralized location, complete with powerful search and filtering capabilities.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-start">
                <div className="bg-esg-lightBlue rounded-full p-3 mb-4">
                  <FileText className="text-esg-blue h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Integration</h3>
                <p className="text-gray-600">
                  Seamlessly upload and analyze ESG regulation documents with our intelligent parsing technology that extracts key obligations and requirements.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="flex flex-col items-start">
                <div className="bg-esg-lightGreen rounded-full p-3 mb-4">
                  <BarChart className="text-esg-green h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Intuitive Dashboard</h3>
                <p className="text-gray-600">
                  Gain a unified view of ESG alerts, tasks, and compliance status through our customizable dashboard interface.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="flex flex-col items-start">
                <div className="bg-esg-lightGreen rounded-full p-3 mb-4">
                  <Shield className="text-esg-green h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Risk Scoring & Gap Analysis</h3>
                <p className="text-gray-600">
                  Quantify ESG compliance risks and identify gaps in your regulatory coverage with our advanced risk assessment tools.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="flex flex-col items-start">
                <div className="bg-esg-lightGreen rounded-full p-3 mb-4">
                  <PieChart className="text-esg-green h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Heatmap Visualization</h3>
                <p className="text-gray-600">
                  Visualize ESG risk exposure across different jurisdictions and business units through intuitive heatmap displays.
                </p>
              </div>
              
              {/* Feature 7 */}
              <div className="flex flex-col items-start">
                <div className="bg-amber-100 rounded-full p-3 mb-4">
                  <Workflow className="text-esg-amber h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Workflow Management</h3>
                <p className="text-gray-600">
                  Assign tasks and track progress on ESG regulatory obligations with our collaborative workflow tools.
                </p>
              </div>
              
              {/* Feature 8 */}
              <div className="flex flex-col items-start">
                <div className="bg-amber-100 rounded-full p-3 mb-4">
                  <FileBarChart className="text-esg-amber h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Reporting</h3>
                <p className="text-gray-600">
                  Generate detailed reports on ESG metrics, trends, and compliance status for stakeholders at all levels.
                </p>
              </div>
              
              {/* Feature 9 */}
              <div className="flex flex-col items-start">
                <div className="bg-amber-100 rounded-full p-3 mb-4">
                  <TrendingUp className="text-esg-amber h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Forecasting</h3>
                <p className="text-gray-600">
                  Stay ahead of the curve with predictive analytics that anticipate future ESG regulatory changes and their potential impact.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-esg-blue to-esg-green text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your ESG Regulatory Compliance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join leading organizations using ESG Horizon to navigate the complex world of climate risk and ESG regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-esg-blue hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
