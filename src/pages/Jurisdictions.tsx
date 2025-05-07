
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Search, Bell, Filter, Globe, ChartBar } from "lucide-react";

const jurisdictions = [
  {
    id: "eu",
    name: "European Union",
    region: "Europe",
    regulations: 48,
    alerts: 5,
    riskScore: 78,
  },
  {
    id: "us",
    name: "United States",
    region: "North America",
    regulations: 35,
    alerts: 4,
    riskScore: 72,
  },
  {
    id: "uk",
    name: "United Kingdom",
    region: "Europe",
    regulations: 32,
    alerts: 3,
    riskScore: 75,
  },
  {
    id: "au",
    name: "Australia",
    region: "Oceania",
    regulations: 27,
    alerts: 2,
    riskScore: 65,
  },
  {
    id: "ca",
    name: "Canada",
    region: "North America",
    regulations: 24,
    alerts: 1,
    riskScore: 62,
  },
  {
    id: "jp",
    name: "Japan",
    region: "Asia",
    regulations: 22,
    alerts: 2,
    riskScore: 68,
  },
  {
    id: "sg",
    name: "Singapore",
    region: "Asia",
    regulations: 18,
    alerts: 0,
    riskScore: 58,
  },
  {
    id: "ch",
    name: "China",
    region: "Asia",
    regulations: 15,
    alerts: 1,
    riskScore: 82,
  },
  {
    id: "br",
    name: "Brazil",
    region: "South America",
    regulations: 12,
    alerts: 0,
    riskScore: 60,
  },
  {
    id: "za",
    name: "South Africa",
    region: "Africa",
    regulations: 9,
    alerts: 0,
    riskScore: 55,
  },
  {
    id: "in",
    name: "India",
    region: "Asia",
    regulations: 14,
    alerts: 1,
    riskScore: 70,
  },
  {
    id: "de",
    name: "Germany",
    region: "Europe",
    regulations: 30,
    alerts: 2,
    riskScore: 72,
  },
];

const recentAlerts = [
  {
    id: 1,
    title: "EU Updates Sustainable Finance Taxonomy",
    jurisdiction: "European Union",
    date: "2025-05-02",
    type: "Regulation Update",
    impact: "High",
  },
  {
    id: 2,
    title: "SEC Proposes Enhanced Climate Disclosure Rules",
    jurisdiction: "United States",
    date: "2025-04-28",
    type: "Proposed Regulation",
    impact: "High",
  },
  {
    id: 3,
    title: "UK Introduces New Carbon Pricing Mechanism",
    jurisdiction: "United Kingdom",
    date: "2025-04-25",
    type: "New Regulation",
    impact: "Medium",
  },
  {
    id: 4,
    title: "German Supply Chain Due Diligence Law Amendment",
    jurisdiction: "Germany",
    date: "2025-04-20",
    type: "Regulation Amendment",
    impact: "Medium",
  },
  {
    id: 5,
    title: "Australia Revises Climate Risk Disclosure Guidelines",
    jurisdiction: "Australia",
    date: "2025-04-15",
    type: "Guidance Update",
    impact: "Medium",
  },
];

const Jurisdictions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");
  
  const regions = ["All", "Europe", "North America", "Asia", "Oceania", "South America", "Africa"];
  
  const filteredJurisdictions = jurisdictions
    .filter((j) => activeRegion === "All" || j.region === activeRegion)
    .filter((j) => j.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-esg-blue">Jurisdictions</h1>
              <p className="text-gray-500">Monitor ESG regulations across different territories</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button className="bg-esg-blue hover:bg-esg-blue/90">
                <MapPin className="h-4 w-4 mr-2" /> Add Jurisdiction
              </Button>
            </div>
          </div>
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search jurisdictions..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" /> Filter Options
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mb-6 flex flex-wrap gap-2">
            {regions.map((region) => (
              <Button
                key={region}
                variant={activeRegion === region ? "default" : "outline"}
                className={activeRegion === region ? "bg-esg-blue hover:bg-esg-blue/90" : ""}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {filteredJurisdictions.map((jurisdiction) => (
              <Card key={jurisdiction.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-esg-lightBlue p-2 rounded-full mr-3">
                        <Globe className="h-5 w-5 text-esg-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{jurisdiction.name}</h3>
                        <p className="text-sm text-gray-500">{jurisdiction.region}</p>
                      </div>
                    </div>
                    {jurisdiction.alerts > 0 && (
                      <div className="bg-esg-amber text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                        <Bell className="h-3 w-3 mr-1" /> {jurisdiction.alerts}
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Regulations</p>
                      <p className="font-semibold">{jurisdiction.regulations}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Risk Score</p>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                          <div className={`h-1.5 rounded-full ${jurisdiction.riskScore >= 75 ? 'bg-red-500' : 
                              jurisdiction.riskScore >= 60 ? 'bg-amber-500' : 'bg-green-500'}`} 
                              style={{ width: `${jurisdiction.riskScore}%` }}>
                          </div>
                        </div>
                        <span className="text-sm">{jurisdiction.riskScore}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Regulatory Alerts by Jurisdiction</CardTitle>
              <CardDescription>Latest updates from monitored jurisdictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Alert
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Jurisdiction
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentAlerts.map((alert) => (
                      <tr key={alert.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <span className="font-medium text-gray-900">{alert.title}</span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-esg-blue mr-1" />
                            <span className="text-gray-600">{alert.jurisdiction}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${alert.type === 'New Regulation' ? 'bg-blue-100 text-blue-800' : 
                              alert.type === 'Regulation Update' ? 'bg-green-100 text-green-800' : 
                                alert.type === 'Proposed Regulation' ? 'bg-amber-100 text-amber-800' :
                                  'bg-purple-100 text-purple-800'}`}>
                            {alert.type}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600">{alert.date}</td>
                        <td className="px-4 py-4">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${alert.impact === 'High' ? 'bg-red-100 text-red-800' : 
                              alert.impact === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                                'bg-green-100 text-green-800'}`}>
                            {alert.impact}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jurisdictions;
