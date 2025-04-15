
import { Button } from "@/components/ui/button";
import { FileText, Printer, RotateCcw, Square } from "lucide-react";

export function ActionButtons() {
  return (
    <div className="flex gap-2">
      <Button className="bg-mint-500 hover:bg-mint-600">
        Start Analysis
      </Button>
      <Button variant="destructive">
        <Square className="mr-2 h-4 w-4" />
        Stop
      </Button>
      <Button variant="outline">
        <FileText className="mr-2 h-4 w-4" />
        Export Results
      </Button>
      <Button variant="outline">
        <Printer className="mr-2 h-4 w-4" />
        Print Report
      </Button>
      <Button variant="outline">
        <RotateCcw className="mr-2 h-4 w-4" />
        Reset View
      </Button>
    </div>
  );
}
