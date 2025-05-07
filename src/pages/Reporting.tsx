
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Download, 
  ChartBar, 
  ChartPie, 
  Calendar,
  Clock,
  RefreshCw
} from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const complianceData = [
  { name: "Environmental", value: 85 },
  { name: "Social", value: 65 },
  { name: "Governance", value: 78 },
];

const COLORS = ["#2d6a4f", "#f59e0b", "#1a365d"];

const monthlyTrendData = [
  {
    month: "Jan",
    Compliant: 65,
    "At Risk": 25,
    "Non-Compliant": 10,
  },
  {
    month: "Feb",
    Compliant: 68,
    "At Risk": 22,
    "Non-Compliant": 10,
  },
  {
    month: "Mar",
    Compliant: 70,
    "At Risk": 20,
    "Non-Compliant": 10,
  },
  {
    month: "Apr",
    Compliant: 73,
    "At Risk": 18,
    "Non-Compliant": 9,
  },
  {
    month: "May",
    Compliant: 75,
    "At Risk": 17,
    "Non-Compliant": 8,
  },
  {
    month: "Jun",
    Compliant: 78,
    "At Risk": 16,
    "Non-Compliant": 6,
  },
];

const reportsList = [
  {
    id: "rep-001",
    title: "ESG Compliance Summary Q1 2025",
    type: "Quarterly Report",
    date: "2025-04-15",
    format: "PDF",
  },
  {
    id: "rep-002",
    title: "Climate Risk Exposure Assessment",
    type: "Annual Report",
    date: "2025-03-30",
    format: "PDF",
  },
  {
    id: "rep-003",
    title: "Executive ESG Dashboard",
    type: "Monthly Report",
    date: "2025-05-01",
    format: "PDF",
  },
  {
    id: "rep-004",
    title: "Carbon Emissions Analysis",
    type: "Quarterly Report",
    date: "2025-04-12",
    format: "Excel",
  },
  {
    id: "rep-005",
    title: "Regulatory Impact Forecast",
    type: "Special Report",
    date: "2025-04-23",
    format: "PDF",
  },
];

const Reporting = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-esg-blue">ESG Reporting</h1>
              <p className="text-gray-500">Access and generate ESG compliance reports</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button className="bg-esg-blue hover:bg-esg-blue/90">
                <FileText className="h-4 w-4 mr-2" /> Generate New Report
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="analytics" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="analytics" className="flex gap-2 items-center">
                <ChartBar className="h-4 w-4" /> Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex gap-2 items-center">
                <FileText className="h-4 w-4" /> Generated Reports
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Overall Compliance</CardTitle>
                    <CardDescription>Current compliance status</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-64 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={complianceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {complianceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Compliance Trend</CardTitle>
                    <CardDescription>Monthly change in compliance status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={monthlyTrendData}
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
                          <Bar dataKey="Compliant" stackId="a" fill="#2d6a4f" />
                          <Bar dataKey="At Risk" stackId="a" fill="#f59e0b" />
                          <Bar dataKey="Non-Compliant" stackId="a" fill="#dc2626" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>ESG Metrics Overview</CardTitle>
                  <CardDescription>Key performance indicators and metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Carbon Emissions</p>
                          <p className="text-2xl font-bold">24.8K</p>
                          <p className="text-xs text-gray-500">metric tons</p>
                        </div>
                        <div className="p-2 bg-green-100 rounded-full">
                          <RefreshCw className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-green-600">
                        <span>↓ 12% vs previous year</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Water Usage</p>
                          <p className="text-2xl font-bold">1.3M</p>
                          <p className="text-xs text-gray-500">gallons</p>
                        </div>
                        <div className="p-2 bg-blue-100 rounded-full">
                          <RefreshCw className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-green-600">
                        <span>↓ 8% vs previous year</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Renewable Energy</p>
                          <p className="text-2xl font-bold">42%</p>
                          <p className="text-xs text-gray-500">of total energy</p>
                        </div>
                        <div className="p-2 bg-amber-100 rounded-full">
                          <RefreshCw className="h-4 w-4 text-amber-600" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-green-600">
                        <span>↑ 15% vs previous year</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Workplace Diversity</p>
                          <p className="text-2xl font-bold">38%</p>
                          <p className="text-xs text-gray-500">women in leadership</p>
                        </div>
                        <div className="p-2 bg-purple-100 rounded-full">
                          <RefreshCw className="h-4 w-4 text-purple-600" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-green-600">
                        <span>↑ 5% vs previous year</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Supplier Assessments</p>
                          <p className="text-2xl font-bold">86%</p>
                          <p className="text-xs text-gray-500">ESG-compliant</p>
                        </div>
                        <div className="p-2 bg-indigo-100 rounded-full">
                          <RefreshCw className="h-4 w-4 text-indigo-600" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-green-600">
                        <span>↑ 10% vs previous year</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Compliance Cost</p>
                          <p className="text-2xl font-bold">$3.2M</p>
                          <p className="text-xs text-gray-500">annual budget</p>
                        </div>
                        <div className="p-2 bg-red-100 rounded-full">
                          <RefreshCw className="h-4 w-4 text-red-600" />
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-amber-600">
                        <span>↑ 18% vs previous year</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Reports</CardTitle>
                  <CardDescription>Access and download your ESG reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Report Name
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Type
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Format
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {reportsList.map((report) => (
                          <tr key={report.id} className="hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 text-esg-blue mr-2 flex-shrink-0" />
                                <span className="font-medium text-gray-900">{report.title}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-gray-600">
                              <div className="flex items-center">
                                {report.type === "Monthly Report" ? (
                                  <Clock className="h-4 w-4 text-gray-400 mr-1" />
                                ) : report.type === "Quarterly Report" ? (
                                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                                ) : (
                                  <ChartPie className="h-4 w-4 text-gray-400 mr-1" />
                                )}
                                {report.type}
                              </div>
                            </td>
                            <td className="px-4 py-4 text-gray-600">{report.date}</td>
                            <td className="px-4 py-4">
                              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                ${report.format === 'PDF' ? 'bg-red-100 text-red-800' : 
                                  'bg-green-100 text-green-800'}`}>
                                {report.format}
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <Button variant="ghost" size="sm" className="text-esg-blue hover:text-esg-blue/80 p-0">
                                <Download className="h-4 w-4 mr-1" /> Download
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Reporting;
