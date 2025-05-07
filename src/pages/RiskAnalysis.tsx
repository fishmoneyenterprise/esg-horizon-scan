
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RiskHeatmap from "@/components/RiskHeatmap";
import { Shield, TrendingUp, AlertTriangle, BarChart4 } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const riskTrendData = [
  {
    month: "Jan",
    Environmental: 65,
    Social: 48,
    Governance: 72,
  },
  {
    month: "Feb",
    Environmental: 68,
    Social: 52,
    Governance: 70,
  },
  {
    month: "Mar",
    Environmental: 72,
    Social: 58,
    Governance: 68,
  },
  {
    month: "Apr",
    Environmental: 75,
    Social: 62,
    Governance: 65,
  },
  {
    month: "May",
    Environmental: 78,
    Social: 68,
    Governance: 67,
  },
  {
    month: "Jun",
    Environmental: 82,
    Social: 70,
    Governance: 72,
  },
];

const topRisks = [
  {
    id: 1,
    risk: "Carbon Emission Reporting Non-Compliance",
    score: 85,
    category: "Environmental",
    impact: "High",
    trend: "increasing",
  },
  {
    id: 2,
    risk: "Insufficient Climate Risk Disclosure",
    score: 82,
    category: "Environmental",
    impact: "High",
    trend: "increasing",
  },
  {
    id: 3,
    risk: "Supply Chain Due Diligence Gaps",
    score: 78,
    category: "Social",
    impact: "High",
    trend: "stable",
  },
  {
    id: 4,
    risk: "Greenwashing Allegations Risk",
    score: 75,
    category: "Governance",
    impact: "Medium",
    trend: "increasing",
  },
  {
    id: 5,
    risk: "Biodiversity Impact Assessment Gaps",
    score: 72,
    category: "Environmental",
    impact: "Medium",
    trend: "stable",
  },
];

const RiskAnalysis = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-esg-blue">Risk Analysis & Gap Assessment</h1>
              <p className="text-gray-500">Assess and visualize your ESG regulatory risks</p>
            </div>
          </div>
          
          <Tabs defaultValue="heatmap" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="heatmap" className="flex gap-2 items-center">
                <BarChart4 className="h-4 w-4" /> Risk Heatmap
              </TabsTrigger>
              <TabsTrigger value="trends" className="flex gap-2 items-center">
                <TrendingUp className="h-4 w-4" /> Risk Trends
              </TabsTrigger>
              <TabsTrigger value="toprisks" className="flex gap-2 items-center">
                <AlertTriangle className="h-4 w-4" /> Top Risks
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="heatmap">
              <RiskHeatmap />
            </TabsContent>
            
            <TabsContent value="trends">
              <Card>
                <CardHeader>
                  <CardTitle>ESG Risk Trends</CardTitle>
                  <CardDescription>Risk score trends over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={riskTrendData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 0,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="Environmental" 
                          stroke="#2d6a4f" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="Social" 
                          stroke="#1a365d" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="Governance" 
                          stroke="#f59e0b" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <h4 className="font-semibold mb-2">Risk Band Reference</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded px-3 py-2 bg-green-100 text-green-800 text-sm">
                        0-50: Low Risk
                      </div>
                      <div className="rounded px-3 py-2 bg-amber-100 text-amber-800 text-sm">
                        51-75: Medium Risk
                      </div>
                      <div className="rounded px-3 py-2 bg-red-100 text-red-800 text-sm">
                        76-100: High Risk
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="toprisks">
              <Card>
                <CardHeader>
                  <CardTitle>Top ESG Regulatory Risks</CardTitle>
                  <CardDescription>Highest priority risks requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Risk Description
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Risk Score
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Impact
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Trend
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {topRisks.map((risk) => (
                          <tr key={risk.id} className="hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <div className="flex items-center">
                                <Shield className="h-4 w-4 text-esg-blue mr-2 flex-shrink-0" />
                                <span className="font-medium text-gray-900">{risk.risk}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                ${risk.category === 'Environmental' ? 'bg-green-100 text-green-800' : 
                                  risk.category === 'Social' ? 'bg-blue-100 text-blue-800' : 
                                    'bg-purple-100 text-purple-800'}`}>
                                {risk.category}
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-1">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div className={`h-2.5 rounded-full ${risk.score >= 75 ? 'bg-red-500' : 
                                      risk.score >= 50 ? 'bg-amber-500' : 'bg-green-500'}`} 
                                      style={{ width: `${risk.score}%` }}>
                                  </div>
                                </div>
                                <span className="text-sm ml-2">{risk.score}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                ${risk.impact === 'High' ? 'bg-red-100 text-red-800' : 
                                  risk.impact === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                                    'bg-green-100 text-green-800'}`}>
                                {risk.impact}
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              {risk.trend === "increasing" ? (
                                <div className="flex items-center text-red-500">
                                  <TrendingUp className="h-4 w-4 mr-1" /> Increasing
                                </div>
                              ) : (
                                <div className="flex items-center text-amber-500">
                                  <span className="w-4 h-0.5 bg-amber-500 mr-1" /> Stable
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Recommended Actions</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 mt-1">•</div>
                        <p className="text-gray-700">Update carbon emissions reporting methodology to align with EU Sustainable Finance Disclosure Regulation</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 mt-1">•</div>
                        <p className="text-gray-700">Conduct comprehensive review of climate risk disclosure practices against SEC proposed rules</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 mt-1">•</div>
                        <p className="text-gray-700">Implement enhanced due diligence procedures for supply chain partners to address social compliance gaps</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 mt-1">•</div>
                        <p className="text-gray-700">Develop formal policy on environmental marketing claims to prevent greenwashing allegations</p>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RiskAnalysis;
