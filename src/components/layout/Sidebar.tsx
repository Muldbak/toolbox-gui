
import { FileText, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-60 bg-mint-50 border-r min-h-screen p-4", className)}>
      <div className="flex items-center gap-2 mb-8">
        <div className="text-mint-500 font-bold text-2xl">AI STABILITY</div>
      </div>
      
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 rounded text-mint-700 hover:bg-mint-100"
        >
          <FileText size={20} />
          <span>Automated Impedance</span>
        </a>
        
        <a 
          href="#" 
          className="flex items-center gap-2 px-3 py-2 rounded bg-mint-100 text-mint-700"
        >
          <Activity size={20} />
          <span>Stability</span>
        </a>
      </nav>
    </div>
  );
}
