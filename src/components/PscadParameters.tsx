
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function PscadParameters() {
  const [numToolboxes, setNumToolboxes] = useState("1");
  const [numProjects, setNumProjects] = useState("1");

  const generateToolboxRows = () => {
    return Array.from({ length: parseInt(numToolboxes) }, (_, index) => (
      <TableRow key={`toolbox-${index}`}>
        <TableCell>
          <Input type="text" placeholder={`TB${index + 1}`} />
        </TableCell>
        <TableCell>
          <Input type="text" placeholder="0.0" />
        </TableCell>
        <TableCell>
          <Input type="text" placeholder="0.0" />
        </TableCell>
        <TableCell>
          <Input type="text" placeholder="1" />
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {/* PSCAD Config Section - Column 1 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">PSCAD Config</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">PSCAD Version</label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Select your PSCAD version</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="text" className="mt-1" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Fortran Version</label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter Fortran version</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="text" className="mt-1" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Fortran Ext</label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter Fortran extension</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="text" className="mt-1" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">License Type</label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Select license type</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Professional" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="educational">Educational</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Project Settings Section - Column 2 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Project Settings</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Workspace Name</label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter workspace name</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input type="text" className="mt-1" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Number of Projects</label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Select number of projects</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Select onValueChange={setNumProjects} value={numProjects}>
              <SelectTrigger>
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {Array.from({ length: parseInt(numProjects) }, (_, index) => (
            <div key={`project-${index}`}>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Project Name {index + 1}</label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter project name</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input type="text" placeholder={`Project ${index + 1}`} className="mt-1" />
            </div>
          ))}
        </div>
      </section>

      {/* Toolbox Settings Section - Column 3 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Toolbox Settings</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Number of Toolboxes</label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Select number of toolboxes</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Select onValueChange={setNumToolboxes} value={numToolboxes}>
              <SelectTrigger>
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-md p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Toolbox ID</TableHead>
                  <TableHead>Vp_mag (kV)</TableHead>
                  <TableHead>Ip_mag (kA)</TableHead>
                  <TableHead>Project Number</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {generateToolboxRows()}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
}
