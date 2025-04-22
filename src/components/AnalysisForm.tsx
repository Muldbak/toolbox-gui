
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toggle } from "@/components/ui/toggle";

export function AnalysisForm() {
  const [outputFormat, setOutputFormat] = useState("tabular");
  const [sweepUnits, setSweepUnits] = useState("Hz");
  const [impedanceInAmplitude, setImpedanceInAmplitude] = useState(true);

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-8">
        {/* Column 1: Sweep Settings */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Sweep Settings</h2>
          
          <div className="space-y-2">
            <Label>Start Sweep</Label>
            <div className="flex gap-2">
              <Input type="number" placeholder="0" className="flex-1" />
              <Select value={sweepUnits} onValueChange={setSweepUnits}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Hz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hz">Hz</SelectItem>
                  <SelectItem value="kHz">kHz</SelectItem>
                  <SelectItem value="MHz">MHz</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>End Sweep</Label>
            <div className="flex gap-2">
              <Input type="number" placeholder="1000" className="flex-1" />
              <Select value={sweepUnits} onValueChange={setSweepUnits}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Hz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hz">Hz</SelectItem>
                  <SelectItem value="kHz">kHz</SelectItem>
                  <SelectItem value="MHz">MHz</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Number of Points</Label>
            <Input type="number" placeholder="100" />
          </div>
          
          <div className="space-y-2">
            <Label>Scale Type</Label>
            <RadioGroup defaultValue="log" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="log" id="scale-log" />
                <Label htmlFor="scale-log">Logarithmic</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="linear" id="scale-linear" />
                <Label htmlFor="scale-linear">Linear</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        {/* Column 2: Injection Settings */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Injection Settings</h2>
          
          <div className="space-y-2">
            <Label>Injection Type</Label>
            <Select defaultValue="current">
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current</SelectItem>
                <SelectItem value="voltage">Voltage</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Injection Amplitude</Label>
            <Input type="number" placeholder="0.1" />
          </div>
          
          <div className="space-y-2">
            <Label>Injection Point</Label>
            <Select defaultValue="pcc">
              <SelectTrigger>
                <SelectValue placeholder="Select Point" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pcc">PCC</SelectItem>
                <SelectItem value="terminal">Terminal</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Stabilization Time (ms)</Label>
            <Input type="number" placeholder="500" />
          </div>
          
          <div className="space-y-2">
            <Label>Measurement Time (ms)</Label>
            <Input type="number" placeholder="200" />
          </div>
        </div>
        
        {/* Column 3: Output Settings */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Output Settings</h2>
          
          <div className="space-y-2">
            <Label>Output Format</Label>
            <RadioGroup value={outputFormat} onValueChange={setOutputFormat} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tabular" id="format-tabular" />
                <Label htmlFor="format-tabular">Tabular</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="graph" id="format-graph" />
                <Label htmlFor="format-graph">Graph</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label>Impedance Format</Label>
            <div className="flex gap-2">
              <Toggle 
                pressed={impedanceInAmplitude} 
                onPressedChange={setImpedanceInAmplitude}
                className="data-[state=on]:bg-mint-100"
              >
                Amplitude/Phase
              </Toggle>
              <Toggle 
                pressed={!impedanceInAmplitude} 
                onPressedChange={(pressed) => setImpedanceInAmplitude(!pressed)}
                className="data-[state=on]:bg-mint-100"
              >
                Real/Imaginary
              </Toggle>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Export Path</Label>
            <div className="flex gap-2">
              <Input placeholder="/path/to/export" className="flex-1" />
              <Button variant="outline">Browse</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea placeholder="Add any notes about this analysis..." className="h-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
