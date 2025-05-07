
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
  ChartBar, 
  ShieldCheck, 
  Heatmap, 
  Workflow, 
  Report, 
  TrendingUp, 
  Clock
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Navigate the Evolving ESG Regulatory Landscape with Confidence
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Stay ahead of climate risk requirements and ESG regulations with our comprehensive intelligence platform. 
                Monitor, analyze, and adapt to the changing regulatory environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-esg-blue hover:bg-white/90">
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
        </section>
        
        {/* Why Climate Risk Matters */}
        <section className="py-20 bg-esg-gray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-esg-blue">Why Climate Risk Management Matters</h2>
              <p className="text-lg text-esg-darkGray">
                Climate change presents unprecedented challenges to businesses. Robust ESG regulation compliance is not just about avoiding penalties—it's about future-proofing your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover">
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
              
              <Card className="card-hover">
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
              
              <Card className="card-hover">
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
        <section className="py-20">
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
                  <ChartBar className="text-esg-green h-5 w-5" />
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
                  <Heatmap className="text-esg-green h-5 w-5" />
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
                  <Report className="text-esg-amber h-5 w-5" />
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
        <section className="bg-esg-blue text-white py-16">
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
