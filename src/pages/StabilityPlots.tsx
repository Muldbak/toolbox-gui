
import { useState } from "react";
import { Circle, CheckSquare, XSquare } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for plots
const gridImpedanceData = Array.from({ length: 100 }, (_, i) => ({
  frequency: i * 100,
  magnitude: 25 * Math.sin(i * 0.05) + 25,
}));

const converterImpedanceData = Array.from({ length: 100 }, (_, i) => ({
  frequency: i * 100,
  magnitude: 15 * Math.cos(i * 0.05) + 15,
}));

// Mock cases data
type StabilityStatus = "stable" | "marginally-stable" | "unstable";

interface Case {
  id: number;
  name: string;
  status: StabilityStatus;
}

const MOCK_CASES: Case[] = [
  { id: 1, name: "Case 1", status: "stable" },
  { id: 2, name: "Case 2", status: "marginally-stable" },
  { id: 3, name: "Case 3", status: "unstable" },
  { id: 4, name: "Case 4", status: "stable" },
  { id: 5, name: "Case 5", status: "marginally-stable" },
  { id: 6, name: "Case 6", status: "stable" },
  { id: 7, name: "Case 7", status: "unstable" },
  { id: 8, name: "Case 8", status: "stable" },
  { id: 9, name: "Case 9", status: "stable" },
  { id: 10, name: "Case 10", status: "marginally-stable" },
];

// Get status color
const getStatusColor = (status: StabilityStatus) => {
  switch (status) {
    case "stable":
      return "text-green-500";
    case "marginally-stable":
      return "text-yellow-500";
    case "unstable":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export default function StabilityPlots() {
  const [selectedCases, setSelectedCases] = useState<number[]>([]);
  
  // Select/deselect all cases
  const handleSelectAll = () => {
    if (selectedCases.length === MOCK_CASES.length) {
      setSelectedCases([]);
    } else {
      setSelectedCases(MOCK_CASES.map(c => c.id));
    }
  };
  
  // Select cases by status
  const handleSelectByStatus = (status: StabilityStatus) => {
    const casesByStatus = MOCK_CASES.filter(c => c.status === status).map(c => c.id);
    setSelectedCases(prev => {
      const alreadySelected = casesByStatus.every(id => prev.includes(id));
      if (alreadySelected) {
        return prev.filter(id => !casesByStatus.includes(id));
      } else {
        return [...new Set([...prev, ...casesByStatus])];
      }
    });
  };
  
  // Toggle single case selection
  const toggleCase = (id: number) => {
    setSelectedCases(prev => 
      prev.includes(id) ? prev.filter(caseId => caseId !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6">
      <div className="flex gap-6">
        {/* Left side: Cases table */}
        <div className="w-1/4 border rounded-md shadow-sm">
          <div className="p-3 bg-gray-50 border-b flex justify-between items-center">
            <h3 className="font-medium">Cases</h3>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSelectAll}
                title="Select/Deselect All" 
                className="h-8 w-8 p-0"
              >
                <CheckSquare size={16} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleSelectByStatus("stable")}
                title="Select/Deselect Stable Cases" 
                className="h-8 w-8 p-0"
              >
                <Circle className="text-green-500" size={16} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleSelectByStatus("marginally-stable")}
                title="Select/Deselect Marginally Stable Cases" 
                className="h-8 w-8 p-0"
              >
                <Circle className="text-yellow-500" size={16} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleSelectByStatus("unstable")}
                title="Select/Deselect Unstable Cases" 
                className="h-8 w-8 p-0"
              >
                <Circle className="text-red-500" size={16} />
              </Button>
            </div>
          </div>
          
          <div className="max-h-[calc(100vh-220px)] overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>Case</TableHead>
                  <TableHead className="w-[50px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_CASES.map((caseItem) => (
                  <TableRow key={caseItem.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedCases.includes(caseItem.id)}
                        onCheckedChange={() => toggleCase(caseItem.id)}
                      />
                    </TableCell>
                    <TableCell>{caseItem.name}</TableCell>
                    <TableCell>
                      <Circle className={getStatusColor(caseItem.status)} size={16} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Right side: Plots */}
        <div className="w-3/4 grid grid-cols-2 gap-4">
          {/* Grid Impedance Plot */}
          <div className="border rounded-md shadow-sm p-4">
            <h3 className="font-medium mb-2">Grid impedance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={gridImpedanceData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" label={{ value: 'frequency (Hz)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Magnitude (dB)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="magnitude" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Converter Impedance Plot */}
          <div className="border rounded-md shadow-sm p-4">
            <h3 className="font-medium mb-2">Converter impedance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={converterImpedanceData}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" label={{ value: 'frequency (Hz)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Magnitude (dB)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="magnitude" stroke="#82ca9d" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Bode Plot */}
          <div className="border rounded-md shadow-sm p-4 col-span-2">
            <h3 className="font-medium mb-2">Bode Plot: System is unstable in the studied frequency range!</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={['auto', 'auto']} label={{ value: 'Frequency', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Magnitude (dB)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line data={gridImpedanceData} type="monotone" dataKey="magnitude" name="Eigenvalue 1" stroke="#8884d8" />
                  <Line data={converterImpedanceData} type="monotone" dataKey="magnitude" name="Eigenvalue 2" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
