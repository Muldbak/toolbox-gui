
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

export function PscadParameters() {
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
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Project Name</label>
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
            <Input type="text" placeholder="Project 1" className="mt-1" />
          </div>
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
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-md p-4">
            <table className="w-full">
              <thead>
                <tr className="text-sm font-medium">
                  <th className="text-left pb-2">Toolbox ID</th>
                  <th className="text-left pb-2">Vp_mag (kV)</th>
                  <th className="text-left pb-2">Ip_mag (kA)</th>
                  <th className="text-left pb-2">Project Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Input type="text" className="w-full" /></td>
                  <td><Input type="text" className="w-full" /></td>
                  <td><Input type="text" className="w-full" /></td>
                  <td><Input type="text" className="w-full" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

