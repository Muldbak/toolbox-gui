import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

export function AnalysisForm() {
  return (
    <div className="space-y-8 p-6">
      {/* Frequency Range Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Frequency Range</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <Label>Start Frequency [Start (hz)]</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Info about start frequency</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input type="text" className="mt-1" />
            </div>
            <div>
              <Label className="flex items-center gap-2">
                Boundary Frequency [Bound (hz)]
                <Tooltip content="Info about boundary frequency">
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </Label>
              <Input type="text" className="mt-1" />
            </div>
            <div>
              <Label className="flex items-center gap-2">
                End Frequency [End (hz)]
                <Tooltip content="Info about end frequency">
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </Label>
              <Input type="text" className="mt-1" />
            </div>
          </div>

          {/* Resolution Section */}
          <div className="space-y-4">
            <div>
              <Label className="flex items-center gap-2">
                Frequency Increment (f1 hz)
                <Tooltip content="Info about frequency increment">
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scale1">Scale 1</SelectItem>
                  <SelectItem value="scale2">Scale 2</SelectItem>
                  <SelectItem value="scale3">Scale 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="flex items-center gap-2">
                Frequency Step 1 (step1 hz)
                <Tooltip content="Info about frequency step 1">
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </Label>
              <Input type="text" className="mt-1" />
            </div>
            <div>
              <Label className="flex items-center gap-2">
                Frequency Step 2 (step2 hz)
                <Tooltip content="Info about frequency step 2">
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </Label>
              <Input type="text" className="mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* System Parameters Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">System Parameters</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label className="flex items-center gap-2">
              Label
              <Tooltip content="System parameter label info">
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="S0.00" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="s0">S0.00</SelectItem>
                <SelectItem value="s1">S1.00</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="flex items-center gap-2">
              Perturbation
              <Tooltip content="Info about perturbation">
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </Label>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="broadband" />
              <label htmlFor="broadband" className="text-sm">
                Broadband perturbation injection
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Simulation Parameters Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Simulation Parameters</h2>
        <div className="space-y-4">
          <div>
            <Label className="flex items-center gap-2">
              Label
              <Tooltip content="Simulation parameter label info">
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </Label>
            <Input type="text" className="mt-1" />
          </div>
          <div>
            <Label className="flex items-center gap-2">
              Label
              <Tooltip content="Additional simulation parameter info">
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </Label>
            <Input type="text" className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
