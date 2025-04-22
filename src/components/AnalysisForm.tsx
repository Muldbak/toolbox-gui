
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

export function AnalysisForm() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {/* Frequency Range Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold mb-4">Frequency Range</h2>
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
            <div className="flex items-center gap-2">
              <Label>Boundary Frequency [Bound (hz)]</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Info about boundary frequency</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="text" className="mt-1" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Label>End Frequency [End (hz)]</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Info about end frequency</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="text" className="mt-1" />
          </div>
        </div>
      </div>

      {/* Resolution Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold mb-4">Resolution</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <Label>Frequency Increment (f1 hz)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Info about frequency increment</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Info about frequency step 1</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input type="text" className="mt-1" />
          </div>
          <div>
            <Label className="flex items-center gap-2">
              Frequency Step 2 (step2 hz)
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Info about frequency step 2</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input type="text" className="mt-1" />
          </div>
        </div>
      </div>

      {/* System Parameters Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold mb-4">System Parameters</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <Label>Label</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>System parameter label info</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
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
            <div className="flex items-center gap-2">
              <Label>Perturbation</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Info about perturbation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox id="broadband" />
              <label htmlFor="broadband" className="text-sm">
                Broadband perturbation injection
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
