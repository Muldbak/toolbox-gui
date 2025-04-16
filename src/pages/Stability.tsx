
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Stability() {
  return (
    <div className="flex justify-between p-6 space-x-6">
      {/* Grid Impedance Section */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4">Grid Impedance</h2>
        <div className="space-y-4">
          <Input placeholder="Enter grid impedance" />
          <Button variant="secondary" className="w-full">Browse</Button>
          
          <div className="space-y-2">
            <Label className="block">dB Input</Label>
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
            <Label className="block">Admittance Input</Label>
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
        <h2 className="text-lg font-semibold mb-4">Converter Impedance</h2>
        <div className="space-y-4">
          <Input placeholder="Enter converter impedance" />
          <Button variant="secondary" className="w-full">Browse</Button>
          
          <div className="space-y-2">
            <Label className="block">dB Input</Label>
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
            <Label className="block">Admittance Input</Label>
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
        <h2 className="text-lg font-semibold mb-4">Impedance Plot</h2>
        <div className="space-y-4">
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

          <div className="space-y-2">
            <Label className="block">dB Input</Label>
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
            <Label className="block">Plot in SISO Model</Label>
            <RadioGroup defaultValue="no" className="flex gap-4">
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
