
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

export function AnalysisForm() {
  const [scale, setScale] = useState("logarithmic");

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Frequency Range */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Frequency Range
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Configure the frequency range for impedance measurement</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Start Frequency (Start [hz])</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The lowest frequency in the measurement range</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="number" placeholder="0" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Boundary Frequency (Bound [hz])</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The boundary between two measurement regions with different resolution</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="number" placeholder="0" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>End Frequency (End [hz])</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The highest frequency in the measurement range</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="number" placeholder="0" />
          </div>
        </div>
        
        {/* Column 2: Resolution */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            Resolution
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Configure the frequency step resolution for impedance measurements</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Frequency Increment (1 [hz])</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Choose between logarithmic or linear frequency scale</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Select defaultValue={scale} onValueChange={setScale}>
              <SelectTrigger>
                <SelectValue placeholder="Select scale" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="logarithmic">Logarithmic</SelectItem>
                <SelectItem value="linear">Linear</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Frequency Step 1 (step1 [hz])</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Step size for frequencies up to the boundary frequency</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="number" placeholder="0" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Frequency Step 2 (step2 [hz])</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Step size for frequencies above the boundary frequency</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="number" placeholder="0" />
          </div>
        </div>
        
        {/* Column 3: System Parameters & Perturbation */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            System Parameters
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Configure general system parameters for the measurement</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Label</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Specify a label for this system parameter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input placeholder="$0.00" />
          </div>
          
          <h2 className="text-lg font-semibold mt-6 flex items-center gap-2">
            Perturbation
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Configure perturbation injection settings for the measurement</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h2>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="broadband" />
            <div className="flex items-center gap-2">
              <Label htmlFor="broadband">Broadband perturbation injection</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enable broadband perturbation for wider frequency range testing</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      {/* Simulation Parameters Section */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          Simulation Parameters
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Configure simulation-specific parameters</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h2>
        
        <div className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Label</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Specify a label for this simulation parameter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input placeholder="" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Label</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Specify a label for this simulation parameter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input placeholder="" />
          </div>
        </div>
      </div>
    </div>
  );
}
