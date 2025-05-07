
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface HeatmapCellProps {
  value: number;
  jurisdiction: string;
  category: string;
}

const HeatmapCell: React.FC<HeatmapCellProps> = ({ value, jurisdiction, category }) => {
  // Determine color based on risk value (0-100)
  const getBackgroundColor = (value: number) => {
    if (value >= 75) return "bg-red-500 hover:bg-red-600";
    if (value >= 50) return "bg-esg-amber hover:bg-amber-600";
    return "bg-green-500 hover:bg-green-600";
  };
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className={`w-full h-12 ${getBackgroundColor(value)} cursor-pointer transition-colors`}
          />
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-sm">
            <p className="font-semibold">{jurisdiction} - {category}</p>
            <p>Risk Score: {value}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const RiskHeatmap: React.FC = () => {
  const jurisdictions = ["EU", "US", "UK", "Australia", "Canada", "Japan", "China", "Singapore"];
  const categories = ["Carbon Emissions", "Climate Risk Disclosure", "Resource Usage", "Biodiversity Impact"];
  
  // Sample data for the heatmap
  const data = {
    "EU": {
      "Carbon Emissions": 85,
      "Climate Risk Disclosure": 72,
      "Resource Usage": 65,
      "Biodiversity Impact": 78
    },
    "US": {
      "Carbon Emissions": 68,
      "Climate Risk Disclosure": 75,
      "Resource Usage": 58,
      "Biodiversity Impact": 45
    },
    "UK": {
      "Carbon Emissions": 76,
      "Climate Risk Disclosure": 82,
      "Resource Usage": 65,
      "Biodiversity Impact": 70
    },
    "Australia": {
      "Carbon Emissions": 72,
      "Climate Risk Disclosure": 58,
      "Resource Usage": 48,
      "Biodiversity Impact": 65
    },
    "Canada": {
      "Carbon Emissions": 68,
      "Climate Risk Disclosure": 62,
      "Resource Usage": 55,
      "Biodiversity Impact": 60
    },
    "Japan": {
      "Carbon Emissions": 75,
      "Climate Risk Disclosure": 65,
      "Resource Usage": 70,
      "Biodiversity Impact": 50
    },
    "China": {
      "Carbon Emissions": 85,
      "Climate Risk Disclosure": 45,
      "Resource Usage": 80,
      "Biodiversity Impact": 65
    },
    "Singapore": {
      "Carbon Emissions": 65,
      "Climate Risk Disclosure": 70,
      "Resource Usage": 60,
      "Biodiversity Impact": 55
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>ESG Risk Heatmap</CardTitle>
        <CardDescription>Visualization of risk exposure across jurisdictions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-max">
            {/* Header Row - Categories */}
            <div className="grid grid-cols-[120px_repeat(4,1fr)] gap-1 mb-1">
              <div className="text-sm font-semibold text-gray-700">Jurisdiction</div>
              {categories.map((category) => (
                <div key={category} className="text-sm font-semibold text-gray-700 text-center px-2">
                  {category}
                </div>
              ))}
            </div>
            
            {/* Data Rows */}
            {jurisdictions.map((jurisdiction) => (
              <div key={jurisdiction} className="grid grid-cols-[120px_repeat(4,1fr)] gap-1 mb-1">
                <div className="flex items-center text-sm font-medium text-gray-700">
                  {jurisdiction}
                </div>
                {categories.map((category) => (
                  <HeatmapCell 
                    key={`${jurisdiction}-${category}`} 
                    value={data[jurisdiction][category]} 
                    jurisdiction={jurisdiction} 
                    category={category}
                  />
                ))}
              </div>
            ))}
            
            {/* Legend */}
            <div className="mt-6 flex items-center justify-end gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm">Low Risk (0-49)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-esg-amber rounded"></div>
                <span className="text-sm">Medium Risk (50-74)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-sm">High Risk (75-100)</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskHeatmap;
