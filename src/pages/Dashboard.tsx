
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Bell, 
  Calendar, 
  ChartBar, 
  FileText, 
  Folder, 
  MapPin, 
  Shield, 
  TrendingUp, 
  TrendingDown,
  Heatmap
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const riskData = [
  { name: "Environmental", score: 75, color: "#2d6a4f" },
  { name: "Social", score: 62, color: "#f59e0b" },
  { name: "Governance", score: 84, color: "#1a365d" },
];

const regulatoryChangesData = [
  {
    month: "Jan",
    Environmental: 4,
    Social: 3,
    Governance: 5,
  },
  {
    month: "Feb",
    Environmental: 5,
    Social: 2,
    Governance: 3,
  },
  {
    month: "Mar",
    Environmental: 7,
    Social: 4,
    Governance: 6,
  },
  {
    month: "Apr",
    Environmental: 6,
    Social: 5,
    Governance: 4,
  },
  {
    month: "May",
    Environmental: 9,
    Social: 6,
    Governance: 7,
  },
  {
    month: "Jun",
    Environmental: 8,
    Social: 7,
    Governance: 5,
  },
];

const recentAlerts = [
  {
    id: 1,
    title: "EU Sustainable Finance Disclosure Regulation Update",
    jurisdiction: "European Union",
    date: "2025-04-28",
    impact: "High",
    impactColor: "bg-red-500",
  },
  {
    id: 2,
    title: "SEC Climate Disclosure Rules Released",
    jurisdiction: "United States",
    date: "2025-04-25",
    impact: "High",
    impactColor: "bg-red-500",
  },
  {
    id: 3,
    title: "Australia Updates Carbon Reporting Requirements",
    jurisdiction: "Australia",
    date: "2025-04-20",
    impact: "Medium",
    impactColor: "bg-amber-500",
  },
  {
    id: 4,
    title: "UK Green Finance Framework Updated",
    jurisdiction: "United Kingdom",
    date: "2025-04-18",
    impact: "Medium",
    impactColor: "bg-amber-500",
  },
  {
    id: 5,
    title: "Singapore ESG Reporting Standards Revision",
    jurisdiction: "Singapore",
    date: "2025-04-15",
    impact: "Low",
    impactColor: "bg-green-500",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-esg-blue">ESG Regulatory Dashboard</h1>
              <p className="text-gray-500">Overview of your regulatory compliance status and recent alerts</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-sm text-gray-500">Last updated: May 7, 2025</span>
              <Button variant="outline" size="sm">
                Refresh
              </Button>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Active Regulations</p>
                    <p className="text-2xl font-bold mt-1">247</p>
                  </div>
                  <div className="p-2 bg-blue-100 rounded-full">
                    <FileText className="h-5 w-5 text-esg-blue" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium">+12% from last month</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Monitored Jurisdictions</p>
                    <p className="text-2xl font-bold mt-1">18</p>
                  </div>
                  <div className="p-2 bg-esg-lightGreen rounded-full">
                    <MapPin className="h-5 w-5 text-esg-green" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium">+2 since Q1 2025</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Recent Alerts</p>
                    <p className="text-2xl font-bold mt-1">12</p>
                  </div>
                  <div className="p-2 bg-amber-100 rounded-full">
                    <Bell className="h-5 w-5 text-esg-amber" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-xs text-red-500 font-medium">+5 from last week</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Compliance Score</p>
                    <p className="text-2xl font-bold mt-1">82%</p>
                  </div>
                  <div className="p-2 bg-esg-lightGreen rounded-full">
                    <Shield className="h-5 w-5 text-esg-green" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium">+3% from previous assessment</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Risk Scores */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>ESG Risk Scores</CardTitle>
                <CardDescription>Risk assessment by ESG category</CardDescription>
              </CardHeader>
              <CardContent>
                {riskData.map((item) => (
                  <div key={item.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm font-medium">{item.score}%</span>
                    </div>
                    <Progress value={item.score} className="h-2" style={{ backgroundColor: "hsl(var(--muted))" }}>
                      <div 
                        className="h-full" 
                        style={{ 
                          width: `${item.score}%`,
                          backgroundColor: item.color
                        }}
                      />
                    </Progress>
                  </div>
                ))}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">Risk Status</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="block w-3 h-3 rounded-full bg-esg-green"></span>
                      <span className="text-xs">Low</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="block w-3 h-3 rounded-full bg-esg-amber"></span>
                      <span className="text-xs">Medium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="block w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="text-xs">High</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Regulatory Changes Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Regulatory Changes</CardTitle>
                <CardDescription>Monthly breakdown by ESG category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={regulatoryChangesData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Environmental" stackId="a" fill="#2d6a4f" />
                      <Bar dataKey="Social" stackId="a" fill="#f59e0b" />
                      <Bar dataKey="Governance" stackId="a" fill="#1a365d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Regulatory Alerts</CardTitle>
              <CardDescription>Latest ESG regulatory changes requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Alert</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Jurisdiction</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentAlerts.map((alert) => (
                      <tr key={alert.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Bell className="h-4 w-4 text-esg-amber mr-2" />
                            <span className="text-sm font-medium text-gray-900">{alert.title}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{alert.jurisdiction}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{alert.date}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${alert.impactColor} text-white`}>
                            {alert.impact}
                          </span>
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

// Missing Button component
import { Button } from "@/components/ui/button";

export default Dashboard;
