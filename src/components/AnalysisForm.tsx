
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function AnalysisForm() {
  const [scale, setScale] = useState("logarithmic");

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Frequency Range */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Frequency Range</h2>
          
          <div className="space-y-2">
            <Label>Start Frequency (Start [hz])</Label>
            <Input type="number" placeholder="0" />
          </div>
          
          <div className="space-y-2">
            <Label>Boundary Frequency (Bound [hz])</Label>
            <Input type="number" placeholder="0" />
          </div>
          
          <div className="space-y-2">
            <Label>End Frequency (End [hz])</Label>
            <Input type="number" placeholder="0" />
          </div>
        </div>
        
        {/* Column 2: Resolution */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Resolution</h2>
          
          <div className="space-y-2">
            <Label>Frequency Increment (1 [hz])</Label>
            <Select defaultValue={scale}>
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
            <Label>Frequency Step 1 (step1 [hz])</Label>
            <Input type="number" placeholder="0" />
          </div>
          
          <div className="space-y-2">
            <Label>Frequency Step 2 (step2 [hz])</Label>
            <Input type="number" placeholder="0" />
          </div>
        </div>
        
        {/* Column 3: System Parameters & Perturbation */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">System Parameters</h2>
          
          <div className="space-y-2">
            <Label>Label</Label>
            <Input placeholder="$0.00" />
          </div>
          
          <h2 className="text-lg font-semibold mt-6">Perturbation</h2>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="broadband" />
            <Label htmlFor="broadband">Broadband perturbation injection</Label>
          </div>
        </div>
      </div>

      {/* Simulation Parameters Section */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-6">Simulation Parameters</h2>
        
        <div className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input placeholder="" />
          </div>
          
          <div className="space-y-2">
            <Label>Label</Label>
            <Input placeholder="" />
          </div>
        </div>
      </div>
    </div>
  );
}
