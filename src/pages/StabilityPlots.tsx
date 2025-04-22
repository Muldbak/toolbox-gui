
import { useState, useEffect } from "react";
import { Circle, CheckSquare, XSquare } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Generate different mock data for different cases and plot types
const generateMockData = (caseId: number, plotType: string, offset: number = 0, multiplier: number = 1) => 
  Array.from({ length: 100 }, (_, i) => ({
    frequency: i * 100,
    magnitude: (25 * Math.sin(i * 0.05 + (caseId * 0.2)) + 25 + offset) * multiplier,
    phase: (180 * Math.sin(i * 0.05 + (caseId * 0.3)) + offset) * multiplier,
    real: (20 * Math.cos(i * 0.05 + (caseId * 0.4)) + offset) * multiplier,
    imaginary: (15 * Math.sin(i * 0.05 + (caseId * 0.5)) + offset) * multiplier
  }));

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
  const [isSISO, setIsSISO] = useState(() => {
    const stored = localStorage.getItem('plotInSISO');
    return stored ? JSON.parse(stored) : true;
  });
  
  useEffect(() => {
    const storedSISO = localStorage.getItem('plotInSISO');
    if (storedSISO) {
      setIsSISO(JSON.parse(storedSISO));
    }
  }, []);

  const handleSelectAll = () => {
    if (selectedCases.length === MOCK_CASES.length) {
      setSelectedCases([]);
    } else {
      setSelectedCases(MOCK_CASES.map(c => c.id));
    }
  };
  
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
  
  const toggleCase = (id: number) => {
    setSelectedCases(prev => 
      prev.includes(id) ? prev.filter(caseId => caseId !== id) : [...prev, id]
    );
  };

  const renderGridImpedance = () => {
    if (isSISO) {
      return (
        <div className="border rounded-md shadow-sm p-4">
          <h3 className="font-medium mb-2">Grid Impedance</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" label={{ value: 'Frequency (Hz)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Magnitude (dB)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  {selectedCases.map((caseId) => (
                    <Line 
                      key={`grid-mag-${caseId}`}
                      data={generateMockData(caseId, 'grid')}
                      type="monotone" 
                      dataKey="magnitude" 
                      stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                      name={`Case ${caseId}`}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" label={{ value: 'Frequency (Hz)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Phase (deg)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  {selectedCases.map((caseId) => (
                    <Line 
                      key={`grid-phase-${caseId}`}
                      data={generateMockData(caseId, 'grid')}
                      type="monotone" 
                      dataKey="phase" 
                      stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                      name={`Case ${caseId}`}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="border rounded-md shadow-sm p-4">
          <h3 className="font-medium mb-2">Grid Impedance (MIMO)</h3>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={`mimo-grid-${index}`} className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    margin={{ top: 5, right: 10, left: 5, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="frequency" tick={{fontSize: 10}} />
                    <YAxis tick={{fontSize: 10}} />
                    <Tooltip />
                    {selectedCases.map((caseId) => (
                      <Line 
                        key={`grid-mimo-${caseId}-${index}`}
                        data={generateMockData(caseId, `grid-mimo-${index}`, index * 5, 0.8 + index * 0.1)}
                        type="monotone" 
                        dataKey={index % 2 === 0 ? "magnitude" : "phase"} 
                        stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                        name={`Case ${caseId}`}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  const renderConverterImpedance = () => {
    if (isSISO) {
      return (
        <div className="border rounded-md shadow-sm p-4">
          <h3 className="font-medium mb-2">Converter Impedance</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" label={{ value: 'Frequency (Hz)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Magnitude (dB)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  {selectedCases.map((caseId) => (
                    <Line 
                      key={`converter-mag-${caseId}`}
                      data={generateMockData(caseId, 'converter', 10, 0.8)}
                      type="monotone" 
                      dataKey="magnitude" 
                      stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                      name={`Case ${caseId}`}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" label={{ value: 'Frequency (Hz)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Phase (deg)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  {selectedCases.map((caseId) => (
                    <Line 
                      key={`converter-phase-${caseId}`}
                      data={generateMockData(caseId, 'converter', 10, 0.8)}
                      type="monotone" 
                      dataKey="phase" 
                      stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                      name={`Case ${caseId}`}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="border rounded-md shadow-sm p-4">
          <h3 className="font-medium mb-2">Converter Impedance (MIMO)</h3>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={`mimo-converter-${index}`} className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    margin={{ top: 5, right: 10, left: 5, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="frequency" tick={{fontSize: 10}} />
                    <YAxis tick={{fontSize: 10}} />
                    <Tooltip />
                    {selectedCases.map((caseId) => (
                      <Line 
                        key={`converter-mimo-${caseId}-${index}`}
                        data={generateMockData(caseId, `converter-mimo-${index}`, index * 5, 0.8 + index * 0.1)}
                        type="monotone" 
                        dataKey={index % 2 === 0 ? "magnitude" : "phase"} 
                        stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                        name={`Case ${caseId}`}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  const renderStabilityPlots = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-md shadow-sm p-4">
          <h3 className="font-medium mb-2">Bode Plot</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" label={{ value: 'Frequency (Hz)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Magnitude (dB)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  {selectedCases.map((caseId) => (
                    <Line 
                      key={`bode-mag-${caseId}`}
                      data={generateMockData(caseId, 'bode', -10, 1.2)}
                      type="monotone" 
                      dataKey="magnitude" 
                      stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                      name={`Case ${caseId}`}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" label={{ value: 'Frequency (Hz)', position: 'insideBottom', offset: -5 }} />
                  <YAxis label={{ value: 'Phase (deg)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  {selectedCases.map((caseId) => (
                    <Line 
                      key={`bode-phase-${caseId}`}
                      data={generateMockData(caseId, 'bode', -10, 1.2)}
                      type="monotone" 
                      dataKey="phase" 
                      stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                      name={`Case ${caseId}`}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md shadow-sm p-4">
          <h3 className="font-medium mb-2">Nyquist Plot</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="real" domain={['auto', 'auto']} label={{ value: 'Real', position: 'insideBottom', offset: -5 }} />
                <YAxis type="number" dataKey="imaginary" domain={['auto', 'auto']} label={{ value: 'Imaginary', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                {selectedCases.map((caseId) => (
                  <Line 
                    key={`nyquist-${caseId}`}
                    data={generateMockData(caseId, 'nyquist', -5, 1.5)}
                    type="monotone" 
                    dataKey="imaginary" 
                    stroke={`hsl(${caseId * 36}, 70%, 50%)`} 
                    name={`Case ${caseId}`}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex gap-6">
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
              {["stable", "marginally-stable", "unstable"].map((status) => (
                <Button 
                  key={status}
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleSelectByStatus(status as StabilityStatus)}
                  title={`Select/Deselect ${status} Cases`}
                  className="h-8 w-8 p-0"
                >
                  <Circle className={getStatusColor(status as StabilityStatus)} size={16} />
                </Button>
              ))}
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
        
        <div className="w-3/4 space-y-4">
          {renderGridImpedance()}
          {renderConverterImpedance()}
          {renderStabilityPlots()}
        </div>
      </div>
    </div>
  );
}
