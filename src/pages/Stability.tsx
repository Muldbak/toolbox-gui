
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon, FileInput, Upload } from "lucide-react";
import { ActionButtons } from "@/components/ActionButtons";
import StabilityPlots from "./StabilityPlots";

export default function Stability() {
  const [activeTab, setActiveTab] = useState("measurement");

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center p-4 border-b">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="measurement">Measurement Settings</TabsTrigger>
            <TabsTrigger value="plots">Plots</TabsTrigger>
          </TabsList>
        </Tabs>
        <ActionButtons />
      </div>
      
      {activeTab === "measurement" ? (
        <MeasurementSettings />
      ) : (
        <StabilityPlots />
      )}
    </div>
  );
}

function MeasurementSettings() {
  const [plotInSISO, setPlotInSISO] = useState(() => {
    const stored = localStorage.getItem('plotInSISO');
    return stored ? JSON.parse(stored) : true;
  });
  const [gridImpedanceFile, setGridImpedanceFile] = useState<File | null>(null);
  const [converterImpedanceFile, setConverterImpedanceFile] = useState<File | null>(null);

  const handleSISOChange = (value: string) => {
    const isSISO = value === "yes";
    setPlotInSISO(isSISO);
    localStorage.setItem('plotInSISO', JSON.stringify(isSISO));
  };

  const handleGridFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setGridImpedanceFile(e.target.files[0]);
    }
  };

  const handleConverterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setConverterImpedanceFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex justify-between p-6 space-x-6">
      {/* Grid Impedance Section */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Grid Impedance
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Configure grid impedance parameters for stability analysis</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Label className="block">Upload Grid Impedance File</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Upload a file with grid impedance data</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 border rounded-md p-2 bg-background text-sm truncate">
                {gridImpedanceFile ? gridImpedanceFile.name : "No file selected"}
              </div>
              <div className="relative">
                <input
                  type="file"
                  id="grid-impedance-file"
                  className="absolute inset-0 opacity-0 w-full cursor-pointer"
                  onChange={handleGridFileChange}
                  accept=".csv,.txt,.xlsx"
                />
                <Button variant="outline" className="relative z-10 flex items-center gap-2">
                  <FileInput className="h-4 w-4" />
                  Browse
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="block">dB Input</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle whether the input values are in decibels</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup defaultValue="no" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="grid-db-yes" />
                <Label htmlFor="grid-db-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="grid-db-no" />
                <Label htmlFor="grid-db-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="block">Admittance Input</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Specify if the input values are in admittance format</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup defaultValue="yes" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="grid-admittance-yes" />
                <Label htmlFor="grid-admittance-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="grid-admittance-no" />
                <Label htmlFor="grid-admittance-no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Converter Impedance Section */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Converter Impedance
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Configure converter impedance parameters for stability analysis</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Label className="block">Upload Converter Impedance File</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Upload a file with converter impedance data</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 border rounded-md p-2 bg-background text-sm truncate">
                {converterImpedanceFile ? converterImpedanceFile.name : "No file selected"}
              </div>
              <div className="relative">
                <input
                  type="file"
                  id="converter-impedance-file"
                  className="absolute inset-0 opacity-0 w-full cursor-pointer"
                  onChange={handleConverterFileChange}
                  accept=".csv,.txt,.xlsx"
                />
                <Button variant="outline" className="relative z-10 flex items-center gap-2">
                  <FileInput className="h-4 w-4" />
                  Browse
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="block">dB Input</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle whether the input values are in decibels</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup defaultValue="yes" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="conv-db-yes" />
                <Label htmlFor="conv-db-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="conv-db-no" />
                <Label htmlFor="conv-db-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="block">Admittance Input</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Specify if the input values are in admittance format</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup defaultValue="yes" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="conv-admittance-yes" />
                <Label htmlFor="conv-admittance-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="conv-admittance-no" />
                <Label htmlFor="conv-admittance-no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Impedance Plot Section */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Impedance Plot
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Configure how the impedance values should be plotted</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Choose the plot visualization option</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="block">dB Input</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle whether the plot values are in decibels</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup defaultValue="yes" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="plot-db-yes" />
                <Label htmlFor="plot-db-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="plot-db-no" />
                <Label htmlFor="plot-db-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label className="block">Plot in SISO Model</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle between SISO (Single Input Single Output) and MIMO model visualization</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup 
              value={plotInSISO ? "yes" : "no"} 
              onValueChange={handleSISOChange}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="siso-yes" />
                <Label htmlFor="siso-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="siso-no" />
                <Label htmlFor="siso-no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
