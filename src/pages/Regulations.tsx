
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Search, Upload, Filter, ArrowUp, ArrowDown } from "lucide-react";

const regulations = [
  {
    id: "reg-001",
    title: "EU Sustainable Finance Disclosure Regulation (SFDR)",
    jurisdiction: "European Union",
    category: "Environmental",
    date: "2021-03-10",
    status: "Active",
  },
  {
    id: "reg-002",
    title: "SEC Climate-Related Disclosures",
    jurisdiction: "United States",
    category: "Environmental",
    date: "2022-03-21",
    status: "Proposed",
  },
  {
    id: "reg-003",
    title: "UK Green Finance Strategy",
    jurisdiction: "United Kingdom",
    category: "Environmental",
    date: "2019-07-02",
    status: "Active",
  },
  {
    id: "reg-004",
    title: "Australian Modern Slavery Act",
    jurisdiction: "Australia",
    category: "Social",
    date: "2018-12-10",
    status: "Active",
  },
  {
    id: "reg-005",
    title: "German Supply Chain Due Diligence Act",
    jurisdiction: "Germany",
    category: "Social",
    date: "2021-06-11",
    status: "Active",
  },
  {
    id: "reg-006",
    title: "Swiss Ordinance on Climate Disclosures",
    jurisdiction: "Switzerland",
    category: "Environmental",
    date: "2022-01-01",
    status: "Active",
  },
  {
    id: "reg-007",
    title: "Singapore Green Finance Action Plan",
    jurisdiction: "Singapore",
    category: "Governance",
    date: "2020-02-09",
    status: "Active",
  },
  {
    id: "reg-008",
    title: "Canada Net-Zero Emissions Accountability Act",
    jurisdiction: "Canada",
    category: "Environmental",
    date: "2021-06-29",
    status: "Active",
  },
  {
    id: "reg-009",
    title: "Japan Corporate Governance Code",
    jurisdiction: "Japan",
    category: "Governance",
    date: "2021-06-01",
    status: "Active",
  },
  {
    id: "reg-010",
    title: "Hong Kong Green and Sustainable Finance Strategy",
    jurisdiction: "Hong Kong",
    category: "Environmental",
    date: "2020-12-17",
    status: "Active",
  },
];

const Regulations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("desc");
    }
  };

  const filteredRegulations = regulations
    .filter((reg) =>
      reg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.jurisdiction.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortDirection === "asc" 
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        const aValue = a[sortBy as keyof typeof a] as string;
        const bValue = b[sortBy as keyof typeof b] as string;
        
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    });

  const SortIcon = ({ column }: { column: string }) => {
    if (sortBy !== column) return null;
    
    return sortDirection === "asc" ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-esg-blue">Regulations Repository</h1>
              <p className="text-gray-500">Access and manage ESG regulations from around the world</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button className="bg-esg-blue hover:bg-esg-blue/90">
                <Upload className="h-4 w-4 mr-2" /> Upload Regulation
              </Button>
            </div>
          </div>
          
          {/* Search and Filter */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search regulations..."
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
          
          {/* Regulations Table */}
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th 
                        className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort("title")}
                      >
                        <div className="flex items-center gap-2">
                          Regulation <SortIcon column="title" />
                        </div>
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort("jurisdiction")}
                      >
                        <div className="flex items-center gap-2">
                          Jurisdiction <SortIcon column="jurisdiction" />
                        </div>
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort("category")}
                      >
                        <div className="flex items-center gap-2">
                          Category <SortIcon column="category" />
                        </div>
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort("date")}
                      >
                        <div className="flex items-center gap-2">
                          Effective Date <SortIcon column="date" />
                        </div>
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort("status")}
                      >
                        <div className="flex items-center gap-2">
                          Status <SortIcon column="status" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredRegulations.map((regulation) => (
                      <tr key={regulation.id} className="hover:bg-gray-50 cursor-pointer">
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 text-esg-blue mr-2 flex-shrink-0" />
                            <span className="font-medium text-gray-900">{regulation.title}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600">{regulation.jurisdiction}</td>
                        <td className="px-4 py-4">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${regulation.category === 'Environmental' ? 'bg-green-100 text-green-800' : 
                              regulation.category === 'Social' ? 'bg-blue-100 text-blue-800' : 
                                'bg-purple-100 text-purple-800'}`}>
                            {regulation.category}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600">{regulation.date}</td>
                        <td className="px-4 py-4">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${regulation.status === 'Active' ? 'bg-green-100 text-green-800' : 
                              'bg-amber-100 text-amber-800'}`}>
                            {regulation.status}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {filteredRegulations.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No regulations found matching your search criteria.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Regulations;
