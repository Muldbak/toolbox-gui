
import { CircuitBoard, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={cn("w-60 bg-mint-50 border-r min-h-screen p-4", className)}>
      <div className="flex items-center gap-2 mb-8">
        <div className="text-mint-500 font-bold text-2xl">AI STABILITY</div>
      </div>
      
      <nav className="space-y-2">
        <Link
          to="/automated-impedance"
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded text-mint-700 hover:bg-mint-100",
            (path === "/automated-impedance" || path === "/") && "bg-mint-100"
          )}
        >
          <CircuitBoard size={20} />
          <span>Automated Impedance</span>
        </Link>
        
        <Link 
          to="/stability"
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded text-mint-700 hover:bg-mint-100",
            path.startsWith("/stability") && "bg-mint-100"
          )}
        >
          <Activity size={20} />
          <span>Stability</span>
        </Link>
      </nav>
    </div>
  );
}
